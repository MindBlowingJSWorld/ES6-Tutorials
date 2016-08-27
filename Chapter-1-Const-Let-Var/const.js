function function1(color) {

	const maxItems1 = 100;

    const maxItems2 = 'Items';

    // Const need to be initilized at declaration itself
    // const maxItems3;

    // Pure OOPs const
    //let maxItems1 = 200;

	//maxItems1 = 100;

    console.log('Max Items 1 : ', maxItems1);
    console.log('Max Items 2 : ', maxItems2);
}

function function2(color) {
    const myColor = {
        'name': 'test',
        'number': 100
    };

    //01: Will not allow to reassign the CONST
    /*myColor = {
        'name': 'test1',
        'number': 200
    };*/
    console.log(JSON.stringify(myColor));

    //02: But, the value can be reassigned
    myColor.name = 'NewName';
    myColor.number = 200;
    console.log(JSON.stringify(myColor));
}


function main() {
	function2();
}

main();