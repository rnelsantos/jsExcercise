console.log("running fibonacci.js")



//Iterative Fibonnaci
function fibs(n,array = []){
    
    for(let i = 0; i<n; i++){
        if (i===0) {array.push(0)}
        if (i===1) {array.push(1)}
        if (i>1)array.push(array[i-1]+array[i-2])
        
    }
    return array
}


//Recursive Fibonnaci 
function fibsRec(n){

        if (n<=0) return "invalid input"
        if (n===1) return [0]
        if (n===2) return [0,1]
        return [...fibsRec(n-1),fibsRec(n-1)[n-2]+fibsRec(n-1)[n-3]]
        
}

//Recursive Fibonnaci 2
function fibsRec2(n,array=[0,1]){
    
    if (n<=0) return "invalid input"
    if (n === 1) return array.slice(n)
    if (n === 2) return array

    let newNumber = array[array.length-2] + array[array.length-1]
    array.push(newNumber)
    return fibsRec2(n-1, array)

}




console.log(fibs(10))
console.log(fibsRec(10))
console.log(fibsRec2(10))


