for (var i = 0; i < data.length; i++) {
    var value = +data[i];        //try to get number value
    if (data[i] == 0) {
        data[i] = value + 10;
    }
    else if (data[i] > 100) {
        data[i] = value - 100;
    }
    else if (data[i] < 100 && value) {  // second condition for null check
        data[i] = value + 100;
    }
}
