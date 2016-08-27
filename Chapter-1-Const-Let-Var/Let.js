/*
 * Let
 */

function function1(color) {
    var value = 'blue';

    if (color) {
        var value = 'White';
        let value1 = 'red';
        console.log('inside block Value of value : ', value);
        console.log('inside block Value of value1 : ', value1);
        value = color;
    }

    console.log('Value of value : ', value);
    //01: LET - The value1 is not accessible outside
    //console.log('Value of value1 : ', value1);
}

function function2(color) {
    var value = 'blue';

    if (color) {

        //02: if a variable is declared with let, we can not check that with typeOf
        //console.log(typeof value1); // "undefined"

        if (true) {
            let value1 = "blue";
        }

        let value = 'White';
        let value1 = 'red';
        console.log('inside block Value of value : ', value);
        console.log('inside block Value of value1 : ', value1);
        value = color;
    }


    console.log('Value of value : ', value);
    //console.log('Value of value1 : ', value1);
}

function function3() {

    var funcs = [];

    /*for (var i = 0; i < 10; i++) {
     funcs.push(function() { console.log(i); });
     }*/

    // 04: Temporary solution
    for (var i = 0; i < 10; i++) {
        funcs.push((function (value) {
            return function() {
                console.log(value);
            }
        }(i)));
    }

    funcs.forEach(function (func) {
        func();
    });

}


function main() {

    //function1('Green');
    //function2('Green');
    function3();
}

main();