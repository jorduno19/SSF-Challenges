var arr = [1, [2, [3, [4, [5, 6]]]]];

var squashArray = function(arr) {
    var squashed = [];
    // solution
    for (var i = 0; i < arr.length; i++) {
        // check if array
        if (Array.isArray(arr[i])) {
            //re runs function going deeper into arrays with in arrays, calls the function onto itself, you need to rerun it because when it gets to position 1 that is the end of the first array
            squashed = squashed.concat(squashArray(arr[i]));
        }
        else {
            //if not an array push value to new array
            squashed.push(arr[i]);
        }
    }

    return squashed;

};
console.log(squashArray(arr));
