
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
        console.log(`removed tail: ${at(size()-1).getValue()}`)

        at(size()-1).setValue(null)
        at(size()-2).setNext(null)
        
    }
    
    const contains = (value) => {
        let temp = head
        while (temp.getNext() !==null) {
            if (temp.getValue() === value) return true
            temp = temp.getNext()
        }
        if (temp.getValue() === value) return true
        return false
    }

    const find = (value) => {
        let temp = head
        let n = 0
        while (temp.getNext() !==null) {
            
            if (temp.getValue() === value) return n
            temp = temp.getNext()
            n++
        }
        if (temp.getValue() === value) return n
        return null
    }

    const insertAt = (value,index) => {
        let newNode = createNode(value)
        let temp = at(index)
        at(index-1).setNext(newNode)
        newNode.setNext(temp)
    }


    const removeAt = (index) => {
        console.log('removed: '+at(index).getValue())
        at(index-1).setNext(at(index).getNext())
        
    }

   

    

    return {list,
            prepend,
            append,
            toString,
            size,
            headNode,
            tailNode,
            at,
            pop,
            contains,
            find,
            insertAt,
            removeAt

        }
}




const list =  linkedList("list")  //linkedList: (fish) -> (dog) -> (cat) -> (parrot) -> (lion) -> (hamster) -> (snake) -> (giraffe) -> (turtle) -> null

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("lion");
list.append("hamster");
list.append("snake");
list.append("giraffe");
list.append("turtle");
list.prepend("fish");


console.log('linkedList: '+list.toString())
console.log('size: '+list.size()) //9
console.log(list.headNode()) 
console.log(list.tailNode())
console.log(list.at(2))  //cat

list.pop() //removed tail: turtle
console.log(list.contains("cat"))  //true
console.log("find index of cat: "+list.find("cat"))  //2
list.insertAt("racoon",5) 
list.removeAt(8) // removed: giraffe

console.log('linkedList: '+list.toString())  //linkedList: (fish) -> (dog) -> (cat) -> (parrot) -> (lion) -> (racoon) -> (hamster) -> (snake) -> null



/*
const Dog = createNode();
Dog.setValue("cat")
console.log(Dog.getValue())
*/