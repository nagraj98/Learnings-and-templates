
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