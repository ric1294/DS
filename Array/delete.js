
//youtube link - https://www.youtube.com/watch?v=CMbpZK_xqoc&list=PLdo5W4Nhv31bbKJzrsKfMpo_grxuLl8LU&index=3
const a = [7 , 5 , 10 , 78 , 8];

/**
 * Delete from end of the array
 */
a.pop(20);
console.log(a);


/**
 * Delete from any specific position of array
 */
var position = 3
//first we have check position has to less than array length and grater than 0
if(position <= 0 || position > a.length){
    console.log("It is invalid position")
}else{
    for( i = position-1 ; i < a.length-1 ; i++){
        a[i] = a[i+1]
    }
    a.length--;
}

a.forEach(element => {
    console.log(element);   
});

/**
 * Delete the element from begining of the array
 */
 for( i = 0 ; i < a.length-1 ; i++){
            a[i] = a[i+1]
        }
        a.length--;
     
a.forEach(element => {
    console.log(element);   
});
