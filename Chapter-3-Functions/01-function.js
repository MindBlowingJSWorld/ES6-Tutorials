


//ECMA5 way of doing it
function makeRequestEC5(url, timeout, callback) {
    timeout = timeout || 1000;
    callback = callback || function() {};
    // the rest of the function

    console.log(`timeout : ${timeout}, url: ${url}, callback: ${callback}`);
    callback('test');
}

function getTimeout() {
    return 1000;
}

function getDefaultRestURL() {
    return '/api/test';
}

function getDefaultCallback(){
    return function() {
        console.log('Test');
    }
}

//Lesson1 : We can now provide default to method parameters
//ECMA6 way of doing it
function makeRequestEC6(url='/api/test', timeout=1000, callback=function(){}) {
    // Now if the values are missing then it picks the defaults
    console.log('type:', typeof timeout);
    console.log(`timeout : ${timeout}, url: ${url}, callback: ${callback}`);
    callback('test');
}


//Lesson2 : insteand of
//ECMA6 way of doing it
function makeRequestEC6WithDefault(url=getDefaultRestURL(), timeout=getTimeout(), callback=getDefaultCallback()) {
    // Now if the values are missing then it picks the defaults
    console.log('type:', typeof timeout);
    console.log(`timeout : ${timeout}, url: ${url}, callback: ${callback}`);
    callback('test');
}


function mixArgs(first, second) {
//    "use strict";
    console.log(first === arguments[0]);
    console.log(second === arguments[1]);
    first = "c";
    second = "d";
    console.log(first === arguments[0]);
    console.log(second === arguments[1]);
}

function mixArgsInStrictMode(first, second) {
    "use strict";
    console.log(first === arguments[0]);
    console.log(second === arguments[1]);
    first = "c";
    second = "d";
    console.log(first === arguments[0]);
    console.log(second === arguments[1]);
}



function main() {
    makeRequestEC6();
    makeRequestEC6('/api/test');
    makeRequestEC6('/api/test',2000);
    makeRequestEC6('/api/test','2000');
    makeRequestEC6('/api/test',2000, function(callbackValue){console.log(callbackValue)});
}


function mainEC6() {
    makeRequestEC6WithDefault();
    makeRequestEC6WithDefault('/api/test');
    makeRequestEC6WithDefault('/api/test',2000);
    makeRequestEC6WithDefault('/api/test','2000');
    makeRequestEC6WithDefault('/api/test',2000, function(callbackValue){console.log(callbackValue)});
}

/*mixArgs("a", "b");
console.log('*********************');
mixArgsInStrictMode("a", "b")*/;


//main();
mainEC6();
