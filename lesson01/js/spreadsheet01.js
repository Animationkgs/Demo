


var spreadsheet= range(1,12);
spreadsheet[0]= 'No Spreadsheets';
spreadsheet[1]= 'No Spreadsheets';
spreadsheet[2]= 'No Spreadsheets';
spreadsheet= spreadsheet.map( function (x,n) { 
	return dom.div(x).cn('spreadsheet');
});


