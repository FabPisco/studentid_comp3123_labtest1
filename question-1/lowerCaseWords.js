// question#1 fab pisco #100296834

function lowerCaseWords(mixedArray) {
    return new Promise((resolveThePass, rejecting) => {
        //checking out if is an array or not
        if (!Array.isArray(mixedArray)) {
            return rejecting(new Error("Yo what is wrong with you my frien, only arrays dude"));
        }

        // a filter to convert only strings and  lower case
        const lowercaseString = mixedArray
            .filter(item => typeof item === 'string') 
            .map(item => item.toLowerCase()); // 

       //converting the result for lowercase
        resolveThePass(lowercaseString);
    });
}

//the array 
const mixedArray = ['PIZZA', 10, true, 25, false, 'WING'];
//the outputs 
lowerCaseWords(mixedArray)
    .then(lowercaseString => console.log(lowercaseString)) 
    .catch(error => console.error('Error:', error.message));
