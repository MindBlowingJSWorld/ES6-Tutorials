

function function_1(message) {
    console.log(message); // "Text1 is good one !!!"
    console.log(typeof message); // "string"
    console.log(message.length); // 33
}

function toString(strArray) {
    let string = '{';

    strArray.forEach(function (strToken) {
        string.concat(strToken).concat(' ');
    });

    string.concat('}');

    return string;
}

function main() {

     var message='<div>Text1 is good one !!! </div>';
     let message1 = `\`Text1\` is good one !!!!`;

     // Lesson 2 : Possible to do multiline with `\`, works with both ' and `
     let message2 = `Text1 is good one !!!!\
     Text2 is also good`;

     let message3 = 'Text1 is good one !!!!\
     Text2 is also good';


    // Lesson 3: \n now helps with Newline in strings, so we can have strings to go multiline
    let message5 = 'Text1 is good one \n!!!! Text2 is also good';

     //function_1(message);
     //function_1(message1);
     //function_1(message2);
     function_1(message5);





 /*   // lesson 3: Html Char Escaping
    let message4 = '<html><div>tesing stuff</div></html>';

    let escapedMessage = escape(message4);
    console.log(escapedMessage);
    console.log(toString(escapedMessage));
*/
}

main();