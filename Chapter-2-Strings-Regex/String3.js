

function substitution(name) {

    // This will not work, substitution works only in `
    //let welcomeMessage = 'Welcome my friend. ${name}, welcome to my world';

    //Lesson 1:  Substitution will work when string literal defined with `
    let welcomeMessage = `Welcome my friend. ${name}, welcome to my world\n`;
    return welcomeMessage;
}

function substitutionWithExpr() {
    let count = 10,
        price = 0.25,
        message = `${count} items cost $Doller ${(count * price).toFixed()}`;

    console.log(message);
}

// Calling function from inside substitute, so we can call substitute inside substitute
function substitutionInsideSubstition(name) {
    let count = 10,
        price = 0.25,
        message = `${substitution(name)}${count} items cost $Doller ${(count * price).toFixed()}`;

    return  message;
}

function main() {
    var name = 'Vikramadiyta';
    //console.log(substitution(name));
    //console.log(substitutionWithExpr());
    console.log(substitutionInsideSubstition(name))
}

main();