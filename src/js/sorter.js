// list of names in array
// sorted method
var sorter = function(array){
    array.map(function(value, index){
        var random = Math.floor(Math.random() * index);
        var prevValue = array[index];
        array[index] = array[random];
        array[random] = prevValue;
        return
    })
    return array;
}