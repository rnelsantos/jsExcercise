const linkedList = (list) => {
    let head = null
    let tail = null

    const prepend = (value) =>   {
        if (head === null){
        head = createNode(value)
        } else {
            let temp = head;
            head = createNode(value)
            head.setNext(temp)
        }
    }

    const append = (value) =>   {
        if (head === null) {
            head = createNode(value)
        }else {
        let temp = head
        while (temp.getNext() !==null) temp = temp.getNext()
        temp.setNext(createNode(value))
        }
    }

    const toString = () => {
        let temp = head
        let string = ""
        while (temp.getNext() !==null) {
            string = string + `(${temp.getValue()}) -> `
            temp = temp.getNext()
            if (temp.getNext() === null) string = string +  `(${temp.getValue()}) -> `  + 'null' 
        }
        return string
    }

    

    return {list,prepend,append,toString}
}


const createNode = (val) => {
    let value = val
    let nextNode = null

    const setValue = (input) => value = input
    const setNext = (input) => nextNode = input

    const getValue = () =>  value 
    const getNext = () => nextNode 

    return {value, nextNode, setValue, setNext, getValue, getNext}
}


const list =  linkedList("list")

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString())




/*
const Dog = createNode();
Dog.setValue("cat")
console.log(Dog.getValue())
*/