function lesson_1() {
    /**
     * Lesson 1:  /u  option on regex
     */
    var text = "佐";
    console.log(text.length); // 2
    console.log(/^.$/.test(text)); // false
    console.log(/^.$/u.test(text)); // true

    function hasRegExpU() {
        try {
            var pattern = new RegExp(".", "u");
            console.log('Gotta Regex True'); // true
            return true;
        } catch (ex) {
            console.log('Gotta Regex false'); // false
            return false;
        }
    }

    hasRegExpU();

}

function lesson_2() {
    var text = "hello1 hello2 hello3",
        pattern = /hello\d\s?/,
        result = pattern.exec(text),
        globalPattern = /hello\d\s?/g,
        globalResult = globalPattern.exec(text),
        stickyPattern = /hello\d\s?/y,
        stickyResult = stickyPattern.exec(text);

    console.log(result[0]); // "hello1 "
    console.log(globalResult[0]); // "hello1 "
    console.log(stickyResult[0]); // "hello1 "
}

function lesson_3() {
    /*
      lesson 3 :  getFlags method, gives flags of regular expression
                  getSource method, gives source
     */
    function getFlags(re) {
        var text = re.toString();
        return text.substring(text.lastIndexOf("/") + 1, text.length);
    }

    function getFlagsNewWay(re) {
        console.log('Source :', re.source);
        console.log('Flags :', re.flags);
    }

    // toString() is "/ab/g"
    var re = /ab/g;
    //console.log(getFlags(re)); // "g"

    console.log('regexp :', re);
    getFlagsNewWay(re);




}


function main() {
    //lesson_1();
    //lesson_2();
    lesson_3();
}

main();