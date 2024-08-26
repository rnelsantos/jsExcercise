
//node Factory
const createNode = (val) => {
    let value = val
    let nextNode = null

    const setValue = (input) => value = input
    const setNext = (input) => nextNode = input

    const getValue = () =>  value 
    const getNext = () => nextNode 

    return {value, nextNode, setValue, setNext, getValue, getNext}
}


//list Factory
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

    const size = () => {
        let temp = head
        let size = 0
        while (temp.getNext() !==null) {
            size++
            temp = temp.getNext()
            if (temp.getNext() === null) size++
        }
        return size
    }

    const headNode = () => head

    const tailNode = () => {
        let temp = head
        while (temp.getNext() !==null) temp = temp.getNext()
        return temp
    }

    const at = (index) => {
        let temp = head
        let n = 0
        while (temp.getNext() !==null) {
            n++
            temp = temp.getNext()
            if (n === index) return temp
        } 
    }

    const pop = () => {
         size()
    }
    
   

    

    return {list,
            prepend,
            append,
            toString,
            size,
            headNode,
            tailNode,
            at,
            pop
        }
}




const list =  linkedList("list")

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.prepend("fish");


console.log('linkedList: '+list.toString())
console.log('size: '+list.size())
console.log(list.headNode())
console.log(list.tailNode())
console.log(list.at(2))

console.log(list.pop())




/*
const Dog = createNode();
Dog.setValue("cat")
console.log(Dog.getValue())
*/