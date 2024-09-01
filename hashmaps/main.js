
 //linked-list
function createnode(val) {
    let value = val
    let nextNode = null

    const setValue = (input) => value = input
    const setNext = (input) => nextNode = input

    const getValue = () =>  value 
    const getNext = () => nextNode 

    return {value, nextNode, setValue, setNext, getValue, getNext}
}

function linkedList (list) {
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
//end of linked list functions
//-------------------------------------********************************************************************************************













function hash(key) {
    let hashCode = 0;
       
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    
 
    return hashCode
  } 

  function hashMap (){
    let buckets= [[],[],[],[],[],[],[],[]
                 ,[],[],[],[],[],[],[],[]] 
 


    const getBucket = (key) => { // return  the chosen bucket for said key
        return buckets[(hash(key) % buckets.length)]
    }
  


    const entry = (key,bucket) => {
        let b  = getBucket(key)
        let h = hash(key) 

        
        for (let n of bucket ){
            if (n.key === key)  return n
        }
        
        return null
    }


    const set = (key,value) => { // generate/overwrite key-value object in designated bucket-key
        let b = getBucket(key)
        let e = entry (key, b)
        let index = (hash(key) % buckets.length)

        if (loadFactor()>0.75) {
            let ExistingKeys = keys()
            let ExisitngValues = values()
             buckets.push([],[],[],[],[],[],[],[],
                          [],[],[],[],[],[],[],[])

             for (let i=0; i<ExistingKeys.length; i++){
                set(ExistingKeys[i],ExisitngValues[i])
             }
             
          }

        if (index < 0 || index >= buckets.length) {
            throw new Error("Trying to access index out of bound");
        }


        if (e){
            e.value = value
            return 
        }

        b.push({key,value})
    }

    const get = (key) => {
        let b = getBucket(key)
        let e = entry (key, b)

        if (e) return e

        return null
    }

    const has = (key) => {
        let b = getBucket(key)
        let e = entry (key, b)

        if (e) return true
        return false
    }


    const remove = (key) => {
        let b = getBucket(key)
        let e = entry (key, b)

        if (e) {
            buckets[(hash(key) % buckets.length)] = b.filter(index => index.key != key)
         
            return b
        }

        return false
    }
    const length = () => {
        let n=0;
        
        for (let bucket of buckets ){
           if( bucket.length!==0) n++
        }
        return n
    }

    const clear = () => {

        for (let i=0; i<buckets.length; i++){
           buckets[i]=[]
        }
        return "cleared"
    }

    const keys = () => {
        let existingKeys = []
        
        for (let bucket of buckets ){
            for (let object of bucket ){
                existingKeys.push(object.key)
                
            }
        }
        return existingKeys
    }

    const values = () => {
        let existingVal = []
        
        for (let bucket of buckets ){
            for (let object of bucket ){
                existingVal.push(object.value)
                
            }
        }
        return existingVal
    }

    const entries = () => {
        let entries = []
        
        for (let bucket of buckets ){
            for (let object of bucket ){
                entries.push([object.key,object.value])
                
            }
        }
        return entries
    }



    const loadFactor = () => {
        let loadFactor = 0
        loadFactor  = length() / buckets.length

        return loadFactor
    }


    return{
        buckets,
        entry,
        getBucket,
        set,
        get,
        has,
        remove,
        length,
        clear,
        keys,
        values,
        entries,
        loadFactor


    }
  };

  const test = hashMap("test")
/*
  test.set('apple', 'red')
  test.set('banana', 'yellow')
  test.set('carrot', 'orange')
  test.set('dog', 'brown')
  test.set('elephant', 'gray')
  test.set('frog', 'green') //overwrited
  test.set('frog', 'red')
  test.set('mouse', 'gray')

  console.log(test.buckets)
  console.log(test.get('banana'))
  console.log(test.has('banana'))
  console.log(test.remove('apple'))
  console.log(test.length())

  console.log(test.keys())
  console.log(test.values())
  console.log(test.entries())
  console.log(test.clear())
  
  console.log(test.buckets)


  */

  test.set('apple', 'red')
  test.set('banana', 'yellow')
  test.set('carrot', 'orange')
  test.set('dog', 'brown')
  test.set('elephant', 'gray')
  test.set('frog', 'green')
  test.set('grape', 'purple')
  test.set('hat', 'black')
  test.set('ice cream', 'white')
  test.set('jacket', 'blue')
  test.set('kite', 'pink')
  test.set('lion', 'golden')
  test.set('lison', 'golden')
  test.set('laion', 'golden')
  test.set('lison', 'golden')
  test.set('liodn', 'golden')
  test.set('liofn', 'golden')
  test.set('liogn', 'golden')
  test.set('liohn', 'golden')
  test.set('liofn', 'golden')
  console.log('loadFactor :'+test.loadFactor())
    
  console.log(test.buckets)
  console.log(test.length())