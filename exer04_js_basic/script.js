alert('안녕하세요');

let funcNoname = function(){
    alert('hansu_01')
    alert('hansu_02')
}
alert(typeof(funcNoname)+':'+ funcNoname);

function f(x){
    return x*x;
};
alert(f(3));


let fun = function(){
    alert('함수호출');
};

function callTenTimes(callback_func) {
    for (let i = 0; i < 10; i++) {
        callback_func();
    }
}

callTenTimes(fun);