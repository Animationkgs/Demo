





var vids01= [vid0101,vid0102,vid0103,vid0104,vid0105,vid0106,vid0107,vid0108,vid0109,vid0110,vid0111];

var vid01= vids01.map( function (x,n) {
   return x.split(' ').map( function (x2,n2) {
	   return dom.iframe().setsrc(html.embed(x2)).cn('embed');
   }
   );
}
);

function clumpme (xs,j) {
	var s= 0;
	j= j.map( function (x,n) { s= s+x; return s; } );
	var i0=0;
	return j.map( function (x,n) { 
		var ret= xs.slice(i0,x); i0=x; return ret; 
	} );
}

var clumps= [1,1,2,2,1,2,2,1,2,2,1];
var view= clumpme(range(0,18),clumps);
