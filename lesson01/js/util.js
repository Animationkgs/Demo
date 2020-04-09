

/*
var lesson;

(function() {
   var i;
   lesson = function () {
      if (i) return i;
      i = this;
      i.setme= function (x,n) { x.lesson= 3; x.number= n; };
      return i;
   }();
}());
*/

var lesson03= function (x,n) { x.lesson= 3; x.number= n; };



var ediv= function (x,id) { 
   var s= field(x)(id).div().innerHTML;
   var onclick1= function () { dom.find(id).setme(id); };
   field('clear me')(id+'clearmebutton').button(onclick1);
   var onclick2= function () { dom.find(id).setme(s); };
   field('fill me')(id+'fillmebutton').button(onclick2);
      };


//dom.style(style).appendTo(dom.head);


//field('hi')('d1').div();
//field('1')('test').div();
//field('2')( "navigate").div();

var setup= new Object();
setup.fields= function (x) {
   field([x.prev, x.next])( "navigate").div();
   field(x.title)("CourseTitle").div();
   field(x.wiki)("Wiki").div();
   field(x.url)('URL').div();
   field(x.concept)('Concept').div();
   field(x.vids)('VideoID').div();
   var makeID= function (id) { return function (n) { return id+pad(n); }; };
   var g= function (id) { return function (x,n) { ediv(x,makeID(id)(n)); }; };
   parse(x.vids).map(html.iframe).map(g('embed'));
   x.subs.map(html.pretty).map(g('subs'));
   x.subsmeaning.map(html.pretty).map(g('subsmeaning'));
   if ( 'quiz' in x && x.quiz!=null ) {
     var q= x.quiz;
     ediv(html.img(q.image), "QuizImage");
     field(q.ocr)("QuizOCR").pretty().div();
     field(q.solution)("quizSolution").pretty().div();
     field(q.solutionfeedback)("quizSolutionFeedback").pretty().div();
   }
   page.append();
};


setup.page= function (x) {
   var p= dom.head;
   p.append(dom.style(style));
   var t= pad(x.lesson);
   x.name= `${t}${pad(x.number)}`;
   p.append(dom.title(x.name));
  var prev= t+ pad(x.number-1), next= t+ pad(x.number+1);
  x.prev= `<a href= "${prev}.html"> prev </a>`;
  x.next= `<a href= "${next}.html"> next </a>`;
  //x.subs= zipme( x.subs, x.subsmeaning ).map(objectSubtitle);
  setup.fields(x);
};



