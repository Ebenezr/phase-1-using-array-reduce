const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const totalAccumulation = (arr, reducer, init) => {
    let accum = init;
    for(const element of arr){
        accum = reducer(accum, element)
    }
    return accum
}
batteryBatches.reduce((accumulator, element) => { 
    const totalBatteries = element + accumulator;
    return totalBatteries;
}, 4);