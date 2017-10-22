/*var i
var i_1
var i_2
console.log(i)
for (i_1 = 0; i_1 < 5; i_1++) {
    console.log(i_1)
}

console.log('.....................................')

console.log(i)
for (i_2 = 10; i_2 < 15; i_2++) {
    console.log(i_2)
}*/
//การประกาศตัวเเปรซ้ำ
//i จะมองเห้นได้ใน for loop 
//ถ้าเปลี่ยนจาก let เป็น var จะทำให้ค่าทั้งหมด รันออกมาได้ เเต่จะเป็น undenfined
//ทุกอันที่เป็น let จะคงคอนเซพของ bockscope ไม่ให้ไปยุ่งกับใคร
//ถ้าใช้ i_1 เเละ i_2 จะทำให้ถูกหลัก bockscope ไปโดยปริญาย
//ใช้เเบบ i_1 เเละ i_2 ไม่ต้องมีค่ำว่า let เหมือนกับ i_1 เเละ i_2 โดนประกาศในตัวเเปร var เเล้ว

var o1 = {name: 'ball'}
var o2 = {name: 'ball'}
var o3 = o1
console.log(o1 == o2)
console.log(o1 === o2)
console.log(o1 === o3)
console.log(o1 == o3)

var a = '1'
var b = 1
var c = true
console.log(a == b)
console.log(typeof ( a - b ) )
console.log(b + c)