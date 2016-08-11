function log(array) {
    for (var i = 0; i < array.length; i++) {
        var value;
        if (array[i] === undefined) {
            value = "не определено";
        }
        else if (array[i] === null) {
            value = "не указано";
        }
        else {
            value = array[i];
        }
        console.log("data[" + i + "] = " + value);
    }
}