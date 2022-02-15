const log = console.log;

function Stack() {
    this.arr = [];
    this.isEmpty = () => this.arr.length === 0;
    this.size = () => this.arr.length;
    this.push = (item) => {
        return this.arr.push(item);
    };
    this.pop = () => {
        return this.arr.pop();
    };
}

function Queue() {
    this.arr = [];
    this.isEmpty = () => this.arr.length === 0;
    this.size = () => this.arr.length;
    this.enqueue = (item) => {
        return this.arr.push(item);
    };
    this.dequeue = () => {
        return this.arr.shift();
    };
}

const stk = new Stack();
log(stk.isEmpty());
stk.push(5);
stk.push(4);
stk.push(1);
log(stk.size());
log(stk.pop());

const q = new Queue();
log(q.isEmpty());
q.enqueue(5);
q.enqueue(4);
q.enqueue(1);
log(q.size());
log(q.dequeue());
