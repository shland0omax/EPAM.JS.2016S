function initialize(typeNumber){
    var obj = { 
        count: random(1,10)
    };
    obj["getCount" + typeNumber] = function (){
        return this.count;
    }
}


data = [];
for (var i = 0; i < 5; i++){
    data[i] = initalize(random(1,3));
}