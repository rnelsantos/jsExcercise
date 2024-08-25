console.log("Runnning Mergesort")

function mergeSort(array){

if (array.length === 1) return array

let left = array.slice(0,(array.length/2))
let right = array.slice((array.length/2),(array.lenght))

left = mergeSort(left)
right = mergeSort(right)

let merge = []
while(left?.length && right?.length){
    (left[0]<right[0]) ?  merge.push(left.splice(0,1)[0]) : merge.push(right.splice(0,1)[0])
}
left?.length!=0 ? merge.push(...left):merge.push(...right)

return merge

}

mergeSort([4,3,2,1])
console.log(mergeSort([4,3,2,1,9,8,7,6,5,0]))

