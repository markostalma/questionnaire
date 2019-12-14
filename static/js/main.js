/*---------------------------------------------------
    Header Menu Part
---------------------------------------------------*/
// Toggle Language Flag
let languageFlag = document.querySelector(".language-item");
languageFlag.onclick = function(){
    languageFlag.classList.toggle('change-flag');
    if(languageFlag.classList.contains("change-flag")){
        languageFlag.innerHTML = '<img src="../static/img/uk-flag-icon.png" alt="English">'
        return true;
    } else{
        languageFlag.innerHTML = '<img src="../static/img/serbian-flag-icon.png" alt="Serbian">';
        return false;
    }
};

$( function(){



});
