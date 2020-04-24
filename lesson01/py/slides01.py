

//alert('lesson01');

function shape(a){
	return view.map( function (x,n) { 
		return x.map( function (x2,n2) {
			return a[x2];
		} ); 
	} );
}


lesson01= {
   name: concept01[0],
   note: note01[0],
   quiz: quiz01[0],
   data: data01[0],
   plot: plot01[0],
   slides: slides01[0],
   subtitle: shape(srt01)[0],
   meaning: shape(srtm01)[0]
}; 


//alert('lesson01.js');




