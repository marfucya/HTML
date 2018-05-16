var i = 0;

// while (i < 4){
//     alert('test');
//     console.log(i);
//     i++;
// }


// do {
// console.log(i);
// alert('hello ' + i);
// i++;
// } while (i < 4); 

// for (var i = 0; i < 4; i++) {
//     console.log(i);
// }


var arr = ['test', 1, 2 , 'qwerty'];

for (var i = 0; i < arr.length; i++) {
    console.log('arr[i] = ', arr[i]);
    console.log('i = ', i );
}

for (var i = arr.length-1; i >= 0; i--) {
    console.log('arr[i] = ', arr[i]);
    console.log('i = ', i );
}

console.log('out of cycle');