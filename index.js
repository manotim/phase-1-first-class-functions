
function receivesAFunction(calledFunction) {
    calledFunction()
}

function returnsANamedFunction() {
    return function namedFunction() {

    }
}

function returnsAnAnonymousFunction() {
    return function() {
        
    }
}
