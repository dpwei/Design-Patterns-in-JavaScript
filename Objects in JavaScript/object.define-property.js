// ECMAScript 5
var obj = {
    name: 'new name',
    toString: function () {
        return this.name;
    }
};

Object.defineProperty(obj, 'title', {
    value: function () {
        return '-' + this.name + '-';
    },
    writable: true,
    enumerable: true,
    configurable: true
});


// writable
obj.title = 'new title';
// enumerable
console.log(Object.keys(obj)); // name、 toString、title
// configurable[use to reDefine property]
Object.defineProperty(obj, 'title', {
    enumerable: false
});