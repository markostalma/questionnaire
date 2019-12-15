$(function(){
    /*---------------------------------------------------
        Header Menu Part
    ---------------------------------------------------*/
    // Toggle Language and Language Flag
    let languageFlag = document.querySelector(".language-item");
    let server = "http://127.0.0.1:5000";
    languageFlag.onclick = function(){
        languageFlag.classList.toggle('change-flag');
        if(languageFlag.classList.contains("change-flag")){
            languageFlag.innerHTML = '<img src="../static/img/uk-flag-icon.png" alt="English">'
        } else{
            languageFlag.innerHTML = '<img src="../static/img/serbian-flag-icon.png" alt="Serbian">';
        }
        let alt = $(this).children("img").attr("alt");
        console.log(alt);
        let appdir = "/"
        $.ajax({
            type: "POST",
            url: server+appdir,
            data: JSON.stringify(alt),
            contentType: "application/json; charset=utf-8",
            datatype: 'json'
        }).done(function(data) {
            console.log("Language changed to: "+ alt.toString());
        });
    };
});
