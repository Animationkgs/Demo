



var page;
(function () {
   var i;
   page= function () {
	   if (i) return i;
	   i= {};
      i.xs= [];
      i.e= null;
      i.p= dom.find(home);
      i.div= function (x) {  i.e= dom.div(x); return i; };
      i.hr= function () {  i.e= dom.hr(); return i; };
      i.button= function (x) { i.e= dom.button(x); return i; };
      i.id= function (x) { i.e= i.e.setid(x); return i; };
      i.onclick= function (x) { i.e= i.e.setonclick(x); return i; };
      i.push= function () { i.xs.push (i.e); return i.e; };
      i.append= function () { i.xs.map( function(x,n) {i.p.append(x);} ); };
	   return i;
   }();
})();


//page.div('hi').id('d1').push();
var field= function (x) {
   var i;
   return function (id) {
      i= {};
      i.ispretty= false;
      i.pretty= function () { i.ispretty= true; return i; };
      i.inner= function () {
		var t= x.toString();
	      	if (i.ispretty) { t= html.pretty(t); }
	      return id + "= " + t; 
      };
      i.div= function () { return page.div(i.inner()).id(id).push(); };
      i.hr= function () { return page.hr().push(); };
      i.button= function (f) { return page.button(x).id(id).onclick(f).push(); };
      return i;
	};
}

