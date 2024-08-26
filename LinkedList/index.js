import linkedList from "./linked.js";
//import print from "./sample.js";

//import {linkedList, createNode} from "./linked.js"

//const linkedList = require ('./linked.js')
//const createNode = require ('./linked.js')

console.log("hello world")

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