// // 1.----
// let arr1 = [13,23,12,45,22,48,66,100];
// for(let i = 0; i <arr1.length; i++){
//     if(arr1[i] % 2==0){
//         console.log(arr1[i])
//     }
//     // else {
//     //     // console.log("even no not belog im tis array")
//     // }
// }


// // // 2.-----
// // let str1=1
// // for(let i = 0; i <5 ; i++){
// //     let str= str1 +""+ ++str1
// //     // for(let j =1 ; j<=4-i;j++){
// //     //     str=str+" ";
// //     // }
// //     // for(let s =0 ; s<=i-1;s++){
// //     //     str= str +str1++ ;
// //     // }
// //     console.log(str)
// // }


// let rows =8;
// for (let m=1; m<=rows;){
//     let pattern = " ";
//     for (let n = 1; n<=m; n++){
//         pattern += m+"";
//     }
// }
// console.log(pattern)

// // .3----------
// let arr2 = [2,45,3,,67,34,567,34,345,123];
// let largestno = 0;
// for(let i = 0; i <arr1.length; i++){
//    if (arr2[i]>largestno){
//     largestno = arr2[i];
//    }
// }
// console.log(largestno)


// // 4.-------
// let arr=[4,2,34,4,1,12,1,4]
// let res;
// for (let i =0; i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]==arr[j]){
//             res=arr[i]
//             break;

//         }
//     }
//     if(res!==undefined){
//         break;
//     }
// }
// console.log(res+" is repeated no.")

// // 5.---



// 6..
let arr7 = [1,0,0,1,0,1,0,1,1,0];
// let a = [];
// let b = [];

let a = 0;
let b = 0;
for(let i = 0 ; i < arr7.length ; i++){
    if (arr7[i]==0){
        // a += arr7[i]
        a++
     }
    else if (arr7[i]==1){
        // b += arr7[i]
        b++
     }
 }
console.log( "zero = "+ a);
// console.log(a);

console.log( "one = "+ b);
// console.log(b);