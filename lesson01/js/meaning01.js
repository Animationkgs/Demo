



//alert('meaning01');

var srtm0101= `
1 - Welcome - lang_en_vs1.srt
statistics= the science of decisions.
teachers= Sean, Katie, and I.
expectation= 
self-paced
distribute your learning over time.
form your own ideas about a concept before learning the formal statistical idea.
`;

var srtm0102= `
2 - Intro --write-auto-sub
Teacher Katie
16 lessons
think from your own unique perspective
`;


var srtm0103= `
3 - MnMs - lang_en_vs2.srt
you reached in and randomly grabbed one, what color?
Red, blue, green, orange, or yellow?
`;

var srt0104= `
4 - MnMs Solution - lang_en_vs4.srt
our best guess would be blue
`;


var srtm0105= `meaning`;
var srtm0106= `06`;
var srtm0107= `07`;

var srtm0108= `08`;
var srtm0109= `09`;
var srtm0110= `10`;
var srtm0111= `11`;
var srtm0112= `12`;
var srtm0113= `13`;
var srtm0114= `14`;
var srtm0115= `15`;
var srtm0116= `16`;
var srtm0117= `17`;

var srtm01= [srtm0101, srtm0102, srtm0103, srtm0104, srtm0105,
srtm0106, srtm0107, srtm0108, srtm0109, srtm0110,
srtm0111, srtm0112, srtm0113, srtm0114, srtm0115,
srtm0116, srtm0117];


srtm01= srtm01.map( function (x,n) {
	var ret= html.pretty(x);
	return dom.div(ret).cn('meaning');
});
//alert('meaning01');
