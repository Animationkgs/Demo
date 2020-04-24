


var p0106= `<p>Unfortunately, the thread Katie is referring to has been taken down. You can still ask questions on the forums using the "Discussion Topics" link underneath "Get Help". The average degrees of separation between any two people is 4.74.</p>`;

var p0107= `<p><a href="https://accounts.google.com/SignUp" target="_blank">Create a Google account</a></p>
<p><a href="https://docs.google.com/spreadsheet/ccc?key=0Alo47BBiqLE0dGxCczVfM2NOOV9BVEs5SFJqZmhoMmc&amp;usp=sharing" target="_blank">Link to view the Google spreadsheet</a></p>`;

var p0108= `<p>Click <a href="https://drive.google.com/" target="_blank">this link</a> to go to your Google Drive. Then you can click the "Create" button to create a folder or a spreadsheet. Copy and paste data from our spreadsheets to yours using Control+C and Control+V (or Command+C and Command+V on a Mac).</p>`;

var p0109= `<p>Link to <a target="_blank" href="https://docs.google.com/a/knowlabs.com/spreadsheet/ccc?key=0Alo47BBiqLE0dHhEYUcteVc4RlJHR2IyUjliZmpZTlE#gid=0">Snowfall data</a></p>`;

var p0110= `<p>Link to <a target="_blank" href="https://docs.google.com/a/knowlabs.com/spreadsheet/ccc?key=0Alo47BBiqLE0dHhEYUcteVc4RlJHR2IyUjliZmpZTlE#gid=0">Snowfall data</a></p>
<p>Copy and paste the data into your own spreadsheet to perform the calculations. From <a href="https://drive.google.com/" target="_blank">Google Drive</a> (at the top of the page once you're signed in to your Google account), click the button on the left that says "CREATE" and click "Spreadsheet."</p>`;

var p0111= `<p>You can get to the course wiki by clicking "Materials" or following <a href="https://www.udacity.com/wiki/st095" target="_blank">this link</a>.</p>`;

var p01= [null,null,null,null,null,p0106,p0107,p0108,p0109,p0110,p0111];
p01[0]= 'No Instructor notes';
p01[1]= 'No Instructor notes';
p01[2]= 'No Instructor notes';
p01[3]= 'No Instructor notes';
p01[4]= 'No Instructor notes';

p01= p01.map( function (x,n) {
	return dom.div(x).cn('Instructor_Note');
});
