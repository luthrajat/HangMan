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
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


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
function drawFrame () {
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.moveTo(2,2);
  ctx.lineTo(398,0);
  ctx.lineTo(398,598);
  ctx.lineTo(2,598);
  ctx.lineTo(2,0);

  ctx.strokeStyle = "#00f";
  ctx.lineWidth = 4;
  ctx.stroke();
}

var frameLeft = 100;
var toBarWidth = 95;
var limbHeight = 30;

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

drawBase = function() {
 draw (10, 590, toBarWidth*4, 590, 10);
}

mainBar = function() {
 draw (frameLeft, 10, frameLeft, 590, 10);
};

topBar = function() {
 draw (frameLeft, 15, toBarWidth*2, 15, 10);
};

footRest = function() {
 draw (frameLeft, 200, toBarWidth*3, 200, 10);
};

roap = function() {
 draw (toBarWidth*2, 10, toBarWidth*2, 25, 1);
};

hangManFace = function() {
 c = document.getElementById("myCanvas");
 ctx = c.getContext('2d');
 ctx.beginPath();
 ctx.arc(toBarWidth*2, 35, 10, 0, Math.PI*2, true);
 ctx.stroke();
}

hangManBody = function() {
 draw (toBarWidth*2, 45, toBarWidth*2, 100, 2);
}

hangManLHand = function() {
 draw (toBarWidth*2,55,(toBarWidth*2)-30,limbHeight, 2);
}

hangManRHand = function() {
  draw (toBarWidth*2,55,(toBarWidth*2)+30,limbHeight, 2);
}

hangManLFoot = function() {
  draw (toBarWidth*2,100,(toBarWidth*2)-30,limbHeight*5, 2);
}

hangManRFoot = function() {
  draw (toBarWidth*2,100,(toBarWidth*2)+30,limbHeight*5, 2);
}