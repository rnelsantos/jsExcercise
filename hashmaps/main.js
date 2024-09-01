function hash(key) {
    let hashCode = 0;
       
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    
 
    return hashCode
  } 

  function hashMap (){
    let buckets= [[],[],[],[],[],[],[],[]]


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
            n += bucket.length
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
                existingKeys.push(object)
                console.log(object)
            }
        }
        return existingKeys
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
        keys


    }
  };

  const test = hashMap("test")

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
  //console.log(test.clear())
  console.log(test.keys())

  console.log(test.buckets)