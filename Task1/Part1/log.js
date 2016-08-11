for(var i = 0; i < data.length; i++) {
    var value;
    if (data[i] === undefined) {
        value = "не определено";
    }
    else if (data[i] === null) {
        value = "не указано";
    }
    else {
        value = data[i];
    }
    console.log("data[" + i + "] = " + value);
}