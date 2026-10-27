// alert('안녕하세요');

// let funcNoname = function(){
//     alert('hansu_01')
//     alert('hansu_02')
// }
// alert(typeof(funcNoname)+':'+ funcNoname);

// function f(x){
//     return x*x;
// };
// alert(f(3));


// let fun = function(){
//     alert('함수호출');
// };

// function callTenTimes(callback_func) {
//     for (let i = 0; i < 10; i++) {
//         callback_func();
//     }
// }

// callTenTimes(fun);

// function callTenTimes(callback) {
//     for (let i = 0; i < 10; i++) {
//         callback();
//     }
// }

// callTenTimes(function () {
//     alert('함수 호출');
// });

// let product = {
//     제품명: '7D 건조 망고',
//     유형: '당절임',
//     성분: '망고, 설탕, 메타중아황산나트륨, 치자황색소',
//     원산지: '필리핀'
// };
// alert(product['제품명']);
// alert(product['유형']);
// alert(product['성분']);
// alert(product['원산지']);

let product = {
    제품명: '7D 건조 망고',
    유형: '당절임',
    성분: '망고, 설탕, 메타중아황산나트륨, 치자황색소',
    원산지: '필리핀'
};

for (let i in product) {
    alert(i + ':' + product[i]);
}

// let object = {
//     number: 273,
//     string: 'rintiantta',
//     boolean: true,
//     array: [52, 273, 103, 32],
//     method: function () {

//     }
// };

// let person = {
//     name: '윤인성',

//     eat: function (food) {
//         alert(food + '을 먹습니다.');
//     }
// };

// person.eat('밥');

// let person = {
//     name: '윤인성',

//     eat: function (food) {
//         alert(this.name + '이 ' + food + '을 먹습니다.');
//     }
// };

// person.eat('밥');