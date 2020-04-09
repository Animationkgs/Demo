



var html= {
   pretty: function (x) { return x.split( '\n' ).join( '<br>' ); },
   img :  function (src) { return ` <img src='${src}'> `; }, 
   richdiv :  function (id,s) { return ` <div id="${id}"> ${s} </div> `; }, 
   anonymousdiv : function (x) { return ` <div> ${x} </div> `; }, 
   iframe : function (vid) {
	return ` <iframe width="440" height="248" src="https://www.youtube.com/embed/${vid}?rel=0&amp;mute=1&cc_load_policy=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> `;
   },
   richbutton : function (id, code, s) {
	return ` <button id= ${id} onclick= "(${code})()"> ${s} </button> `;
   },
   table : {
     td : function (x) { return ` <td> ${x} </td> `; }, 
     tr : function (x) {
        var cells= x.split(',').map( this.td ).join( '' );
        return ` <tr> ${cells} </tr> `;
     },
     get : function (x) {
        var rows= x.split('\n').map( this.tr ).join( '' );
        return ` <table valign="top"> ${rows} </table> `;
     }
   }
};


