sum = [0,0,0];                                      //array of sums
for(var i = 0; i < 5; i++){
    for (var j = 0; j < 3; j++){
        var func = data[i]["getCount"+(j+1)];
        sum[j] += func && func.call(data[i]) || 0; //if field is undefined or count field is invalid adds 0
    }
}
for (var j = 0; j < 3; j++){
    console.log("count" + (j+1) + " = " + sum[j]);
}
