    // Next/Prev Test Section START
    let countSteps = 1;
    // Test Next Button 
    $(".next-btn").click(function () {
        if ($(".questions").hasClass("active-question")) {
            $('.questions.active-question').removeClass('active-question').next().addClass('active-question');
            $('.prev-btn').css("display", "block");
            countSteps++;
            console.log(countSteps);
        } if (countSteps == 4) {
            $('.submit-btn').css("display", "block");
            $('.prev-btn').css("display", "none");
            $('.next-btn').css("display", "none");
        } 
      
    });
    // Test Prev Button 
    $(".prev-btn").click(function () {
        if ($(".questions").hasClass("active-question")) {
            $('.questions.active-question').removeClass('active-question').prev().addClass('active-question');
            countSteps--;
            console.log(countSteps);
        } if (countSteps == 1){
            $('.prev-btn').css("display", "none");
          }
    });



//let nextBtn = document.querySelector('.next-btn');
//let questions = document.querySelectorAll('.questions');
//let activeQuestions = document.querySelectorAll('.active-questions');
//
//nextBtn.onclick = function(){
//    questions.forEach(question => {
//        if(question.classList.contains('active-question')){
//            question.nextElementSibling.classList.add('active-question');
//            this.classList.remove('active-question');
//            countSteps++;
//        }
//    });
//}


