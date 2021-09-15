// FUNCTION FOR INDIVIDUAL BOX
// function likesum(){
//     let likesnumber = document.querySelector(".likes");
//     var sum = parseInt(likesnumber.innerHTML);
//     sum += 1;
//     likesnumber.innerHTML = sum;
// }   

function likesum(num){
    let likesnumber = document.querySelectorAll(".likes");
    var sum = parseInt(likesnumber[num].innerHTML);
    sum += 1;
    likesnumber[num].innerHTML = sum;(likesnumber[num].innerHTML);
}   

