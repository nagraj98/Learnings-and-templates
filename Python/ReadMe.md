

# Basics

## Datetime

We can use `datetime.now()` to get the current date and time, and `strftime()` to create a string representing date and time in another format.

```python
	from datetime import datetime

	# datetime object containing current date and time
	now = datetime.now()
	print("now =", now)
	# prints in following format : now = 2021-06-25 07:58:56.550604

	# formatting the date into a string with like dd/mm/YY H:M:S
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


# Python Installation

## Anaconda

It is better to just install [anaconda distribution](https://www.anaconda.com/products/distribution), as along with python it includes the jupyter installation which is helpful for creating notebooks.

Once it is installed, go to cmd and run `python --version`. 
There's a possibility that you will get an error like "python is not recognized ...".

This is because we need to add python to our (system's or user's) environment variables. First, open the anaconda prompt and run `where python`, which will givee the locations where python is installed. Let us say it is "C:\Installations\Anaconda\python.exe". So we need to add "C:\Installations\Anaconda" to the environment variables.

Also add the "C:\Installations\Anaconda\Library\bin", to avoid issues with using pip. If we don't add this, we get the error pip-is-configured-with-locations-that-require-tls-ssl-however-the-ssl-module-in-python-is-not-available.
