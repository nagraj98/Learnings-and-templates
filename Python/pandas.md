placeholder

### Suppress warnings in notebook
```python
import warnings
warnings.filterwarnings('ignore')
```

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

# Note : skipping loc in above will work exactly the same. But it is better to be explicit on how we want to index. 
# Also, loc allows to use row_index as well as col_index, as below :
s
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

### Train test split
```python
from sklearn.model_selection import train_test_split

# seperate the classifiers and the label
x = df[df.columns[:-1]]
y = data_df['label']

x_train, x_test, y_train, y_test = train_test_split(x,y,test_size=0.2, random_state=1)
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

### Sort dataframe based on a column

```python
final_df = df.sort_values(by='col2')
```

### Get the row count of a pandas dataframe

```python
# way 1 (faster)
len(df.index)

# way 2
df.shape[0]
```

Check [this awesome answer](https://stackoverflow.com/a/55435185) out which summarizes all the scenarios in which we need to count something related to dataframes.