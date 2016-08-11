sum = [0,0,0];                                      //array of sums
var zero_func = function(){ 
    return 0; 
}
for(var i = 0; i < 5; i++){
    for (var j = 0; j < 3; j++){
        var func = data[i]["getCount"+(j+1)] || zero_func;
        sum[j] += func.call(data[i]); //if field is undefined or count field is invalid adds 0
    }
}
for (var j = 0; j < 3; j++){
    console.log("count" + (j+1) + " = " + sum[j]);
}
