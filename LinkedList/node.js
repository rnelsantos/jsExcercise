
//node Factory
export default  function createnode(val) {
    let value = val
    let nextNode = null

    const setValue = (input) => value = input
    const setNext = (input) => nextNode = input

    const getValue = () =>  value 
    const getNext = () => nextNode 

    return {value, nextNode, setValue, setNext, getValue, getNext}
}
