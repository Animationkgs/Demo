

//alert('lesson01');

var lesson01= {}; 


lesson01.name= 'Lesson 1: Orientation!';


lesson01.concept= `<a title="1. Welcome" href="https://classroom.udacity.com/courses/st095/lessons/212304785/concepts/2125646280923">1. Welcome</a>
<a title="2. Intro" href="https://classroom.udacity.com/courses/st095/lessons/212304785/concepts/2126145320923">2. Intro</a>
<a title="3. Quiz: MnMs" href="https://classroom.udacity.com/courses/st095/lessons/212304785/concepts/2126145330923">3. Quiz: MnMs</a>
<a title="4. Quiz: Definitely blue" href="https://classroom.udacity.com/courses/st095/lessons/212304785/concepts/2126145370923">4. Quiz: Definitely blue</a>
<a title="5. Problem Sets" href="https://classroom.udacity.com/courses/st095/lessons/212304785/concepts/2126145410923">5. Problem Sets</a>
<a title="6. Quiz: Forums" href="https://classroom.udacity.com/courses/st095/lessons/212304785/concepts/2126145420923">6. Quiz: Forums</a>
<a title="7. Quiz: Instructor Notes" href="https://classroom.udacity.com/courses/st095/lessons/212304785/concepts/2126145460923">7. Quiz: Instructor Notes</a>
<a title="8. My Drive" href="https://classroom.udacity.com/courses/st095/lessons/212304785/concepts/2126145500923">8. My Drive</a>
<a title="9. Quiz: Practice with Spreadsheets" href="https://classroom.udacity.com/courses/st095/lessons/212304785/concepts/2126145510923">9. Quiz: Practice with Spreadsheets</a>
<a title="10. Quiz: Calculate sums" href="https://classroom.udacity.com/courses/st095/lessons/212304785/concepts/2126145550923">10. Quiz: Calculate sums</a>
<a title="11. Course Wiki" href="https://classroom.udacity.com/courses/st095/lessons/212304785/concepts/2126145590923">11. Course Wiki</a>`.split('\n');


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

var leaps= [1,1,2,2,1,2,2,1,2,2,1];
function leapme (xs,j) {
	var s= 0;
	j= j.map( function (x,n) { s= s+x; return s; } );
	var i0=0;
	var ret= j.map( function (x,n) { var ret= xs.slice(i0,x); i0=x; return ret; } );
	return ret;
}

lesson01.vid= [vid0101,vid0102,vid0103,vid0104,vid0105,vid0106,vid0107,vid0108,vid0109,vid0110,vid0111].map( function (x,n) {
   return x.split(' ').map( function (x2,n2) {
	   return dom.iframe().setsrc(html.embed(x2));
   }
   );
}
);

