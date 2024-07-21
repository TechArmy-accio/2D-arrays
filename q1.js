

// let m = [
//     [10,20,30],
//     [40,50,60],
//     [70,80,90]
// ]


// // sum of each row 
// // let sum = 0
// for(let i = 0; i<=m.length-1; i++){
//     //  console.log(m[i])
//     let sum = 0
//     for(let j = 0; j<=m[i].length-1; j++){
//          sum = sum + m[i][j]
//     }

//     console.log(sum)
// }



// sum of each column 
let m = [
    [10,20,30],
    [40,50,60],
    [70,80,90]
]
// m[0][2] + m[1][1] + m[2][0]

 
// let sum = 0
// for(let i = 0; i<=m.length-1; i++){
//     //  console.log(m[i])
//     let sum = 0
//     for(let j = 0; j<=m[i].length-1; j++){
//          sum = sum + m[j][i] 
//          // m[0][0] + m[0][1] + m[0][2]
//          // m[0][0] + m[1][0] + m[2][0]
//     }

//     console.log(sum)
// }






// sum of left diagonal elements

// let m = [
//     [10,20,30],
//     [40,50,60],
//     [70,80,90]
// ]

// let sum = 0
// for(let  i= 0; i<=m.length-1; i++){
//     //  console.log(m[i][i])
//     sum = sum + m[i][i]
// }
// console.log(sum)

// let sum = 0
// for(let i = 0; i<=m.length-1; i++){
    
//     for(let j = 0; j<=m[i].length-1; j++){
//         if(i == j){
//             console.log(m[i][j])
//            sum = sum + m[i][j]
//         }
//     }

    
// }
// console.log(sum)




// sum of right diagonal elements



// let m = [
//     [10,20,30],
//     [40,50,60],
//     [70,80,90]
// ]

// m[0][2] + m[1][1] + m[2][0]
// let sum = 0
// for(let  i= 0; i<=m.length-1; i++){
//      console.log(m[i][m.length-1-i])
//       sum = sum + m[i][m.length-1-i]
// }
// console.log(sum)


let sum = 0
for(let i = 0; i<=m.length-1; i++){
    
    for(let j = 0; j<=m[i].length-1; j++){
        if(i+j == m.length-1){
            console.log(m[i][j])
           sum = sum + m[i][j]
        }
    }

    
}
console.log(sum)














// let arr = [10]
// arr.pop()
// console.log(arr)





// for(let t of arr){
//        arr.pop()
// }

// let arr = [10,20,30,40,50]
// let  l = arr.length-1
// for(let i = 0; i<=l; i++){
//      let x = arr.pop() 
//      // [10,20,30,40]
//     //  console.log(i, arr.length)
// }

// console.log(arr)


// geenrate a matrix of 7x7 matrix

// let m = [
//     [1,2,3,4,      5, 6, 7],
//     [8,9,10,11,12,13,14],
//     [15,16,17,18,19,20,21],
//     [22,23,24,25,26,27,28],
//     [29,30,31,32,33,34,35],
//     [36,37,38,39,40,41,42],
//     [43,44,45,46,47,48,49]
// ]