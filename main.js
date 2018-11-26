let bandNumber = 0

const takeNumber = function (bandName) {
    for(var i = 0; i < takeNumber.length; i++){
        bandNumber++;
        console.log(bandNumber + '.' + bandName);

    }
}

const scum = takeNumber("Galactic Scum")
console.log(scum)  // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs")
console.log(under)  // This should print "2. Underdogs" in the console

const cat = takeNumber("Undercat")
console.log(under)  // This should print "2. Underdogs" in the console