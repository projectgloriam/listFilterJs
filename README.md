# listFilterJs
This simple plugin places a search box on top of your unordered and ordered list elements and filters their list elements by query. 

## To use this plugin
Just put the ul / ol element you want to select in the function's arguement.
```
<script type="text/javascript" src="jquery.js"></script>

<script type="text/javascript" src="listFilter.js"></script>
```
Place this 
`````````
$(function() {
  listFilter('ul');
});

`````````
