//DZ-1

// var array = ["name", "John", "lastname", "Black", "age", "23"];
// var resultObject = {};
//
// for(var i = 0; i < array.length; i += 2){
//     key = array[i];
//     value = array[i + 1];
//     resultObject[key] = value;
// }
// console.log(resultObject);

//DZ-2

// var arr = [1, 3, 5, 7, 9, 11];
//
// var getAverage = (numbers) => {
//     var sum = 0
//     for (let i = 0; i < numbers.length; i += 1) {
//         sum += numbers[i]
//     }
//     return sum / numbers.length
// }
// console.log(getAverage(arr))

//dz-3
// function getDataType(value) {
//     return typeof value;
// }
// console.log(getDataType(false))
// console.log(getDataType('hello world!'))
// console.log(getDataType(42))

//Dz-4
document.addEventListener('DOMContentLoaded', function () {
    var Input = document.getElementById('Input')
    var plusBtn = document.getElementById('plusBtn')
    var minusBtn = document.getElementById('minusBtn')

    var counterValue = 0
    Input.value = counterValue
    plusBtn.addEventListener('click', function () {
        counterValue++
        Input.value = counterValue
    })
    minusBtn.addEventListener('click', function () {
        counterValue--
        Input.value = counterValue
    })
})