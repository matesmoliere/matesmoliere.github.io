document.addEventListener('DOMContentLoaded', () => {
    const equationType = document.getElementById('equationType');
    const difficultyRange = document.getElementById('difficultyRange');
    const difficultyValue = document.getElementById('difficultyValue');
    const generateBtn = document.getElementById('generateBtn');
    const showSolutionBtn = document.getElementById('showSolution');
    const equationDisplay = document.getElementById('equation');
    const solutionDisplay = document.getElementById('solution');

    let currentSolution = null;

    // Update difficulty value display
    difficultyRange.addEventListener('input', () => {
        difficultyValue.textContent = difficultyRange.value;
    });

    // Generate random integer within range
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Generate first order equation (ax + b = c)
    function generateFirstOrder(range) {
        const a = getRandomInt(1, range);
        const b = getRandomInt(-range, range);
        const x = getRandomInt(-range, range);
        const c = a * x + b;

        const equation = `${a}x ${b >= 0 ? '+ ' + b : '- ' + Math.abs(b)} = ${c}`;
        const steps = [
            `Mover la constante al lado derecho: ${a}x = ${c - b}`,
            `Dividir ambos lados por ${a}: x = ${x}`
        ];
        return { equation, solution: x, steps };
    }

    // Generate second order equation (ax² + bx + c = d)
    function generateSecondOrder(range) {
        const a = getRandomInt(1, Math.max(1, Math.floor(range / 2)));
        const b = getRandomInt(-range, range);
        const c = getRandomInt(-range, range);
        const x = getRandomInt(-Math.min(3, range), Math.min(3, range));
        const d = a * x * x + b * x + c;

        const equation = `${a}x² ${b >= 0 ? '+ ' + b : '- ' + Math.abs(b)}x ${c >= 0 ? '+ ' + c : '- ' + Math.abs(c)} = ${d}`;
        
        // Move everything to one side to get standard form: ax² + bx + (c-d) = 0
        const standardC = c - d;
        
        // Calculate discriminant and solutions using quadratic formula
        const discriminant = b * b - 4 * a * standardC;
        const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);

        const steps = [
            `Paso 1: Mover todos los términos al lado izquierdo para obtener la forma estándar:`,
            `${a}x² ${b >= 0 ? '+ ' + b : '- ' + Math.abs(b)}x ${standardC >= 0 ? '+ ' + standardC : '- ' + Math.abs(standardC)} = 0`,
            `Paso 2: Identificar los coeficientes:`,
            `a = ${a}, b = ${b}, c = ${standardC}`,
            `Paso 3: Usar la fórmula cuadrática: x = (-b ± √(b² - 4ac)) / (2a)`,
            `Paso 4: Calcular el discriminante:`,
            `b² - 4ac = ${b}² - 4(${a})(${standardC}) = ${discriminant}`,
            `Paso 5: Sustituir en la fórmula cuadrática:`,
            `x = (${-b} ± √${discriminant}) / (2 × ${a})`,
            `x = ${-b} ± ${Math.sqrt(discriminant)} / ${2 * a}`,
            `x₁ = ${x1}`,
            `x₂ = ${x2}`,
            `Paso 6: Verificar que x = ${x} es la solución sustituyendo en la ecuación original:`,
            `${a}(${x})² ${b >= 0 ? '+ ' + b : '- ' + Math.abs(b)}(${x}) ${c >= 0 ? '+ ' + c : '- ' + Math.abs(c)} = ${d}`
        ];

        return { equation, solution: x, steps };
    }

    // Generate equation based on selected type
    function generateEquation() {
        const range = parseInt(difficultyRange.value);
        const type = equationType.value;
        
        let result;
        if (type === 'first') {
            result = generateFirstOrder(range);
        } else {
            result = generateSecondOrder(range);
        }

        equationDisplay.textContent = result.equation;
        
        // Format solution steps
        const stepsHtml = result.steps.map(step => `<div class="step">${step}</div>`).join('');
        solutionDisplay.innerHTML = `
            <div class="final-solution">Solución: x = ${result.solution}</div>
            <div class="solution-steps">
                <h3>Pasos para resolver:</h3>
                ${stepsHtml}
            </div>
        `;
        
        solutionDisplay.style.display = 'none';
        currentSolution = result.solution;
    }

    // Event listeners
    generateBtn.addEventListener('click', generateEquation);
    
    showSolutionBtn.addEventListener('click', () => {
        if (currentSolution !== null) {
            solutionDisplay.style.display = solutionDisplay.style.display === 'none' ? 'flex' : 'none';
            showSolutionBtn.textContent = solutionDisplay.style.display === 'none' ? 'Mostrar Solución' : 'Ocultar Solución';
        }
    });

    // Generate initial equation
    generateEquation();
}); 