// Get all elements with the class 'reason'
let reasons = document.querySelectorAll('.reason');
let h1 = document.querySelector('h1');
let problem = document.querySelector('.problem');
let section = document.querySelector('section');
const clickSound = document.getElementById('clickSound');
let clickCount = 0;


reasons.forEach(function(reason) {
    reason.addEventListener('click', function() {
        reason.style.background = '#54B435';
        clickSound.play();
    });
});

problem.addEventListener('click', function() {
    clickCount++;
    if(clickCount%2 != 0){
    reasons.forEach(function(reason) {
        reason.style.background = '#D71313';
    });}
    else{
        reasons.forEach(function(reason) {
            reason.style.background = '#54B435';
            problem.style.background = '#54B435';
        });}

});

// problem.onclick = function(){
//     section.classList.add('active');
// }
