

function lesson_1() {
    /**
     * Lesson 1:  string.includes()
                  string.startsWith()
                  string.endsWith()

        -  None of these methods work with Characters with ignoreCase
     */



    var text = 'text to be checked for perfect match';

    console.log(text.includes('text'));    //true
    console.log(text.includes('text11'));  //false

    console.log(text.startsWith('text'));  //true
    console.log(text.startsWith('TEXT'));  //false
    console.log(text.startsWith('text11'));  //false

    console.log(text.endsWith('match'));  //true
    console.log(text.endsWith('MATCH'));  //false
    console.log(text.endsWith('matCH'));  //false
    console.log(text.startsWith('match1'));  //false

}

function Lesson_2() {
    /*
        Lesson 2 :  string.repeat(X) -> String to be repeated X number of times
     */


    let text = 'XX-YY-ZZ';

    console.log(text.repeat(2));   //XX-YY-ZZ XX-YY-ZZ
    console.log(text.repeat(3));    // XX-YY-ZZ XX-YY-ZZ XX-YY-ZZ
}




function main() {
    //lessaon1();
    Lesson_2();
}

main();