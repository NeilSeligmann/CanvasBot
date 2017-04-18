var getPixels = require("get-pixels");
const rgbHex = require('rgb-hex');
var fs = require('fs');

var image = process.argv[2]; //Path to image, can be JPG/PNG
console.log("SRC Image: " + image);

var ignore_white = true;

if(typeof(process.argv[3]) !== "undefined"){
	if (process.argv[3] == "full")
		ignore_white = false;
}

// console.log(ignore_white);

// return;

var colors = { //Replace this color palette with the palette of your target canvas
	0: '#ffffff',
	1: '#e4e4e4',
	2: '#888888',
	3: '#222222',
	4: '#ffa7d1',
	5: '#e50000',
	6: '#e59500',
	7: '#a06a42',
	8: '#e5d900',
	9: '#94e044',
	10: '#02be01',
	11: '#00d3dd',
	12: '#0083c7',
	13: '#0000ea',
	14: '#cf6ee4',
	15: '#820080',
	16: '#ffe9dc',
	17: '#e0a899',
	18: '#dfa290',
	19: '#c99789',
	20: '#636363',
	21: '#3c3c3c',
};


var nearestColor = require('nearest-color').from(colors);

getPixels(image, function(err, pixels) {
  if(err) {
    console.log("Bad image path")
    return
  }
  processImage(pixels);
});

let initx = 0;
let inity = 0;

let nice = [];

function processImage(img){
	let px = img.shape[0];
	let py = img.shape[1];

	console.log("Image is: " + x + "x" + y);

	for (var x = 0; x < px; x++) {
		for (var y = 0; y < py; y++) {

			let pixel = [];
			for (var k = 2; k >= 0; k--) {
				pixel[k] = img.get(x,y,k);
			}
			// console.log(pixel);

			let hex = rgbHex(pixel[0],pixel[1],pixel[2]);
			let pcolor = nearestColor('#'+hex);

			let fp = {
				color: pcolor.name,
				x: initx + x,
				y: inity + y
			};

			console.log(fp);

			if((pcolor.name !== "0" && ignore_white) || !ignore_white)
				nice.push(fp);
			// else
			// 	console.log("WHITE IGNORED");
		}
	}

	fs.writeFile("output.txt", JSON.stringify(nice), function(err) {
	    if(err) {
	        return console.log(err);
	    }

	    console.log("Finsihed.");
	}); 
}