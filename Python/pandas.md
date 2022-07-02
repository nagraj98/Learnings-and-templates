placeholder

### Suppress warnings in notebook
```python
import warnings
warnings.filterwarnings('ignore')
```

# Pandas

### Convert dataframe to dictionary :
```python
mydict = df.to_dict(orient='dict')
```
important values for orient.
- ‘dict’ (default) : dict like {column -> {index -> value}}
- ‘list’ : dict like {column -> [values]}
- ‘records’ : list like [{column -> value}, … , {column -> value}]

### Reading a .mat file into a dataframe :

For simple structure : [answer 1](https://stackoverflow.com/a/38197530)

For nested structures : [answer 2](https://stackoverflow.com/a/60364102) along with answer 1


### Dropping values
```python
# drop columns :
df.drop(col_labels, axis=1, inplace = True)
df.drop(columns = col_labels, inplace = True)

# drop rows
df.drop(row_labels, axis=0, inplace = True)
df.drop(index = row_labels, inplace = True)

```

### Filtering Data
```python

# use query to quickly filter data
new_df = df.query("col_n < 8 and col_n > 3")
new_df = df.query("col_action in ['walking', 'running', 'dancing']")

# using loc to filter
new_df = df.loc[df["col_n"] == 2]

# using string methods 
new_df = df.loc[df["col_action"].str.contains('walk|run')]

# using isin and a list
actlist = ["walk", "run", "swim","jog"]
new_df = df[df['col_action'].isin(actlist)]

# Note : skipping loc in above will work exactly the same. But it is better to be explicit on how we want to index. 
# Also, loc allows to use row_index as well as col_index, as below :
new_column = df.loc[df["col_action"].str.contains('walk|run')]

# This can be useful while replacing values in a column based on condition.
df.loc[df["col_action"].str.contains('walk|run')] = "exercise"
```

### Moving a column position in a dataframe
```python
# pop the column out
col_n = df.pop('col_name')
  
# insert it at the 0th position
df.insert(0, 'new_col_name', col_n)
```

### Create an id column based on the row index 
```python
df["id"] = df.index + 1
```

### fillna
```python
# fill all values in a dataframe
df = df.fillna(0)

# fill one column's null values
df['col1'] = df['col1'].fillna(0)

# fill multiple column's null values
df[['col1', 'col2']] = df[['col1', 'col2']].fillna(0)
```

### Reset index

```python
df = pd.read_csv('data.csv')
df.head(3)
```

|     | col_1   | col_2   |
|----:|:--------|:--------|
|  23 | val_11  | val_21  |
|  12 | val_12  | val_22  |
|  6  | val_13  | val_23  |




```python
df.reset_index(inplace=True)
df.head(3)
```

|     | col_1   | col_2   |
|----:|:--------|:--------|
|  0 | val_11  | val_21  |
|  1 | val_12  | val_22  |
|  2  | val_13  | val_23  |


### Merge dataframes based on index
```python
merged = df1.merge(df2, left_index=True, right_index=True)
```



### Sort dataframe based on a column

```python
final_df = df.sort_values(by='col2')
```

### Save a df to csv without the index column
```python
df.to_csv('your.csv', index=False)
```

### Merge multiple csv files into one dataframe
```python
files = ["file1.csv", "file2.csv", "file3.csv"]
df = pd.concat(map(pd.read_csv, files), ignore_index=True)
```

### Count the frequency that a value occurs in a dataframe column
```python
df['col_1'].value_counts()
```

### Get the row count of a pandas dataframe

```python
# way 1 (faster)
len(df.index)

# way 2
df.shape[0]
```

Check [this awesome answer](https://stackoverflow.com/a/55435185) out which summarizes all the scenarios in which we need to count something related to dataframes.

# Sklearn

### Train test split
```python
from sklearn.model_selection import train_test_split

# seperate the classifiers and the label
x = df[df.columns[:-1]]
y = data_df['label']

x_train, x_test, y_train, y_test = train_test_split(x,y,test_size=0.2, random_state=1)
```

### Confusion matrix
```python
from sklearn.metrics import confusion_matrix, ConfusionMatrixDisplay

cm = confusion_matrix(y_test, predictions, labels=clf.classes_)
disp = ConfusionMatrixDisplay(confusion_matrix=cm, display_labels=clf.classes_)

disp.plot()
plt.show()
```

### Evaluation metrics
```python
from sklearn.metrics import accuracy_score
y_pred = [0, 2, 1, 3]
y_true = [0, 1, 2, 3]
accuracy_score(y_true, y_pred)
```

### Getting predictions from prediction probabilites
```python
np.argmax(proba, axis=1)
```

### Grid Search CV
```python
from sklearn.model_selection import GridSearchCV

GS_clf = GridSearchCV(clf, params, cv = 10, n_jobs=-1)
fitted_grid = GS_clf.fit(x_train, y_train)

print("\n The best score across ALL searched params:\n",fitted_grid.best_score_)
print("\n The best parameters across ALL searched params:\n",fitted_grid.best_params_)
```

# Numpy

### How to convert a dictionary to numpy array.
```python
dict = {'col1': 23, 'col2': 41, 'col3': 7}

data = list(dict.items())
numpyArray = np.array(data)
print(numpyArray)

data = list(dict.values())
numpyArray = np.array(data)
print(numpyArray)
```
```
[['col1', '23']
 ['col2', '41']
 ['col3', 7]]

[23, 41, 7]
```


# Issues

Q. lgbm model prediction error : ```ValueError: Input numpy.ndarray must be 2 dimensional```

A. The error message can be a bit confusing or even misleading. The reason for this error is the difference between the data type used while training Vs that used while predicting. For example if you used a dataframe for training, and are passing a numpy array while predicting, you'll get this error.

&nbsp;

Q. Error while creating a dataframe from a dictionary : ```ValueError: If using all scalar values, you must pass an index```

A. You are using a dictionary where every key has only one scalar value, so the solution is to provide an index : 
```diff
-df = pd.DataFrame({'A': 1, 'B': 2, 'C': 3, 'D': 4})
+df = pd.DataFrame({'A': 1, 'B': 2, 'C': 3, 'D': 4}, index=[0])
```

Q. train_test_split() error: ```Found input variables with inconsistent numbers of samples```

A. This error is because `X` and `Y` don't have the same length (which is what train_test_split requires). Hence make sure that `X.shape[0] == Y.shape[0]`



