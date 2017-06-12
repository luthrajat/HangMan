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
var constellations = [];
var frozen = [];
var pony = [];
var mickey = [];
//var duplicateLettersTest = [];
var javaScriptList = [];

var hangManWordList = {
  //duplicateLetters: dups,
  jsMickey: mickey,
  jsPony: pony,
  jsFrozen: frozen,
  jsConstellations: constellations,
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

  constellations.push({level:1,word:'Andromeda', hint:'Constellations'});
  constellations.push({level:1,word:'Antlia', hint:'Constellations'});
  constellations.push({level:1,word:'Apus', hint:'Constellations'});
  constellations.push({level:1,word:'Aquarius', hint:'Constellations'});
  constellations.push({level:1,word:'Aquila', hint:'Constellations'});
  constellations.push({level:1,word:'Ara', hint:'Constellations'});
  constellations.push({level:1,word:'Aries', hint:'Constellations'});
  constellations.push({level:1,word:'Auriga', hint:'Constellations'});
  constellations.push({level:1,word:'Boötes', hint:'Constellations'});
  constellations.push({level:1,word:'Caelum', hint:'Constellations'});
  constellations.push({level:1,word:'Camelopardalis', hint:'Constellations'});
  constellations.push({level:1,word:'Cancer', hint:'Constellations'});
  constellations.push({level:1,word:'Canes Venatici', hint:'Constellations'});
  constellations.push({level:1,word:'Canis Major', hint:'Constellations'});
  constellations.push({level:1,word:'Canis Minor', hint:'Constellations'});
  constellations.push({level:1,word:'Capricornus', hint:'Constellations'});
  constellations.push({level:1,word:'Carina', hint:'Constellations'});
  constellations.push({level:1,word:'Cassiopeia', hint:'Constellations'});
  constellations.push({level:1,word:'Centaurus', hint:'Constellations'});
  constellations.push({level:1,word:'Cepheus', hint:'Constellations'});
  constellations.push({level:1,word:'Cetus', hint:'Constellations'});
  constellations.push({level:1,word:'Chamaeleon', hint:'Constellations'});
  constellations.push({level:1,word:'Circinus', hint:'Constellations'});
  constellations.push({level:1,word:'Columba', hint:'Constellations'});
  constellations.push({level:1,word:'Coma Berenices', hint:'Constellations'});
  constellations.push({level:1,word:'Corona Austrina', hint:'Constellations'});
  constellations.push({level:1,word:'Corona Borealis', hint:'Constellations'});
  constellations.push({level:1,word:'Corvus', hint:'Constellations'});
  constellations.push({level:1,word:'Crater', hint:'Constellations'});
  constellations.push({level:1,word:'Crux', hint:'Constellations'});
  constellations.push({level:1,word:'Cygnus', hint:'Constellations'});
  constellations.push({level:1,word:'Delphinus', hint:'Constellations'});
  constellations.push({level:1,word:'Dorado', hint:'Constellations'});
  constellations.push({level:1,word:'Draco', hint:'Constellations'});
  constellations.push({level:1,word:'Equuleus', hint:'Constellations'});
  constellations.push({level:1,word:'Eridanus', hint:'Constellations'});
  constellations.push({level:1,word:'Fornax', hint:'Constellations'});
  constellations.push({level:1,word:'Gemini', hint:'Constellations'});
  constellations.push({level:1,word:'Grus', hint:'Constellations'});
  constellations.push({level:1,word:'Hercules', hint:'Constellations'});
  constellations.push({level:1,word:'Horologium', hint:'Constellations'});
  constellations.push({level:1,word:'Hydra', hint:'Constellations'});
  constellations.push({level:1,word:'Hydrus', hint:'Constellations'});
  constellations.push({level:1,word:'Indus', hint:'Constellations'});
  constellations.push({level:1,word:'Lacerta', hint:'Constellations'});
  constellations.push({level:1,word:'Leo', hint:'Constellations'});
  constellations.push({level:1,word:'Leo Minor', hint:'Constellations'});
  constellations.push({level:1,word:'Lepus', hint:'Constellations'});
  constellations.push({level:1,word:'Libra', hint:'Constellations'});
  constellations.push({level:1,word:'Lupus', hint:'Constellations'});
  constellations.push({level:1,word:'Lynx', hint:'Constellations'});
  constellations.push({level:1,word:'Lyra', hint:'Constellations'});
  constellations.push({level:1,word:'Mensa', hint:'Constellations'});
  constellations.push({level:1,word:'Microscopium', hint:'Constellations'});
  constellations.push({level:1,word:'Monoceros', hint:'Constellations'});
  constellations.push({level:1,word:'Musca', hint:'Constellations'});
  constellations.push({level:1,word:'Norma', hint:'Constellations'});
  constellations.push({level:1,word:'Octans', hint:'Constellations'});
  constellations.push({level:1,word:'Ophiuchus', hint:'Constellations'});
  constellations.push({level:1,word:'Orion', hint:'Constellations'});
  constellations.push({level:1,word:'Pavo', hint:'Constellations'});
  constellations.push({level:1,word:'Pegasus', hint:'Constellations'});
  constellations.push({level:1,word:'Perseus', hint:'Constellations'});
  constellations.push({level:1,word:'Phoenix', hint:'Constellations'});
  constellations.push({level:1,word:'Pictor', hint:'Constellations'});
  constellations.push({level:1,word:'Pisces', hint:'Constellations'});
  constellations.push({level:1,word:'Piscis Austrinus', hint:'Constellations'});
  constellations.push({level:1,word:'Puppis', hint:'Constellations'});
  constellations.push({level:1,word:'Pyxis', hint:'Constellations'});
  constellations.push({level:1,word:'Reticulum', hint:'Constellations'});
  constellations.push({level:1,word:'Sagitta', hint:'Constellations'});
  constellations.push({level:1,word:'Sagittarius', hint:'Constellations'});
  constellations.push({level:1,word:'Scorpius', hint:'Constellations'});
  constellations.push({level:1,word:'Sculptor', hint:'Constellations'});
  constellations.push({level:1,word:'Scutum', hint:'Constellations'});
  constellations.push({level:1,word:'Serpens', hint:'Constellations'});
  constellations.push({level:1,word:'Sextans', hint:'Constellations'});
  constellations.push({level:1,word:'Taurus', hint:'Constellations'});
  constellations.push({level:1,word:'Telescopium', hint:'Constellations'});
  constellations.push({level:1,word:'Triangulum', hint:'Constellations'});
  constellations.push({level:1,word:'Triangulum Australe', hint:'Constellations'});
  constellations.push({level:1,word:'Tucana', hint:'Constellations'});
  constellations.push({level:1,word:'Ursa Major', hint:'Constellations'});
  constellations.push({level:1,word:'Ursa Minor', hint:'Constellations'});
  constellations.push({level:1,word:'Vela', hint:'Constellations'});
  constellations.push({level:1,word:'Virgo', hint:'Constellations'});
  constellations.push({level:1,word:'Volans', hint:'Constellations'});
  constellations.push({level:1,word:'Vulpecula', hint:'Constellations'});

  frozen.push({level:1,word:'Elsa', hint:'An energetic snow princess'});
  frozen.push({level:1,word:'Anna', hint:"Elsa's younger sister"});
  frozen.push({level:1,word:'Olaf', hint:'An endearing snowman'});
  frozen.push({level:1,word:'Kristoff', hint:"Anna's travel guide/love interest"});
  frozen.push({level:1,word:'Sven', hint:"Kristoff's pet reindeer and best friend"});
  frozen.push({level:1,word:'Hans', hint:"Anna's ex-fiancé"});

  pony.push({level:1,word:'Onyx Armor', hint:'My little Pony'});
  pony.push({level:1,word:'Brisk Bronco', hint:'My little Pony'});
  pony.push({level:1,word:'Mister Dare', hint:'My little Pony'});
  pony.push({level:1,word:'Caramel Crunch', hint:'My little Pony'});
  pony.push({level:1,word:'Silver Spirit', hint:'My little Pony'});
  pony.push({level:1,word:'Jade Snow', hint:'My little Pony'});
  pony.push({level:1,word:'Ivory Twister', hint:'My little Pony'});
  pony.push({level:1,word:'Fancy Mark', hint:'My little Pony'});
  pony.push({level:1,word:'Marble Twister', hint:'My little Pony'});
  pony.push({level:1,word:'Winter Whistle', hint:'My little Pony'});

  mickey.push({level:1, word:'Mickey Mouse', hint:'is a highly anthropomorphic mouse most often dressed in gloves'});
  mickey.push({level:1, word:'Minnie Mouse', hint:"is Mickey's female counterpart"});
  mickey.push({level:1, word:'Donald Duck', hint:'is a quick-tempered, mischievous duck'});
  mickey.push({level:1, word:'Daisy Duck', hint:"is Donald Duck's girlfriend"});
  mickey.push({level:1, word:'Goofy', hint: "is Mickey's dim-witted but good-natured friend"});
  mickey.push({level:1, word:'Pluto', hint:"is Mickey Mouse's pet dog"});
  mickey.push({level:1, word:'Clarabelle Cow', hint:"is a tall, bipedal cow who is Minnie Mouse's friend"});
  mickey.push({level:1, word:'Horace Horsecollar', hint:"is a tall, usually bipedal horse who is Mickey Mouse's friend"});
  mickey.push({level:1, word:'Pete', hint:"is a large chubby cat and a recurring antagonist"});
  mickey.push({level:1, word:'Phantom Blot', hint:"is a mysterious enemy of Mickey Mouse who wears a body-length black sheet"});
  mickey.push({level:1, word:'Max Goof', hint:"is Goofy's teenage son"});
  mickey.push({level:1, word:'Oswald the Lucky Rabbit', hint:"is a black rabbit and Mickey Mouse's half-brother."});
  mickey.push({level:1, word:'Scrooge McDuck', hint:"is Donald Duck's wealthy uncle."});
  mickey.push({level:1, word:'Scrooge McDuck', hint:"is Donald Duck's wealthy uncle."});
  mickey.push({level:1, word:"Chip 'n' Dale", hint:"are two chipmunks who are often trouble-makers for Pluto and Donald."});

  hangManWordList = {};
  //  hangManWordList.duplicateLettersTest = duplicateLettersTest;
  hangManWordList.jsMickey = mickey;
  hangManWordList.jsPony = pony;
  hangManWordList.jsFrozen = frozen;
  hangManWordList.jsConstellations = constellations;
  hangManWordList.jsKeywords = jsKeywords;
  hangManWordList.jsDataTypes = jsDataTypes;
}
