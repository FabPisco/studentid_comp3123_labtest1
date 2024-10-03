//Method for delaysuccess
const delayedSuccess = () => {
    setTimeout(() => {
           let success = { message: 'delayed success!' };
            console.log(success);
        }, 500);
    }
    
    // method for delayExeption
    const delayedException = () => {
        setTimeout(() => {
            try {
                throw new Error('error: delayed exception!');
            } catch (e) {
                console.error({ error: e.message });
            }
        }, 500);
    }
    
    // method to resolve a promise aftertime 500ms
    const resolvedPromise = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ message: 'resolved promise!' });
            }, 500);
        });
    }
    
    //  method to reject a promise timeout 500ms
    const rejectedPromise = () => {
        return new Promise((_, reject) => {
            setTimeout(() => {
                reject({ error: 'rejected promise!' });
            }, 500);
        });
    }
    
    // To call and resolved results 
    resolvedPromise()
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.error(error);
        });
    
    rejectedPromise()
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.error(error);
        });
    
    // call delaySucces and delay Exeption
    delayedSuccess();
    delayedException();
    