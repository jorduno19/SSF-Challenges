const numArray = [1, 22, 3, 40, 5, 64];

var reverseArray = (arr) => {

    for (let i = 0; i < (Math.floor(arr.length / 2)); i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = temp;
    }
    return arr;
}

console.log(reverseArray(numArray));
