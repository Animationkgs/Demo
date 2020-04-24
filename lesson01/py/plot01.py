


var plot= range(1,12);
plot[0]= 'No Plots';
plot[1]= 'No Plots';
plot[2]= 'No Plots';
plot= plot.map( function (x,n) { 
	return dom.div(x).cn('plot'); 
});


