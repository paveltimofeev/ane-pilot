var _foo = function foo() {
    console.log('foo');
};

var _foom = function foom(stroke) {
    console.log(stroke);
};

function deco(f) {
    
    return function()
    {
        console.log('<decorated>');
        f();
        console.log('</decorated>');
    };
} 

function decor(f) {
    
    return function(stroke)
    {
        console.log('<decorated>');
        f(stroke);
        console.log('</decorated>');
    };
}  


_foo();

_foo = deco(_foo);
_foo();


_foom('wow-wow!');

_foom = decor(_foom);
_foom('wow-wow!');