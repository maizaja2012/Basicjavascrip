/*var a
console.log(a)
console.log(b)

if (true) {
    var b = 2
    a = 1
    console.log(b)
}
console.log(a)
console.log(b)

//hoisting

function a1 () {
    var a = 5
    console.log(a)
    console.log(b)

    if (true) {
        var b = 2
        console.log(b)
    }
    console.log(b)
}

a1()*/
//console.log(a)

function a1(fn) {
    var a = 5
    console.log(`a = ${a}`)
    console.log(typeof fn)
    fn()
}

function b1() {
    var b = 1
    console.log(`b = ${b}`)
}

var o = new b1()
a1(b1)

var o1 = {}

function SimpleObject(){

}
var o2 = new SimpleObject()
o1.name = 'ball'
o2.email = 'ball@gmail.com'
console.log(o1.name)
console.log(o2.email)

console.log('-------------------------------')

