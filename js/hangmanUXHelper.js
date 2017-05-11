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
  Date:   May 9th, 2017.

  Purpose: Hang Man game's UX helper functions.
**/

function updateScoreBoardOnScreen(actualWord, myWord, success) {
  var scoreBoardTable  = document.getElementById("scoreBoard");

  /** Using -1 to add row at the end, use 0 if you want to add new row on top. **/
  var newRow = scoreBoardTable.insertRow(-1);

  /** adding 3 new columns . **/
  var myCol = newRow.insertCell(0);
  var coCol = newRow.insertCell(1);
  var dCol = newRow.insertCell(2);

  /** Adding text to newly added 3 row cells **/
  myCol.innerHTML = actualWord;
  coCol.innerHTML = myWord;
  dCol.innerHTML = success ? "Yes" : "No";
}

function isAlphabet(inputKeyCode) {
  return ((inputKeyCode >= 65 && inputKeyCode <= 90)
      || (inputKeyCode >= 97 && inputKeyCode <= 122));
}

function displayMyChoices(key) {
  var chkOld = document.getElementById(key);
  if (null!=chkOld) return false;
  var olList = document.getElementById('myChoices');
  var entry = document.createElement('li');
  entry.id = key;
  entry.appendChild(document.createTextNode(key));
  olList.appendChild(entry);
  return true;
}

function clearUserInputs() {
  var olList = document.getElementById('myChoices');
  olList.innerHTML = '';
}

function getProvidedSequence(wordLength) {
    var result = "";
    for(var i=0; i<wordLength; i++) {
      var txtElement = document.getElementById('letter'+i);
      result += (txtElement.value.length ==1) ? txtElement.value : "-";
    }
    return result;
}

function addCategories(item, index, arr) {
  var optionSelect = document.getElementById("wordsCategory");
  var option = document.createElement("option");
  option.text = item;
  optionSelect.add(option);
}

function displayOptions(hangManWordList, level) {
    var keys = Object.keys(hangManWordList);
    keys.forEach(addCategories);
    displayWord();
}

function displayWord() {
  gameOver = false;
  var optionSelect = document.getElementById("wordsCategory");
  var wordList = hangManWordList[optionSelect.options[optionSelect.selectedIndex].value];
  var  wordOption = wordList[getRandomInt(0, wordList.length-1)];
  word  = wordOption.word;
  displayWordToUser(document.getElementById('displayWordLetters'), wordOption.word);

  document.getElementById('messageToUser').innerHTML = 'Hint: Please type a ' + wordOption.word.length + ' letter word for category: ' + wordOption.hint;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reset() {
  if (!gameOver) {
    updateScoreBoardOnScreen(word, getProvidedSequence(word.length), false);
  }
  clearHelper();
  clearUserInputs();
  displayWord();
}

document.onkeypress = function(event) {
  if(gameOver) {
    if(event.which==13) reset();
    return;
  }
  if (!isAlphabet(event.which)) return;
  if (false==displayMyChoices(event.key)) return;
  playGame(event.key, null, word);
  if(currentCharCount==0) {
    gameOver = true;
    drawGameMessage("You Won!!!", true);
    updateScoreBoardOnScreen(word, getProvidedSequence(word.length), true);
    document.getElementById('messageToUser').innerHTML = 'Great Job: The ' + word.length + ' letter word is \'' + word + '\'';
  } else if (currentCtr==drawFunctions.length) {
    gameOver = true;
    drawGameMessage("You lose!!!", false);
    updateScoreBoardOnScreen(word, getProvidedSequence(word.length), false);
    document.getElementById('messageToUser').innerHTML = 'Better luck next time: The ' + word.length + ' letter word is \'' + word + '\'';
  }
}
