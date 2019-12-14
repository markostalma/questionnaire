// Convert Form Data to PDF format
let headImg = "data:image/jpeg;base64,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";
let toPDF = document.querySelector(".pdf-btn");
toPDF.onclick = function(){
    let doc = new jsPDF();
    // {# Doc Date #}
    let today = new Date();
    let submitDate = "Submitted Date: " + today.getDay() + "." + today.getMonth() + "." + today.getFullYear() + " - " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    doc.setFontSize(7);
    doc.setTextColor(160, 160, 160);
    doc.setFontType('italic');
    doc.text(submitDate, 160, 5);
    // {# Doc Heading #}
    doc.addImage(headImg, 'JPEG', 10, 8, 10, 10);
    doc.setFontSize(14);
    doc.setTextColor(180, 180, 180);
    doc.text("Questionnaire", 23,15);
    // {# First horizontal line #}
    doc.setDrawColor(180, 180, 180);
    doc.line(10, 25, 200, 25);
    // {# Data Table Heading #}
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text("Your answers:", 14, 35);
    // {# Data Table #}
    doc.fromHTML($('#user-answers').html(), 10, 35);
    // {# Second horizontal line #}
    doc.setDrawColor(180, 180, 180);
    doc.line(10, 85, 200, 85);
    // {# Privacy Policy #}
    doc.setFontSize(8);
    doc.setTextColor(160, 160, 160);
    doc.setFontType('italic');
    doc.text("This is a data privacy policy",10,90);
    // {# Init Doc name #}
    doc.save('user-answers.pdf');
};