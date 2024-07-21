

let m = [
    [10,20,30],
    [40,50,60],
    [70,80,90]
]

let newM = []

for(let i = 0; i<=m.length-1; i++){
    // newM[i] = []
    let arr = []
    for(let j = 0; j<=m[i].length-1; j++){
        // newM[i][j] = m[j][i]
        arr.push(m[j][i])
    }
    // [10,40,70]
    newM.push(arr)
}

console.log(newM)



// let newM = [
//     [10,40,70],
//     [20,50,80],
//     [30,60,90]
    //    [35, undefined, undefined]
// ]