let task = {
    name: 'name',
    title: 'title'
};

Object.defineProperty(task, 'toString', {
    value: function () {
        return `this is a Task`;
    },
    writable: false,
    enumerable: false,
    configurable: false
});


// implements inheritance
let urgentTask = Object.create(task);

Object.defineProperty(urgentTask, 'toString', {
    value: function () {
        return 'this is a urgentTask'
    },
    writable: false,
    enumerable: false,
    configurable: false
});

console.log(urgentTask.toString());