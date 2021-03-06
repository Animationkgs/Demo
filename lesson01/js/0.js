


var home= 'initfields'; 

var style= `

div { background-color: gainsboro; border: 2px solid silver;}

div div { 
background-color: pink;
border: 4px;
font-size: 20pt;
}

.wrapper {
display: flex;
flex-direction: column;
align-items: center;
}

.subtitle {
display: inline-block;
height:240px;
width: 440px;
overflow:auto;
background-color:pink;
color:black;
scrollbar-base-color:gold;
font-family:arial;
font-size: large;
padding:15px;
}


.meaning {
background-color:yellow;
color:black;
font-family:arial;
font-size: large;
}


hr { width: 900px; }

div div div { background-color: hotpink; border: 16px; }

img { width: 500px; height: auto; }

.concept { background-color: violet; font-size: 30pt; }

iframe {
width: 440px;
height: 248px;
frameborder: 0; 
allow: "accelerometer; encrypted-media; gyroscope; picture-in-picture";
}
`;

var pad= function (x)   { return x.toString().padStart(2, "0"); };
var parse= function (s)   { return s.split(/\s+/); }; 
var zipme= function (a,b) { return a.map( function(e, i) { return [e, b[i]]; } ); };


/**
 * range()
 *
 * Returns an array of numbers between a start number and an end number incremented
 * sequentially by a fixed number(step), beginning with either the start number or
 * the end number depending on which is greater.
 *
 * @param {number} start (Required: The start number.)
 * @param {number} end (Required: The end number. If end is less than start,
 *  then the range begins with end instead of start and decrements instead of increment.)
 * @param {number} step (Optional: The fixed increment or decrement step. Defaults to 1.)
 *
 * @return {array} (An array containing the range numbers.)
 *
 * @throws {TypeError} (If any of start, end and step is not a finite number.)
 * @throws {Error} (If step is not a positive number.)
 */

function range(start, end, step = 1) {

  // Test that the first 3 arguments are finite numbers.
  // Using Array.prototype.every() and Number.isFinite().
  const allNumbers = [start, end, step].every(Number.isFinite);

  // Throw an error if any of the first 3 arguments is not a finite number.
  if (!allNumbers) {
    throw new TypeError('range() expects only finite numbers as arguments.');
  }

  // Ensure the step is always a positive number.
  if (step <= 0) {
    throw new Error('step must be a number greater than 0.');
  }

  // When the start number is greater than the end number,
  // modify the step for decrementing instead of incrementing.
  if (start > end) { step = -step; }

  // Determine the length of the array to be returned.
  // The length is incremented by 1 after Math.floor().
  // This ensures that the end number is listed if it falls within the range.
  const length = Math.floor(Math.abs((end - start) / step)) + 1;

  // Fill up a new array with the range numbers
  // using Array.from() with a mapping function.
  // Finally, return the new array.
  return Array.from(Array(length), (x, index) => start + index * step);

}

function range0(end, step = 1) {
  const allNumbers = [end, step].every(Number.isFinite);
  if (!allNumbers) {
    throw new TypeError('only finite numbers as arguments.');
  }
  if (step <= 0) {
    throw new Error('step must be a number greater than 0.');
  }
  const length = Math.floor(Math.abs(end/step)) + 1;
  return Array.from(Array(length), (x,n) => n*step);
}


//alert('0.js');

