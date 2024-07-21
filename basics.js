

// let arr =  [10,20,[30,40],50,60,[70,80,90],100];


// console.log(arr[2][0])

// matix: 

// let m = [
//     [10,20,30,40],
//     [45,50,60,65], 
//     [70,80,90,100]
// ]

// for(let i = 0; i<=m.length-1; i++){
//     // console.log(m[i].join(","))
//     // console.log(m[i])

//     // m[0]
//     // m[1]
//     // m[2]

//     for(let j = 0; j<=m[i].length-1; j++){
//         console.log(m[i][j])
//     }
// }


// for(i = 0; i<=m.length-1; i++){
//     process.stdout.write(m[i]+",")
// }








// console.log(m[0][0])
// console.log(m[1][2])
// console.log(m[2][3])






// let l = m[0]

// console.log(m[0])

// let l = m[0].length
// let flag = 0
// for(let t of m){
//      if(t.length != l){
//             console.log('not a matrix')
//             flag = 1
//             break;
//      }
// }

// if(flag ==0 ){
//     console.log('matrix')
// }



// let m = [
//     [10,20,30,40],
//     [45,50,60,65], 
//     [70,80,90,100]
// ]


function isMatrix(m){

    // if(Array.isArray(m[0])==false){
    //     console.log('not a matrix')
    //     return
    // }
    if(typeof(m[0]) != 'object'){
        console.log('not a matrix')
        return
    }

    let l = m[0].length
    console.log(l)

    for(let t of m){
        if(typeof t != 'object'){
            console.log('not a matrix')
            return
        }
        if(t.length !=l){
            console.log('not a matrix')
            return
        }
    }

    console.log('matrix')

}


let x = [
    10,
    20,
    [30,40],
    50,
    60,
    [70,80,90],
    100];
isMatrix(x)