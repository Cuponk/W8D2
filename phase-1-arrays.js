// Your code here

Array.prototype.uniq = function() {
    res = [];
    this.forEach((ele)=>{
        if(res.includes(ele) === false){
            res.push(ele);
        }
    })
    return res;
}


// console.log([1,2,2,3,3,3].uniq())

Array.prototype.twoSum = function(){
    res = []
    for(let i = 0; i < this.length; i++){
        for(let j = 0; j < this.length; j++){
            if(i < j && this[i]+ this[j] === 0){
                res.push([i, j])
            }
        }
    }
    return res
}
//add

// console.log([-1, 0, 2, -2, 1].twoSum())

Array.prototype.transpose = function(){
    res = [];
    for(let i = 0; i < this.length; i++){
        res.push([]);
    }
    for(let i = 0; i < this.length; i++){
        for(let j = 0; j < this.length; j++){
            res[j].push(this[i][j]);
        }
    }
    return res;
}

// console.log([[0, 1, 2], [3, 4, 5], [6, 7, 8]].transpose())

