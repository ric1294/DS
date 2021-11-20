const a = [7 , 5 , 10 , 78 , 8];

//if we want to add in the last index we can simply use push function
a.push(20);
console.log(a);


/**
 * if we want to add at specific position let say we want to add at position 3 means after 5
 */
const no = 9;
var position = 3;

//in this case we have to transfer all the other elements to the right position and then insert the
//new element in specific position 

//first we have to check if position has to less than size of array otherwise we can not add any element at that position

if(position <= 0){
    console.log("Sorry!! You can't  inssrt any element at this position");
}
else if(position > a.length +1 || position <= 0){
    console.log("Sorry!! You can't  inssrt any element at this position. Its overflow condition");
}else{
    for(var i =  a.length-1 ; i >= position - 1 ; i--){ // we have to go to till postion 3 means we have to go till index 2(3-1)
        a[i+1] = a[i];
    }

    //now we want to add our new number at position 3 means at index 2
    a[position - 1] = no;
    a.length++;
}

a.forEach(element => {
    console.log(element);   
});


console.log("========at the begining========")

/**
 * if we want to add at beginig of the array
 */

if(position <= 0){
    console.log("Sorry!! You can't  inssrt any element at this position");
}else{
    for(var i = a.length - 1 ; i >= 0 ; i--){ //we have to go till index 0
        a[i+1] = a[i];
    } 
    a[0] = no;
    a.length++;
}

a[0] = no;

a.forEach(element => {
    console.log(element);   
});

//time complexity in best case(end of the array is o(1) and at the begining of the array is o(n) and at specific position is on(n-1) , o(n - 2) 
// so it depends on the position o(n - p))
//but if we want add in unsorted array then simply we can take out the element from the psoition where we want to add and add that in to
//end of the array and insert the new element at the position
console.log("===================================")
a[a.length] = a[position - 1];
a[position - 1] = no;  //in this case time complexity would ne o(1)
a.forEach(element => {
    console.log(element);   
});


