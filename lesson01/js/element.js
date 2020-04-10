




var _element= function () {
	return {
   _e : null, 
   _create : function (eT) { this._e= document.createElement(eT); return this; },
   _find : function (id) { this._e= document.getElementById(id); return this; },
   _init: function (x) { this._e= x; return this; },
   setid : function (id) { this._e.id= id; return this; },
   appendTo: function (p) { p._e.appendChild(this._e); return this; },
   append: function (e) { this._e.appendChild(e._e); return this; },
   setme: function (x) { this._e.innerHTML= x; return this; }, 
   setonclick: function (f) { this._e.onclick= f; return this; },
   setsrc: function (x) { this._e.src= x; return this; },
   setclassName: function (x) { this._e.className= x; return this; }
	};
};


var dom;
(function () {
   var i;
   dom= function () {
      if (i) return i;
      i={};
      i.make= function (eT) {
	      //alert("make= "+eT);
	      return _element()._create(eT); };
      i.find= function (id) { return _element()._find(id); };
      i.init= function (_e)  { return _element()._init(_e); };
      i.body= i.init( document.body );
      i.head= i.init( document.head );
      i.style= function (x) {
	      //alert("style= "+x);
	      return i.make('style').setme(x); };
      i.img= function (x) { return i.make('img').setsrc(x); };
      i.hr= function () {  return i.make('hr'); };
      i.div= function (x= null) {  
	      var d= i.make('div');
	      if (x) d= d.setme(x.toString());
	      return d;
      };
      i.iframe= function () {  return i.make('iframe'); };
      i.button= function (x) { return i.make('button').setme(x); };
      i.title= function (x) { return i.make('title').setme(x); };
	   return i;
   }();
})();


