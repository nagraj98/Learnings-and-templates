Follow along : [experiment tracking github](https://github.com/DataTalksClub/mlops-zoomcamp/tree/main/02-experiment-tracking)

Instructor - Cristian Martinez (OLX)

# 2.1 Experiment tracking Intro

### Important Concepts :
- ML Experiment : the process of building an ML model ( including all the different models and different hyperparameters that you try before settling on the final model)
- Experiment run : each trial in an ML experiment
- Run artifact : any file that is associated with an ML run, for eg. the model itself, or any visualisations that you want to save.
- Experiment metadata : info related to the experiment.

### What is Experiment tracking ?

It is the process of keeping track of all the **relevant information** from an ML experiment, like the Source code, environment, data, model, hyperparameters, metrics, etc.

### Why is it important ?

1. Reproducibility : As we are working in Data **Science**, it is important for the results to be reproducible.
2. Organization : So that our colleagues or our future selves can find and understand things better.
3. Optimization : Tracking the evolution of models can help in optimization. (besides the automated optimization methods/tools)

### Why is tracking info in a spreadsheet is not enough ?

0. (my addition) Effort intensive, requires manually capturing all info.
1. Error prone (because it is manual)
2. No standard format
3. Difficulties in visibility and collaboration.

### Alternative - MLflow

It is a python package having four important modules for the machine learning lifecycle :
- Tracking
- Models
- Model Registry
- Projects (out of scope of this course)

For more info : MLflow [official documentation](https://mlflow.org/)


# Getting Started with MLflow

Install the required packages from the requirements.txt in the repo :
```
pip install -r requirements.txt
```