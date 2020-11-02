import ipywidgets
from ipywidgets import interact
import matplotlib.pyplot as plt
import numpy as np

def func_plot(k = 1):
    x = np.linspace(-2, 2, 200)
    plt.plot(x, np.sin(2*np.pi*k*x))

interact(func_plot, k = (1,10))
