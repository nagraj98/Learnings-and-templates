placeholder

#### Convert dataframe to dictionary :
```python
mydict = df.to_dict(orient='dict')
```
important values for orient.
- ‘dict’ (default) : dict like {column -> {index -> value}}
- ‘list’ : dict like {column -> [values]}
- ‘records’ : list like [{column -> value}, … , {column -> value}]


#### fillna
```python
# fill all values in a dataframe
df = df.fillna(0)

# fill one column's null values
df['col1'] = df['col1'].fillna(0)

# fill multiple column's null values
df[['col1', 'col2']] = df[['col1', 'col2']].fillna(0)
```

#### Reset index

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

#### Sort dataframe based on a column

```python
final_df = df.sort_values(by='col2')
```

#### Get the row count of a pandas dataframe

```python
# way 1 (faster)
len(df.index)

# way 2
df.shape[0]
```

Check [this awesome answer](https://stackoverflow.com/a/55435185) out which summarizes all the scenarios in which we need to count something related to dataframes.