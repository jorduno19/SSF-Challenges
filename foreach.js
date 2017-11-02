var loop = function(array) {
    for (let i = 0; i < array.length; i++) {
        var current = array[i];
        console.log(current);
    }
};
const array = [];

array.forEach(function(current) {
    console.log(current);
});

array.forEach((current) => console.log(current));
