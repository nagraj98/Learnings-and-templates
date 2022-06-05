# Python Installation

## Anaconda

It is better to just install [anaconda distribution](https://www.anaconda.com/products/distribution), as along with python it includes the jupyter installation which is helpful for creating notebooks.

Once it is installed, go to cmd and run `python --version`. 
There's a possibility that you will get an error like "python is not recognized ...".

This is because we need to add python to our (system's or user's) environment variables. First, open the anaconda prompt and run `where python`, which will givee the locations where python is installed. Let us say it is "C:\Installations\Anaconda\python.exe". So we need to add "C:\Installations\Anaconda" to the environment variables.

Also add the "C:\Installations\Anaconda\Library\bin", to avoid issues with using pip. If we don't add this, we get the error pip-is-configured-with-locations-that-require-tls-ssl-however-the-ssl-module-in-python-is-not-available.


# Basics

## Datetime

We can use `datetime.now()` to get the current date and time, and `strftime()` to create a string representing date and time in another format.

```python
	from datetime import datetime

	# datetime object containing current date and time
	now = datetime.now()
	print("now =", now)
	# prints in following format : now = 2021-06-25 07:58:56.550604

	# formatting the date into a string like dd/mm/YY H:M:S
	dt_string = now.strftime("%d/%m/%Y %H:%M:%S")
	print("date and time =", dt_string)
	# prints following : date and time = 25/06/2021 07:58:56
```

## Difference between `is` and `==` :
`is` will return `True` if two variables point to the same object (in memory),
 `==` will return `True` if the objects referred to by the variables are equal in value.
 

 ```python
	>>> a = [1, 2, 3]
	>>> b = a
	>>> b is a 
	True
	>>> b == a
	True

	# Make a new copy of list `a` via the slice operator, 
	# and assign it to variable `b`
	>>> b = a[:] 
	>>> b is a
	False
	>>> b == a
	True
```

## Initialising a list with all elements having a particular value :
```python
	l = [0] * 10
	print(l)
	# [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
```

## Adding Items to dictionary :
```python
	thisdict =  {  
		"brand": "Ford",  
		"model": "Mustang",  
		"year": 1964  
		}  
	thisdict["color"] = "red"
```

# Advanced

## Getting an image from base64 data
Generally, the base64 representation of an image follows the below pattern :

"data:image/format;base64,dfljgndlfnlffiifldk....."

The actual data of the image is in the part after *base64,* Hence we can get image from it like this :
```python
# let us say we have data for jpeg image.
binString = "data:image/jpeg;base64,dfljgndlfnlffiifldk....."

# get the data after the comma.
base64String  =  binString.split(",")[1]

# convert string into bytes like object
bytesObject  =  bytes(base64String, "utf-8")

# decode the bytes like object
image_binary  =  base64.decodestring(bytesObject)

# write to a file. This is our image file.
with  open('image2.jpeg','wb') as  f:
	f.write(image_binary)
```
For converting string to bytes like object, we can also use the encode method on the string. This method has utf-8 as the default encoding when no argument is given.
```python
bytesObject = base64String.encode()
```

## Timing a function

```python
import time

def myfunc(x):
	return x**2

%time [myfunc(i) for i in range(10)]
```

## Unpacking (splat) operator *

The * operator unpacks the individual elements of an array.

```python
name = "python"
characters = [*name]

print(characters)
# ['p', 'y', 't', 'h', 'o', 'n']
```

For more detail understanding and more examples, read [this blog](https://towardsdatascience.com/unpacking-operators-in-python-306ae44cd480).

## OS module

```python
import os

os.path.exists("path/to/thefolder")
# returns bool (true/false)

os.mkdir("path/to/thefolder/intermediate")
# If thefolder exists, this will create the intermediate directory.

os.mkdir("path/to/thefolder/intermediate/new/newer/newest")
# Will throw error.

os.makedirs("path/to/thefolder/intermediate/new/newer/newest")
# If thefolder exists, then all the remaining directories, namely - intermediate, new, newer, newest - will be created.
```

More functions :
```python
os.remove()
os.rmdir()
os.path.join(location, file)
os.name
os.rename()
os.path.getsize()
os.listdir(path)
os.chdir()
os.getcwd()
```

#### Getting just the name of the file, from the path :

```python
filepath = 'c:\dir1\dir2\\file_01.png'

# way 1
name = os.path.basename(filepath)
print(name)

# way 2
_, tail = os.path.split(filepath)
print(tail)
```

Both the ways will print `file_01.png`



## Parallelising using joblib 

Joblib is the library used by other libraries like scikitlearn to run jobs in parallel. Even joblib is just a wrapper which uses other libraries for running jobs in parallel.

Backend(python library) choices given by joblib :
- loky (default)
- multiprocessing
- threading
- dask
- custom backend

Below are the steps for parallelising a function;s execution :
- Wrap normal python function calls into delayed() method of joblib. This will create a delayed function that won't execute immediately.
- Create Parallel object with a number of processes/threads to use for parallel computing. This will create a parallel pool with that many processes available for processing in parallel.
- Pass list of delayed wrapped function to an instance of Parallel. It'll run them all in parallel and return the result as a list.

```python
from joblib import Parallel, delayed

def my_fun(x):
	return math.sqrt(i**2)

num = 10

# The 3 steps
delayed_funcs = [delayed(my_fun)(i) for i in range(num)]
parallel_pool = Parallel(n_jobs=-1)
%time parallel_pool(delayed_funcs)

# The 3 steps in one line
Parallel(n_jobs=2)(delayed(my_fun)(i) for i in range(num))
```
The default value of n_jobs is -1, which indicates that it should use all available cores on a computer.

The decision of using multithreading vs multiprocessing is based on the backend that is used. For the default backend loky, the default choice is multithreading.

The above information was collected from [this amazing blog](https://coderzcolumn.com/tutorials/python/joblib-parallel-processing-in-python), do check it out for more examples.


# Issues

Q. tqdm: 'module' object is not callable
A. This is a problem related to your import. Change the import as shown below :
```diff
- import tqdm
+ from tqdm import tqdm
```