


var st095= {};

var lesson_name = function (m) {
	var ret= m.data.lesson.title;
	return ret;
};


var f= function (m) {
	var cx= [];
	var i= 0;
	var a= m.data.lesson.concepts;
	while ( i < a.length ) {
		var x= a[i], d= {};
		d.title= x.title;
		if ( x.hasOwnProperty('atoms') ) {
			if (x.atoms.length>1) alert ('>1');
			var atom= x.atoms[0];
			var n= atom.instructor_notes;
			if (n) d.instructor_notes= n;
			var st= atom.semantic_type;
			d.semantic_type= st;
			if (st=='VideoAtom') {
				var t= {};
				t.youtube_id= atom.video.youtube_id;
				t.iframe= iframe(t.youtube_id);
				d.video= t;
				//d.video= atom.video;
			}
			if (st=='QuizAtom') {
			   var t= {};
                           t.youtube_id= atom.instruction.video.youtube_id;
			   t.iframe= iframe(t.youtube_id);
			   d.instruction= t;
			   t= {};
			   t.alt_text= atom.question.alt_text;
			   t.semantic_type= atom.question.semantic_type;
			   t.image= img(atom.question.non_google_background_image);
			   d.question= t;
			   t= {};
                           t.youtube_id= atom.answer.video.youtube_id;
			   t.iframe= iframe(t.youtube_id);
			   d.answer= t;
			   d.userstate= atom.user_state.unstructured;
			}
		}
		cx.push(d);
		i++;
	}
	return { name : lesson_name(m), concepts: cx };
};

var mx= [m01,m02,m03,m04,m05,m06,m07,m08,m09,
	m10, m11,m12,m13,m14,m15,m16,m17,m18,m19,
	m20, m21,m22,m23,m24,m25,m26,m27,m28,m29,
	m30, m31,m32,m33,m34,m35,m36,m37,m38]

st095.mx= mx;

st095.lesson01= f(m01);
st095.lesson02= f(m02);
st095.lesson03= f(m03);
st095.lesson04= f(m04);
st095.lesson05= f(m05);
st095.lesson06= f(m06);
st095.lesson07= f(m07);
st095.lesson08= f(m08);
st095.lesson09= f(m09);

st095.lesson10= f(m10);
st095.lesson11= f(m11);
st095.lesson12= f(m12);
st095.lesson13= f(m13);
st095.lesson14= f(m14);
st095.lesson15= f(m15);
st095.lesson16= f(m16);
st095.lesson17= f(m17);
st095.lesson18= f(m18);
st095.lesson19= f(m19);

st095.lesson20= f(m20);
st095.lesson21= f(m21);
st095.lesson22= f(m22);
st095.lesson23= f(m23);
st095.lesson24= f(m24);
st095.lesson25= f(m25);
st095.lesson26= f(m26);
st095.lesson27= f(m27);
st095.lesson28= f(m28);
st095.lesson29= f(m29);

st095.lesson30= f(m30);
st095.lesson31= f(m31);
st095.lesson32= f(m32);
st095.lesson33= f(m33);
st095.lesson34= f(m34);
st095.lesson35= f(m35);
st095.lesson36= f(m36);
st095.lesson37= f(m37);
st095.lesson38= f(m38);


st095.lesson01.concepts[0].summary= pretty(srtm0101);
st095.lesson01.concepts[0].video.text= pretty(srt0101);

st095.lesson01.concepts[1].summary= pretty(srtm0102);
st095.lesson01.concepts[1].video.text= pretty(srt0102);

st095.lesson01.concepts[2].instructionsummary= pretty(srtm0103);
st095.lesson01.concepts[2].instruction.text= pretty(srt0103);
st095.lesson01.concepts[2].quizanswer= 'blue';
st095.lesson01.concepts[2].answersummary= pretty(srtm0104);
st095.lesson01.concepts[2].answer.text= pretty(srt0104);

