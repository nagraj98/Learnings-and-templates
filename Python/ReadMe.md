
# Basics

## Datetime

We can use `datetime.now()` to get the current date and time, and `strftime()` to create a string representing date and time in another format.

	from datetime import datetime

	# datetime object containing current date and time
	now = datetime.now()
	print("now =", now)
	# prints in following format : now = 2021-06-25 07:58:56.550604

	# formatting the date into a string with like dd/mm/YY H:M:S
	dt_string = now.strftime("%d/%m/%Y %H:%M:%S")
	print("date and time =", dt_string)
	# prints following : date and time = 25/06/2021 07:58:56