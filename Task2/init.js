function initialize(typeNumber){        //generates objects with specified number
    var obj = { 
        count: random(1,10)
    };
    obj["getCount" + typeNumber] = function (){
        return this.count;
    }
    return obj;
}


data = [];
for (var i = 0; i < 5; i++){
    data[i] = initialize(random(1,3));
}