
Key notes:-
> Sorting filters
eg.
{{ orderBy_expression | orderBy : expression : reverse }} , expression is reqd., reverse is optional 
note expression here means the name of the property column, eg. name/dob/salary, etc.

ng-repeat="employee in employees | orderBy : 'salary' : false"

Task:-
> to sort in ascending order, set reverse to false
	>> to sort in descending order, set reverse to true
> u can also use + or - to sort in ascending or descending order respectively.
eg. ng-repeat ="employee in employees | orderBy: '+salary'"


goto http://127.0.0.1/z_radical/5.html on chrome.
