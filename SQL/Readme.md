# MySQL

## Crud

`C`reate, `R`ead, `U`pdate, `D`elete

```sql
-- inserting into a table. If we are adding all the values, specifying the column names is not required
INSERT INTO table_name (col1, col2, col3, ...)
VALUES (val1, val2, val3, ...);

-- Reading all values of a table
SELECT * FROM table_name;

-- Updating values of some columns
UPDATE table_name
SET col1 = val1, col2 = val2, ...
WHERE condition;

-- Deleting some rows of a table
DELETE FROM table_name 
WHERE condition;
```