// Your code here

Array.prototype.myEach=function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i])

    }
}

Array.prototype["myMap"]=function(callback){
    res = []
    this.myEach((ele)=>{
        res.push(callback(ele))
    });
    return res
}

function double(el){
    return el * 2
};

// console.log([1,2,3].myMap(double))

Array.prototype.myReduce = function(callback, initialValue=this[0]){
    this.myEach((ele)=>{
        initialValue += callback(ele);
    })
    return initialValue;
}

console.log([1, 2, 3].myReduce(function(acc, el) {
    return acc + el;
}))