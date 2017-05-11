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
  Date:   May 8th, 2017.
  Purpose: Hang Man game's word generator helper functions (local).
**/

var jsKeywords = [];
var jsDataTypes = [];
//var duplicateLettersTest = [];
var javaScriptList = [];

var hangManWordList = {
  //duplicateLetters: dups,
  jsKeywords: jsKeywords,
  jsDataTypes: jsDataTypes
};


function getLocalWordList() {
  initLocalList();
  return hangManWordList;
}

function initLocalList() {
  //duplicateLettersTest.push({level:1,word:'Boolean', hint:'2 o'});
  //duplicateLettersTest.push({level:1,word:'Between', hint:'3 e'});

  jsDataTypes.push({level:1,word:'Boolean', hint:'Javascript Datatype - primitives:'});
  jsDataTypes.push({level:1,word:'Null', hint:'Javascript Datatype - primitives:'});
  jsDataTypes.push({level:1,word:'Undefined', hint:'Javascript Datatype - primitives:'});
  jsDataTypes.push({level:1,word:'Number', hint:'Javascript Datatype - primitives:'});
  jsDataTypes.push({level:1,word:'String', hint:'Javascript Datatype - primitives:'});
  jsDataTypes.push({level:1,word:'Symbol', hint:'Javascript Datatype - primitives: New in ECMAScript 6'});
  jsDataTypes.push({level:1,word:'Object', hint:'Javascript Datatype'});

  jsKeywords.push({level:1,word:'abstract', hint:'Javascript Keywords'});
  jsKeywords.push({level:1,word:'arguments', hint:'Javascript Keywords'});
  jsKeywords.push({level:1,word:'await', hint:'Javascript Keywords'});
  jsKeywords.push({level:1,word:'boolean', hint:'Javascript Keywords'});
  jsKeywords.push({level:1,word:'break', hint:'Javascript Keywords'});
  jsKeywords.push({level:1,word:'byte', hint:'Javascript Keywords'});
  jsKeywords.push({level:1,word:'case', hint:'Javascript Keywords'});
  jsKeywords.push({level:1,word:'catch', hint:'Javascript Keywords'});
  jsKeywords.push({level:1,word:'char', hint:'Javascript Keywords'});
  jsKeywords.push({level:1,word:'class', hint:'Javascript Keywords'});
  jsKeywords.push({level:1,word:'const', hint:'Javascript Keywords'});
  jsKeywords.push({level:1,word:'continue', hint:'Javascript Keywords'});
  jsKeywords.push({level:1,word:'debugger', hint:'Javascript Keywords'});
  jsKeywords.push({level:1,word:'default', hint:'Javascript Keywords'});
  jsKeywords.push({level:1,word:'delete', hint:'Javascript Keywords'});
  jsKeywords.push({level:1,word:'do', hint:'Javascript Keywords'});
  jsKeywords.push({level:1,word:'double', hint:'Javascript Keywords'});
  jsKeywords.push({level:1,word:'else', hint:'Javascript Keywords'});
  jsKeywords.push({level:1,word:'enum', hint:'Javascript Keywords'});
  jsKeywords.push({level:1,word:'eval', hint:'Javascript Keywords'});
  jsKeywords.push({level:1,word:'export', hint:'Javascript Keywords'});
  jsKeywords.push({level:1,word:'extends', hint:'Javascript Keywords'});
  jsKeywords.push({level:1,word:'false', hint:'Javascript Keywords'});
  jsKeywords.push({level:1,word:'final', hint:'Javascript Keywords'});
  jsKeywords.push({level:1,word:'finally', hint:'Javascript Keywords'});
  jsKeywords.push({level:1,word:'float', hint:'Javascript Keywords'});
  jsKeywords.push({level:1,word:'for', hint:'Javascript Keywords'});
  jsKeywords.push({level:1,word:'function', hint:'Javascript Keywords'});
  jsKeywords.push({level:1,word:'goto', hint:'Javascript Keywords'});
  jsKeywords.push({level:1,word:'if', hint:'Javascript Keywords'});
  jsKeywords.push({level:1,word:'implements', hint:'Javascript Keywords'});
  jsKeywords.push({level:1,word:'import', hint:'Javascript Keywords'});
  jsKeywords.push({level:1,word:'in', hint:'Javascript Keywords'});
  jsKeywords.push({level:1,word:'instanceof', hint:'Javascript Keywords'});
  jsKeywords.push({level:1,word:'int', hint:'Javascript Keywords'});
  jsKeywords.push({level:1,word:'interface', hint:'Javascript Keywords'});
  jsKeywords.push({level:1,word:'let', hint:'Javascript Keywords'});
  jsKeywords.push({level:1,word:'long', hint:'Javascript Keywords'});
  jsKeywords.push({level:1,word:'native', hint:'Javascript Keywords'});
  jsKeywords.push({level:1,word:'new', hint:'Javascript Keywords'});
  jsKeywords.push({level:1,word:'null', hint:'Javascript Keywords'});
  jsKeywords.push({level:1,word:'package', hint:'Javascript Keywords'});
  jsKeywords.push({level:1,word:'private', hint:'Javascript Keywords'});
  jsKeywords.push({level:1,word:'protected', hint:'Javascript Keywords'});
  jsKeywords.push({level:1,word:'public', hint:'Javascript Keywords'});
  jsKeywords.push({level:1,word:'return', hint:'Javascript Keywords'});
  jsKeywords.push({level:1,word:'short', hint:'Javascript Keywords'});
  jsKeywords.push({level:1,word:'static', hint:'Javascript Keywords'});
  jsKeywords.push({level:1,word:'super', hint:'Javascript Keywords'});
  jsKeywords.push({level:1,word:'switch', hint:'Javascript Keywords'});
  jsKeywords.push({level:1,word:'synchronized', hint:'Javascript Keywords'});
  jsKeywords.push({level:1,word:'this', hint:'Javascript Keywords'});
  jsKeywords.push({level:1,word:'throw', hint:'Javascript Keywords'});
  jsKeywords.push({level:1,word:'throws', hint:'Javascript Keywords'});
  jsKeywords.push({level:1,word:'transient', hint:'Javascript Keywords'});
  jsKeywords.push({level:1,word:'true', hint:'Javascript Keywords'});
  jsKeywords.push({level:1,word:'try', hint:'Javascript Keywords'});
  jsKeywords.push({level:1,word:'typeof', hint:'Javascript Keywords'});
  jsKeywords.push({level:1,word:'var', hint:'Javascript Keywords'});
  jsKeywords.push({level:1,word:'void', hint:'Javascript Keywords'});
  jsKeywords.push({level:1,word:'volatile', hint:'Javascript Keywords'});
  jsKeywords.push({level:1,word:'while', hint:'Javascript Keywords'});
  jsKeywords.push({level:1,word:'with', hint:'Javascript Keywords'});
  jsKeywords.push({level:1,word:'yield', hint:'Javascript Keywords'});

  hangManWordList = {};
  //  hangManWordList.duplicateLettersTest = duplicateLettersTest;
  hangManWordList.jsKeywords = jsKeywords;
  hangManWordList.jsDataTypes = jsDataTypes;
}
