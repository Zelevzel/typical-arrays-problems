
// exports.min = function min (array) {

//     if (!array || !array.length) {
//         return 0;
//     }

//     let minNumber = array[0];

//     array.forEach((value, index) => {


//         if (minNumber > value) {
//             minNumber = value;      
//         }     
//     });
//     return minNumber;
// }


exports.min = function min (array) {
    if (!array || !array.length) {
    return 0;}

    array.sort((a,b) => a-b);
    return array[0];
}


exports.max = function max (array) {
    if (!array || !array.length) {
        return 0;
    }
    
    array.sort((a,b) => a-b);
    return array[array.length-1];
}

exports.avg = function avg (array) {

    if (!array || !array.length) {
        return 0;
    }

    let i = array.reduce((acc, item)=>acc + item);
  return (i / array.length);
}
