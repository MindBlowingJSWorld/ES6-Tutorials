/*
 * Strings and Regex
 */

function function1(text) {

	console.log('*****************');
	console.log('String :', text);
	console.log(text.length); // 2
	console.log(/^.$/.test(text)); // false
	console.log(text.charAt(0)); // ""
	console.log(text.charAt(1)); // ""
	console.log(text.charCodeAt(0)); // 55362
	console.log(text.charCodeAt(1)); // 57271

	console.log(text.normalize());
}


function main() {
	var text1 = "體";
	//var text2 = "ae";
    function1(text1);
	//function1(text2);
}

main();