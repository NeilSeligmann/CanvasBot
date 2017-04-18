var data = `DATA_HERE`; //JSON PIXELS DATA from image.txt
data = JSON.parse(data);

var initX = 0; //X Starting Pos, positive
var initY = 0; //Y Starting Pos, positive
var delay = 300; //250 mininmum recommended to prevent bans, positive


function nextPixel(){
	if(data.length > 0){
		setTimeout(function(){
			let pixel = data.pop();
			// console.log(pixel);
			window.App.switchColor(parseInt(pixel.color));
			window.App.doPlace(pixel.x + initX, pixel.y + initY);
			nextPixel();
		}, delay);
	}
}