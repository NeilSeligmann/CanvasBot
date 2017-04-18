# CanvasBot
A Canvas Bot originally made for https://canvas.listen.moe/

This bot will automatically print an image of your choosing in the canvas with a certain delay per pixel drawn.

# Requirements
- Node.js
- A Web Browser with a Developer Console that supports interacting with the page's javascript.
__(Chrome, Firefox and most standard web browsers will do)__

# Instructions
## Install
- Go to the root of the project.
- Execute from the command line:
```
npm install
```
This will install al the necessary modules.

## Step 1
- Get an image of your choosing and process it using:
```
node index.js path_to_your_file
```
This will output a JSON string with the image's pixels information to __output.txt__.
By default the script will ignore whites, because the background is usually white, __if you wish to also print the whites add "*full*" to the arguments__.
```
node index.js path_to_your_file full
```

## Step 2
- Open the file __js.js__, this file contains the javascript that you will have to use in the browser.
- Replace the __data__ varaible with the JSON string from __output.txt__.
- Copy the whole script.

## Step 3
Finally, you will execute the script in the browser. You can do this by *__pasting the script in the console__ or using something like __TamperMonkey__*.
- Open the __Developer Console__
- Paste the script from __js.js__
- Execute the script by entering in the console
```
nextPixel();
```

### Done! You should now see the color changing and the pixels appearing in the canvas.
