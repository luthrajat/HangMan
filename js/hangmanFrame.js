/**
Copyright (c) 2011-2017 GitHub Inc.

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THErUSE OR OTHER DEALINGS IN THE SOFTWARE.


This application bundles the following third-party packages in accordance
with the following licenses:

-------------------------------------------------------------------------

Package: *
License: BSD
License Source: LICENSE
Source Text:

Copyright (c) Rajat Luthra (rajatluthra@gmail.com)
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

THIS IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS,
EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

-------------------------------------------------------------------------
**/
/**
  Author: Rajat Luthra
  Date:   May 6th, 2017.

  Purpose: Hang Man game's canvas helper functions.
**/

/**
  Initilize the variables.
**/

/**
  Canvas Border
**/
var borderGutter = 2.5;
var borderWidth    = 5;

/**
  Hang Frame
**/
var frameGutter   = 0;
var frameWidth    = 0;

/**
  Draw border to the canvas
**/
function drawBorder() {
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(borderGutter,borderGutter);
  ctx.lineTo(c.width-borderGutter,borderGutter);
  ctx.lineTo(c.width-borderGutter,c.height-borderGutter);
  ctx.lineTo(borderGutter,c.height-borderGutter);
  ctx.lineTo(borderGutter,borderGutter);
  ctx.lineWidth = borderWidth;
  ctx.strokeStyle = "#00f";
  ctx.stroke();

  frameGutter = c.width*0.025;
  frameWidth = c.width*0.025;
}

/**
  Draw border to the canvas
**/
draw = function(fromX, fromY, toX, toY, lineWidth) {
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext('2d');
  ctx.strokeStyle = "#000";
  ctx.lineWidth = lineWidth;
  ctx.beginPath();
  ctx.moveTo(fromX, fromY);
  ctx.lineTo(toX, toY);
  ctx.stroke();
}

/**
  clear athe canvas to be used for replay.
**/
clearCanvas = function() {
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext('2d');
  ctx.clearRect(0, 0, c.width, c.height);
}

/**
  draw the base structure.
**/
drawStructure = function() {
  var c = document.getElementById("myCanvas");
  drawBase(c);
  mainBar(c);
  topBar(c);
  footRest(c);
}

function drawNext() {
    if(currentCtr<drawFunctions.length) {
      var currentFunction = drawFunctions[currentCtr++];
      currentFunction.call();
    }
}

function drawGameMessage(message, success) {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  ctx.font = "30px Arial";
  ctx.fillText(message,canvas.width/3,canvas.height/1.5);
}

function clearHelper() {
  clearCanvas();
  drawBorder();
  currentCtr = 0;
  document.getElementById('displayWordLetters').innerHTML = '';
  displayWord();
}

/**
  Helper method to draw the base line.
**/
drawBase = function(myCanvas) {
 draw (frameGutter, myCanvas.height-frameGutter, (frameGutter*9)*4, myCanvas.height-frameGutter, frameWidth);
}

/**
  Helper method to draw the main vertical bar line.
**/
mainBar = function(myCanvas) {
 draw (frameGutter*10, frameGutter, frameGutter*10, myCanvas.height-frameGutter, frameWidth);
};

/**
  Helper method to draw the top bar.
**/
topBar = function(myCanvas) {
 draw (frameGutter*10, frameGutter*1.5, (frameGutter*9)*2, frameGutter*1.5, frameWidth);
};

/**
  Helper method to draw the rest bar.
**/
footRest = function(myCanvas) {
  draw (frameGutter*10, myCanvas.height/2, (frameGutter*9)*3, myCanvas.height/2, frameWidth);
// draw (frameLeft, 200, (frameGutter*9)*3, 200, 10);
};

/**
  Helper method to draw the roap.
**/
roap = function() {
 draw ((frameGutter*9)*2, frameGutter, (frameGutter*9)*2, frameGutter*3, 2);
};

/**
  Helper method to draw the Hangman face.
**/
hangManFace = function() {
 c = document.getElementById("myCanvas");
 ctx = c.getContext('2d');
 ctx.beginPath();
 ctx.arc((frameGutter*9)*2, frameGutter*4, frameGutter, 0, Math.PI*2, true);
 ctx.stroke();
}

/**
  Helper method to draw the Hangman body.
**/
hangManBody = function() {
 draw ((frameGutter*9)*2, frameGutter*5, (frameGutter*9)*2, frameGutter*10, 2);
}

/**
  Helper method to draw the Hangman Left Hand.
**/
hangManLHand = function() {
 draw ((frameGutter*9)*2,frameGutter*6,((frameGutter*9)*2)-30,(frameGutter*3), 2);
}

/**
  Helper method to draw the Hangman Right Hand.
**/
hangManRHand = function() {
  draw ((frameGutter*9)*2,frameGutter*6,((frameGutter*9)*2)+30,(frameGutter*3), 2);
}

/**
  Helper method to draw the Hangman Left Foot.
**/
hangManLFoot = function() {
  draw ((frameGutter*9)*2,frameGutter*10,((frameGutter*9)*2)-30,(frameGutter*3)*5, 2);
}

/**
  Helper method to draw the Hangman Right Foot.
**/
hangManRFoot = function() {
  draw ((frameGutter*9)*2,frameGutter*10,((frameGutter*9)*2)+30,(frameGutter*3)*5, 2);
}