var form0103= `<form><div class="image-form-question--image-container--3HTvR" style="position: relative;"><img src="https://lh6.ggpht.com/4F9okwFNAQRqIg37kC6dunDssPf4HrK1wwGhse4Il4yIWuaq1Ahbo1uoZS5Q49G0gE5Me3WvzPplmzkX_QU=s0#w=1920&amp;h=1080" style="width: 100%; max-height: 100%;"><div style="top: 68.6856%; left: 8.72872%; position: absolute; width: 0%; height: 0%; max-width: 15px; max-height: 15px;"><span><label for="radio-0" class="radio-button-widget--label--vDh18">Empty</label><input type="radio" name="group0" id="radio-0" class="radio-button-widget--radio--ws3E_" value="0"></span></div><div style="top: 60.3737%; left: 8.29409%; position: absolute; width: 0%; height: 0%; max-width: 15px; max-height: 15px;"><span><label for="radio-1" class="radio-button-widget--label--vDh18">Empty</label><input type="radio" name="group0" id="radio-1" class="radio-button-widget--radio--ws3E_" value="1"></span></div><div style="top: 52.2552%; left: 8.40275%; position: absolute; width: 0%; height: 0%; max-width: 15px; max-height: 15px;"><span><label for="radio-2" class="radio-button-widget--label--vDh18">Empty</label><input type="radio" name="group0" id="radio-2" class="radio-button-widget--radio--ws3E_" value="2"></span></div><div style="top: 44.7165%; left: 8.29409%; position: absolute; width: 0%; height: 0%; max-width: 15px; max-height: 15px;"><span><label for="radio-3" class="radio-button-widget--label--vDh18">Empty</label><input type="radio" name="group0" id="radio-3" class="radio-button-widget--radio--ws3E_" value="3"></span></div><div style="top: 37.1778%; left: 8.18544%; position: absolute; width: 0%; height: 0%; max-width: 15px; max-height: 15px;"><span><label for="radio-4" class="radio-button-widget--label--vDh18">Empty</label><input type="radio" name="group0" id="radio-4" class="radio-button-widget--radio--ws3E_" value="4"></span></div></div></form>`;
form0103= ` <form>
   <div style="position: relative;">
   <img src="js/quiz01/0103.jpg#w=1920&amp;h=1080" style="width: 100%; max-height: 100%;">
   <div style="top: 64.6856%; left: 1.72872%; position: absolute; width: 0%; height: 0%; max-width: 15px; max-height: 15px;">
   <span>
   <label for="radio-0">yellow</label>
   <input type="radio" id="radio-0" value="0">
   </span>
   </div>
   <div style="top: 56.3737%; left: 1.29409%; position: absolute; width: 0%; height: 0%; max-width: 15px; max-height: 15px;">
   <span>
   <label for="radio-1">orange</label>
   <input type="radio" id="radio-1" value="1">
   </span>
   </div>
   <div style="top: 48.2552%; left: 1.40275%; position: absolute; width: 0%; height: 0%; max-width: 15px; max-height: 15px;">
   <span>
   <label for="radio-2">green</label>
   <input type="radio" id="radio-2" value="2">
   </span>
   </div>
   <div style="top: 40.7165%; left: 1.29409%; position: absolute; width: 0%; height: 0%; max-width: 15px; max-height: 15px;">
   <span>
   <label for="radio-3">blue</label>
   <input type="radio" id="radio-3" value="3" checked>
   </span>
   </div>
   <div style="top: 33.1778%; left: 1.18544%; position: absolute; width: 0%; height: 0%; max-width: 15px; max-height: 15px;">
   <span>
   <label for="radio-4">red</label>
   <input type="radio" id="radio-4" value="4">
   </span>
   </div>
   </div>
</form>`;
var form0104= `<form><div class="image-form-question--image-container--3HTvR" style="position: relative;"><img src="https://lh5.ggpht.com/Z2fbxIdswomz1BLwFhblxPwFpfDkrHs-2Q8HoR8549CM-vLMeCPVZiT04YSBmQKJH9GV4EdLYSr0eNqCPMU=s0#w=1920&amp;h=1080" style="width: 100%; max-height: 100%;"><div style="top: 33.8918%; left: 9.59797%; position: absolute; width: 14.7132%; height: 6.65188%;"><span class="text-input-widget--container--2JE4b"><label for="text-0" class="text-input-widget--label--D9NOV">Empty</label><input name="0" type="text" id="text-0" class="text-input-widget--text-input--4-Mx-" value="no" style="width: 100%; height: 100%;"></span></div></div></form>`;
var form0106= `<form><div class="image-form-question--image-container--3HTvR" style="position: relative;"><img src="https://lh3.ggpht.com/ManDj2bNHJTy7OUyoUb90yYQwEz3IkFK5vcTPY_mHcXQ3T7VEXiX68tP7FMl7QHR1RZbE20F74PHKjAcVfU=s0#w=1920&amp;h=1080" style="width: 100%; max-height: 100%;"><div style="top: 27.3196%; left: 40.239%; position: absolute; width: 15%; height: 6%;"><span class="text-input-widget--container--2JE4b"><label for="text-0" class="text-input-widget--label--D9NOV">Empty</label><input name="0" type="text" id="text-0" class="text-input-widget--text-input--4-Mx-" value="4.74" style="width: 100%; height: 100%;"></span></div></div></form>`;
var form0107= `<form><div class="image-form-question--image-container--3HTvR" style="position: relative;"><img src="https://lh4.ggpht.com/fdrgzPLLHohvtM_oKTV84iRU1q9VlGRUzuYO0lkkDei6X5urafHSmTs5YDrswDKwkBvnilRcMzP1pzweeKI3=s0#w=1920&amp;h=1080" style="width: 100%; max-height: 100%;"><div style="top: 41.2371%; left: 9.81528%; position: absolute; width: 21.8399%; height: 6.37887%;"><span class="text-input-widget--container--2JE4b"><label for="text-0" class="text-input-widget--label--D9NOV">Empty</label><input name="0" type="text" id="text-0" class="text-input-widget--text-input--4-Mx-" value="statistics" style="width: 100%; height: 100%;"></span></div><div style="top: 41.4304%; left: 39.8044%; position: absolute; width: 19.5581%; height: 6.18557%;"><span class="text-input-widget--container--2JE4b"><label for="text-1" class="text-input-widget--label--D9NOV">Empty</label><input name="1" type="text" id="text-1" class="text-input-widget--text-input--4-Mx-" value="is" style="width: 100%; height: 100%;"></span></div><div style="top: 41.817%; left: 70.7715%; position: absolute; width: 19.2322%; height: 5.99227%;"><span class="text-input-widget--container--2JE4b"><label for="text-2" class="text-input-widget--label--D9NOV">Empty</label><input name="2" type="text" id="text-2" class="text-input-widget--text-input--4-Mx-" value="awesome" style="width: 100%; height: 100%;"></span></div></div></form>`;
var form0109= `<form><div class="image-form-question--image-container--3HTvR" style="position: relative;"><img src="https://lh5.ggpht.com/rmxx5urNWtqdaQdwhXN-U6_atEUltlc8EGY7zx1FUrjJWwa9OuJ7UBQ111BSq4AaWfxWecydlZAOwUSl1Bw=s0#w=1920&amp;h=1080" style="width: 100%; max-height: 100%;"><div style="top: 14.7552%; left: 29.1561%; position: absolute; width: 9.97506%; height: 5.54324%;"><span class="text-input-widget--container--2JE4b"><label for="text-0" class="text-input-widget--label--D9NOV">Empty</label><input name="0" type="text" id="text-0" class="text-input-widget--text-input--4-Mx-" value="" style="width: 100%; height: 100%;"></span></div><div style="top: 15.1671%; left: 43.4153%; position: absolute; width: 8.97756%; height: 5.54324%;"><span class="text-input-widget--container--2JE4b"><label for="text-1" class="text-input-widget--label--D9NOV">Empty</label><input name="1" type="text" id="text-1" class="text-input-widget--text-input--4-Mx-" value="" style="width: 100%; height: 100%;"></span></div></div></form>`;
var form0110= `<form><div class="image-form-question--image-container--3HTvR" style="position: relative;"><img src="https://lh6.ggpht.com/TQoQ1vdBkJ7t1tE48PBRYqJqadVKWG8s2oSIUSt5_N4dFAU7FI87ebdgxA8d7oj5iR0blcC2uRTDOLv9Ww=s0#w=1920&amp;h=1080" style="width: 100%; max-height: 100%;"><div style="top: 64.6263%; left: 22.4194%; position: absolute; width: 16.4589%; height: 7.31707%;"><span class="text-input-widget--container--2JE4b"><label for="text-0" class="text-input-widget--label--D9NOV">Empty</label><input name="0" type="text" id="text-0" class="text-input-widget--text-input--4-Mx-" value="" style="width: 100%; height: 100%;"></span></div><div style="top: 73.3247%; left: 22.6367%; position: absolute; width: 16.3342%; height: 6.43016%;"><span class="text-input-widget--container--2JE4b"><label for="text-1" class="text-input-widget--label--D9NOV">Empty</label><input name="1" type="text" id="text-1" class="text-input-widget--text-input--4-Mx-" value="" style="width: 100%; height: 100%;"></span></div><div style="top: 82.0232%; left: 22.4194%; position: absolute; width: 16.3342%; height: 5.9867%;"><span class="text-input-widget--container--2JE4b"><label for="text-2" class="text-input-widget--label--D9NOV">Empty</label><input name="2" type="text" id="text-2" class="text-input-widget--text-input--4-Mx-" value="" style="width: 100%; height: 100%;"></span></div></div></form>`;
lesson01.form= [null,null,form0103,form0104,null,form0106,form0107,null,form0109,form0110,null];


