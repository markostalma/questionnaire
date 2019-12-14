/*------------------------------------------------
    Survey Part - Form Validation, Next/Prev
---------------------------------------------------*/
// Next/Prev Buttons Form Section
let countSteps = 0;
let nextBtn = document.querySelector('.next-btn');
let prevBtn = document.querySelector('.prev-btn');
let progressBar = document.querySelector('.progress-bar');

// Classic Input Validation
let ageInput = document.getElementById("age");
let validAgeInput = document.querySelector(".valid-age-input");
let invalidAgeInput = document.querySelector(".invalid-age-input");
ageInput.addEventListener("input", function(){
    if(document.getElementById("age").value % 1 != 0) {
        invalidAgeInput.innerHTML = "Please choose a whole number, not decimal";
        validAgeInput.innerHTML = "";
        nextBtn.disabled = true;
    } else if(document.getElementById("age").value.length <= 1 || document.getElementById("age").value < 18){
        invalidAgeInput.innerHTML = "Please choose age over 18";
        validAgeInput.innerHTML = "";
        nextBtn.disabled = true;
    } else if(document.getElementById("age").value.length >= 3){
        invalidAgeInput.innerHTML = "Please choose age under 100";
        validAgeInput.innerHTML = "";
        nextBtn.disabled = true;
    } else {
        validAgeInput.innerHTML = "Looks Good!";
        invalidAgeInput.innerHTML = "";
        nextBtn.disabled = false;
    }
});


// Radio Button Validation
let genreRadioBtns = document.querySelectorAll("input[type=radio][name=genre]");
let activeGenreRadioBtns = document.querySelectorAll(".genre-radio");
let validGenreRadioBtn = document.querySelector(".valid-radio-input");
let invalidGenreRadioBtn = document.querySelector(".invalid-radio-input");
genreRadioBtns.forEach(function(genreRadioBtn) {
    // nextBtn.disabled = true;
    genreRadioBtn.addEventListener("click", function () {
        if (this.checked) {
            validGenreRadioBtn.innerHTML = "Look Good!";
            invalidGenreRadioBtn.innerHTML = "";
            nextBtn.disabled = false;
            activeGenreRadioBtns.forEach(function(activeGenreRadioBtn) {
                activeGenreRadioBtn.classList.remove("active");
            });
            this.parentNode.classList.toggle("active");
        } else {
            invalidGenreRadioBtn.innerHTML = "Please select one option!";
            validGenreRadioBtn.innerHTML = "";
            nextBtn.disabled = true;
        }
    });
});

// Range Input Validation
let intensityRange = document.querySelector("#intensity-range");
let validIntensityRange = document.querySelector('.valid-intensity-range');
let invalidIntensityRange = document.querySelector(".invalid-intensity-range");
intensityRange.addEventListener("input", function(){
    if(this.value == 0){
        invalidIntensityRange.innerHTML = "Please select value larger than zero";
        nextBtn.disabled = true;
    }else {
        invalidIntensityRange.innerHTML = "";
        nextBtn.disabled = false;
    }
    if(this.value <= 16) {
        intensityRange.classList.remove('high-intensity', "medium-intensity");
        intensityRange.classList.add('low-intensity');
        validIntensityRange.style.color = "#3A7734";
    } else if(this.value > 16 && this.value < 34){
        intensityRange.classList.remove('high-intensity', "low-intensity");
        intensityRange.classList.add('medium-intensity');
        validIntensityRange.style.color = "#DAA520";
    } else{
        intensityRange.classList.remove('low-intensity', "medium-intensity");
        intensityRange.classList.add('high-intensity');
        validIntensityRange.style.color = "#9C1A1C";
    }
});

// Surname Input Validation
let surname = document.querySelector("#surname");
surname.addEventListener('input', function(){
   if (this.value.length != 0){
       nextBtn.disabled = false;
   }
});

// Select Input Validation
let selectOption = document.querySelector("#select-option");
let validSelectInput = document.querySelector(".valid-select-input");
let invalidSelectInput = document.querySelector(".invalid-select-input");
let submitForm = document.querySelector(".submit-btn");
selectOption.addEventListener('click', function(){
    let options = selectOption.querySelectorAll("option");
    options.forEach(function(option){
       if(option.value == ""){
            submitForm.disabled = true;
            invalidSelectInput.innerHTML = "Please select one option";
       }else{
            invalidSelectInput.innerHTML = "";
            validSelectInput.innerHTML = "Looks Good.";
            submitForm.disabled = false;
       }
    });
});

// Submit Inputs on Enter key
let allInputs = document.querySelectorAll("form input");
allInputs.forEach(function(allInput){
    allInput.addEventListener("keyup", function(event){
        event.preventDefault();
        if(event.keyCode === 13){
            nextBtn.click();
        }
    });
});

// Form Next Button
nextBtn.onclick = function(){
    if ($(".form-group").hasClass("active-question")) {
        $('.form-group.active-question').removeClass('active-question').next().addClass('active-question');
        prevBtn.style.display = "block";
        countSteps++;
        progressBar.style.width = (countSteps * 20) + "%";
    } if (countSteps == 4) {
        $('.submit-btn').css("display", "block");
        prevBtn.style.display = "none";
        nextBtn.style.display = "none";
    }
     nextBtn.disabled = true;
};

// Form Previous Button
prevBtn.onclick = function(){
    if ($(".form-group").hasClass("active-question")) {
        $('.form-group.active-question').removeClass('active-question').prev().addClass('active-question');
        countSteps--;
        progressBar.style.width = (countSteps * 20) + "%";
    } if(countSteps == 0){
        $('.prev-btn').css("display", "none");
        progressBar.style.width = "0%";
    }
    nextBtn.disabled = false;
};

// Surname Form Data and make a unique ID
let count = 0;
submitForm.onclick = function(){
    count += 1;
    console.log(count);
};

// Show range input value
let rangeValue = document.querySelector('#rangeValue');
function showValue(rangeVal){
    if(rangeVal == 0) {
        rangeValue.innerHTML = "";
        validIntensityRange.style.display = "none";
    }else{
        rangeValue.innerHTML = rangeVal;
        validIntensityRange.style.display = "block";
    }
}

// Enable Enter key on Next Button
function onEnterKey(){
    if(document.querySelector('.next-btn').disabled == false){
        document.querySelector('.next-btn').click();
    }
}