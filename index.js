function toArray(obj) {
    return Array.prototype.slice.call(obj, 0);
}

var obj = {length: 1, 'h': '1'};

var aac = toArray(obj);

console.log('aac-->', aac);