var p0106= `<p>Unfortunately, the thread Katie is referring to has been taken down. You can still ask questions on the forums using the "Discussion Topics" link underneath "Get Help". The average degrees of separation between any two people is 4.74.</p>`;

var p0107= `<p><a href="https://accounts.google.com/SignUp" target="_blank">Create a Google account</a></p>
<p><a href="https://docs.google.com/spreadsheet/ccc?key=0Alo47BBiqLE0dGxCczVfM2NOOV9BVEs5SFJqZmhoMmc&amp;usp=sharing" target="_blank">Link to view the Google spreadsheet</a></p>`;

var p0108= `<p>Click <a href="https://drive.google.com/" target="_blank">this link</a> to go to your Google Drive. Then you can click the "Create" button to create a folder or a spreadsheet. Copy and paste data from our spreadsheets to yours using Control+C and Control+V (or Command+C and Command+V on a Mac).</p>`;

var p0109= `<p>Link to <a target="_blank" href="https://docs.google.com/a/knowlabs.com/spreadsheet/ccc?key=0Alo47BBiqLE0dHhEYUcteVc4RlJHR2IyUjliZmpZTlE#gid=0">Snowfall data</a></p>`;

var p0110= `<p>Link to <a target="_blank" href="https://docs.google.com/a/knowlabs.com/spreadsheet/ccc?key=0Alo47BBiqLE0dHhEYUcteVc4RlJHR2IyUjliZmpZTlE#gid=0">Snowfall data</a></p>
<p>Copy and paste the data into your own spreadsheet to perform the calculations. From <a href="https://drive.google.com/" target="_blank">Google Drive</a> (at the top of the page once you're signed in to your Google account), click the button on the left that says "CREATE" and click "Spreadsheet."</p>`;

var p0111= `<p>You can get to the course wiki by clicking "Materials" or following <a href="https://www.udacity.com/wiki/st095" target="_blank">this link</a>.</p>`;

lesson01.p= [null,null,null,null,null,p0106,p0107,p0108,p0109,p0110,p0111];

var view= leapme([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],leaps);

srt01= srt01.map( function (x,n) {
	var ret= html.pretty(x);
	return dom.div(ret).setclassName('passage');
});
lesson01.subtitle= view.map( function (x,n) { return x.map( function (x2,n2) {return srt01[x2];} ); } );

lesson01.meaning= view.map( function (x,n) { return x.map( function (x2,n2) {return srtm01[x2];} ); } );
lesson01.table= [1,2,3,4,5,6,7,8,9,10,11];
lesson01.graph= range(1,12);

alert('lesson01');
