import ipywidgets
from ipywidgets import interact
import matplotlib.pyplot as plt
import numpy as np

def parabola(a, b, c, a1, b1, c1):
    fig, ax = plt.subplots()
    x = np.linspace(-10, 10, 200)
    y = np.linspace(-10, 10, 200)
    ax.axis([-10, 10, -10, 10])
    ax.grid(True)
    ax.plot(y, (a*(x**2) + (b*x) + (c)))
    ax.plot(y, (a1*(x**2) + (b1*x) + (c1)))
interact(parabola, a = (-10,10,1), b = (-10, 10), c = (-10, 10),a1 = (-10,10,1), b1 = (-10, 10), c1 = (-10, 10))

