const plus = document.querySelector("#plus");
minus = document.querySelector("#minus");
amount = document.querySelector(".amount");
pic2 = document.querySelector("#pic-2");

let a = 0;
plus.addEventListener("click", ()=>{
    a++;
    a = (a < 5) ? + a : a;
    amount.innerText = a;
});

minus.addEventListener("click", ()=>{
    if(a > 0) {
    a--;
    a = (a < 5) ? + a : a;
    amount.innerText = a;
    }
})


function changeImage(newSrc) {
    document.getElementById('main-picture').src = newSrc;
}

