# Markdown

## Adding two empty lines

```md
## Creates 2 Lines that CAN be selected as text
## -------------------------------------------------

### The non-breaking space ASCII character
&nbsp;
&nbsp;

### HTML <(br)/> tag
<br />
<br />

## Creates 2 Lines that CANNOT be selected as text
## -------------------------------------------------

### HTML Entity &NewLine;
&NewLine;
&NewLine;

### Backticks with a space inside followed by two spaces
`(space)`(space)(space)
`(space)`(space)(space)
#### sample:
` `  
` `
```

## Adding a git diff in markdown :

```md
    ```diff
    - the line to remove
    + the line to add
    ```
```

```diff
- the line to remove
+ the line to add
```