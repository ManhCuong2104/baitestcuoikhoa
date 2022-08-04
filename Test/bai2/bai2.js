
function numberOneTriangle(num){
    for (let i = 0; i <= num - 1 ; i++){
        for (let j = 0; j <= i - 1 ; j++){
            document.write('*');
        }
        document.write('<br/>');
    }
}
let x = Number(prompt('Nhập vào 1 số trong khoảng từ 1 -> 10: '));
if  (x  >= 1 && x <= 10 && Number.isInteger(x)) {
    numberOneTriangle(x);
} else {
    let x = Number(prompt('Mời bạn nhập lại:  '));
    numberOneTriangle(x);
}