




var vid0101= '3B3rZmCn9Zs';
var vid0102= '-NtkOK-I3qs';
var vid0103= 'HAwpEtWzRf4 -YjwCxF7hPI';
var vid0104= 'Rzrns1GnYgk 7Tb4WfcS8WY';
var vid0105= 'hwb833kdiYU';
var vid0106= '1xjty9Dbj6Q ZB_F8CEVknY';
var vid0107= 'im5vESbtJec HXrhsubYzEQ';
var vid0108= 'Yj2kcbckP8E';
var vid0109= 'DbTc5K8ZZcw UgCIUtT3yQU';
var vid0110= 'UVcR8gp8IDk 74PV4GzGGOU';
var vid0111= 'CvBBb_GFe5U';


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
