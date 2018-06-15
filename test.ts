function asyncForEach(arr, cb){
    arr.forEach((i) => {
        setTimeout(() => {cb(i)}, 0);
    })
}

asyncForEach([1,2,3], (i) => {
    console.log(i);
})

console.log('test');