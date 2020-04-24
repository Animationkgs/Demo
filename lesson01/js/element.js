


var _element= function () {
   var i;
   return (function () {
   i= {};
   i._e= null;
   i._create= function (eT) {i._e= document.createElement(eT); return i;};
   i._find= function (id) { i._e= document.getElementById(id); return i;};
   i._init= function (x) { i._e= x; return i; };
   i.setid= function (id) { i._e.id= id; return i; };
   i.appendTo= function (p) { p._e.appendChild(i._e); return i; };
   i.append= function (o,ks) { 
	   ks.split(' ').map( function (k,n) {
		 if (o[k]) o[k].appendTo(i);
	 } );
   };
   i.sethtml= function (x) { i._e.innerHTML= x; return i; };
   i.setonclick= function (f) { i._e.onclick= f; return i; };
   i.setsrc= function (x) { i._e.src= x; return i; };
   i.getsrc= function (x) { return i._e.src; };
   i.setcn= function (x) { i._e.className= x; return i; };
	   return i;
   }) ();
};


var dom;
(function () {
   var i;
   dom= function () {
      if (i) return i;
      i={};
      i.make= function (eT) { return _element()._create(eT); };

      i.find= function (id) { return _element()._find(id); };
      i.init= function (_e)  { return _element()._init(_e); };
      i.body= i.init( document.body );
      i.head= i.init( document.head );
      i.style= function (x) { return i.make('style').sethtml(x); };
      i.img= function (x) { return i.make('img').setsrc(x); };
      i.hr= function () {  return i.make('hr'); };
      i.div= function (x= null) {  
	      var d= i.make('div');
	      if (x) d= d.sethtml(x.toString());
	      return d;
      };

      i.pushTo= function (e) {
	      return {
		      setcn: function (x) {
			      return {
				      div: function (h) { return i.div(h).setcn(x).appendTo(e); }
			      };
		      },
		      div: function (h) { return i.div(h).appendTo(e); }
	      };
      };
      i.iframe= function () {  return i.make('iframe'); };
      i.button= function (x) { return i.make('button').sethtml(x); };
      i.title= function (x) { return i.make('title').sethtml(x); };
	   return i;
   }();
})();

