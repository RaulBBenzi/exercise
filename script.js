var tab = document.getElementById('tab');
var result = document.getElementById('result');
var mult = 1
var multmax = 11

function calc() {  
    result.innerHTML = ''
    if (tab.value.length == 0) {
        alert ("Insirá um numero")
    } else {
        for(mult; mult < multmax; mult++) {
        var resultmult = Number(tab.value) * mult 
        console.log(resultmult)
     var p = document.createElement('p')
            
console.log(p)
p.append( ` A tabuada de ${tab.value} x ${mult} = ${resultmult}`)
result.append(p)
    } 
    mult = 1

    }
}