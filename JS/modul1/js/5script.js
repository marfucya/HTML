var arr = [1, true, '3 text', 4];
console.log('arr', arr);
console.log('arr', arr[3]);

console.log( 'arr.length', arr.length);

arr.push('5');
console.log('arr', arr);

arr.pop();
console.log('arr', arr);

arr.unshift('8');
console.log("unshift('8');");
console.log('arr', arr);


var removedItem = arr.shift();
console.log("arr.shift();");

console.log('removedItem', removedItem);
console.log('arr', arr);

arr[10] = '10 element';
console.log(arr);