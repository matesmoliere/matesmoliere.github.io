import ipywidgets
from ipywidgets import interact
import matplotlib.pyplot as plt
import numpy as np

def func_plot(k = 1):
    x = np.linspace(-2, 2, 200)
    plt.plot(x, np.sin(2*np.pi*k*x))
func_plot()

interact(func_plot, k = (1,10))


def parabola(a, b, c):
    x = np.linspace(-10, 10, 200)
    y = np.linspace(-10, 10, 200)
    plt.axis([-10, 10, -10, 10])
    plt.grid(True)
    plt.plot(y, (a*(x**2) + (b*x) + (c)))

interact(parabola, a = (-2,2,0.05), b = (-10, 10), c = (-10, 10))

def parabola(a, b, c, a1, b1, c1):
    fig, (ax1, ax2) = plt.subplots(nrows=1, ncols=2,figsize=(18, 4))
    x = np.linspace(-10, 10, 200)
    y = np.linspace(-10, 10, 200)
    ax1.axis([-10, 10, -10, 10])
    ax1.grid(True)
    ax1.plot(y, (a*(x**2) + (b*x) + (c)))
    ax2.axis([-10, 10, -10, 10])
    ax2.grid(True)
    ax2.plot(y, (a1*(x**2) + (b1*x) + (c1)))
interact(parabola, a = (-10,10,1), b = (-10, 10), c = (-10, 10),a1 = (-10,10,1), b1 = (-10, 10), c1 = (-10, 10))

def parabola(a, b, c, a1, b1, c1):
    fig, ax = plt.subplots()
    x = np.linspace(-10, 10, 200)
    y = np.linspace(-10, 10, 200)
    ax.axis([-10, 10, -10, 10])
    ax.grid(True)
    ax.plot(y, (a*(x**2) + (b*x) + (c)))
    ax.plot(y, (a1*(x**2) + (b1*x) + (c1)))
interact(parabola, a = (-10,10,1), b = (-10, 10), c = (-10, 10),a1 = (-10,10,1), b1 = (-10, 10), c1 = (-10, 10))
