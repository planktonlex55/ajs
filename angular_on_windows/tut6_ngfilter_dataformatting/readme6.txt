
Key notes:-
> Filters can be used to format, sort and filter data.
	>> lowercase, uppercase, number, currency, date.
	>> limitTo filter: limit the number of rows or characters in a string.
	eg. {{expression | limitTo : limit : begin }} //2 params. limit is reqd. begin is optional.
	
> Filters can be used with a binding expression or a directive.
> To apply a filter use a pipe character.
eg.
{{expression | filterName:parameter }}


Task:-
> Add a "Rows to display: " which will be a number type textbox which will have incremental n decremental options.
	>> <input type="number" step="1" min="0" max="5" ng-model="rowLimit" ></input> , use this with the ng-repeat statement with limitTo filter.

goto http://127.0.0.1/z_radical/5.html on chrome.
