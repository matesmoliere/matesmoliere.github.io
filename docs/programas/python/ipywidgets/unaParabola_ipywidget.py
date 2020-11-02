import ipywidgets
from ipywidgets import interact
import matplotlib.pyplot as plt
import numpy as np

def parabola(a, b, c):
    x = np.linspace(-10, 10, 200)
    y = np.linspace(-10, 10, 200)
    plt.axis([-10, 10, -10, 10])
    plt.grid(True)
    plt.plot(y, (a*(x**2) + (b*x) + (c)))

interact(parabola, a = (-2,2,0.05), b = (-10, 10), c = (-10, 10))
