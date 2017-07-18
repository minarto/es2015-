let a = {
    v:{v:3}
};
let b = a;
a.v = { v:5};
console.log(b.v.v);

const Parent = class{
    method(){
        this._method();
    }
    _method(){
        console.log("Parent");
    }
};

const Child = class extends Parent{
    _method()    {
        console.log("Child");
    }
};
(new Parent).method();  //  Parent
(new Child).method();   //  Child
new child instanceof Parent //  true;
