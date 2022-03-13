# Virtual Environments

The main superpower of python is the ever-increasing number of libraries and modules that we can use in our projects. And with great power comes great responsibility. So let's take a look at how to use this superpower of python responsibly.

With such a large number of libraries, it just so happens that many of them rely on other third-party libraries, and some of them are not actively managed or updated. So this might mean that using a library A needs an x version of library C, and using a library B needs a y version of library C. In addition to that, our own project P1 might be dependent  on a particular z version of library C. So if we inadvertantly use library A for a new project P2, it will break our project P1.

The simple and recommended solution to avoid such a scenario is to use  Virtual environments using python's [venv](https://docs.python.org/3/library/venv.html):

1. Create a virtual environment named myvenv :
    `python -m venv myvenv`
    
2. Activate this virtual environment :
    `.\myvenv\Scripts\activate`
    
3. Inside this virtual environment, install libraries that you want for this project, and go ahead.

Each virtual environment is its own little copy of the Python runtime, taking up about 25 to 30 MB

## Connecting virtual environment to jupyter
1. Inside this virtual environment install ipykernel :
`pip install ipykernel`

2. Add this virtual environment as a kernel
`python -m ipykernel install --name=myvenv`

3. Now go to Jupyter notebook
kernel -> change kernel -> select myvenv
