function showInstructions(emergencyType) {
    var instructionsDiv = document.getElementById('instructions');
    instructionsDiv.innerHTML = '';

    if (emergencyType === 'infrakt') {
        instructionsDiv.innerHTML = '<h2>Udhëzime për Infrakt</h2><p><ul><li>Thirr ndihmën dhe vendos personin në pozitën e rehatshme.</li><li> Sigurohu që të ketë ajër të mjaftueshëm dhe mbaje personin ngrohtë.</li><li> Jep aspirin nëse personi nuk është alergjik ndaj tij.</li></ul></p>';
        var infractImage=document.createElement("img");
        infractImage.src = "f1.jpg";
        infractImage.alt = "Infrakt Icon";
        infractImage.style.maxWidth = "300px";  
        infractImage.style.maxHeight = "300px";
        instructionsDiv.appendChild(infractImage);
    } 
    else if (emergencyType === 'thyerje') {
        instructionsDiv.innerHTML = '<h2>Udhëzime për Thyerje</h2><p><ul><li>Vendosni imobilizim në zonën e thyerjes për të parandaluar lëvizjen.</li><li> Aplikoni akull në zonën e thyerjes për të ulur dhimbjen dhe inflamacionin.</li><li> Thërrisni ndihmën medicinale.</li></ul></p>';
        var breachImage=document.createElement("img");
        breachImage.src = "f2.jpg";
        breachImage.alt = "Thyerje Icon";
        breachImage.style.maxWidth = "300px";  
        breachImage.style.maxHeight = "300px";
        instructionsDiv.appendChild(breachImage);
    }
    else if (emergencyType === 'plage') {
        instructionsDiv.innerHTML = '<h2>Udhëzime për Plage</h2><p><ul><li>Lajmërojini dhe mbajini personin të qetë.</li><li> Lani plagën me ujë të pastër dhe sapun.</li><li> Aplikoni një përbërje antiseptike dhe veshni një pëlhurë sterile për të mbrojtur plagën.</li></ul></p>';
        var woundImage=document.createElement("img");
        woundImage.src = "f3.jpg";
        woundImage.alt = "Plage Icon";
        woundImage.style.maxWidth = "300px"; 
        woundImage.style.maxHeight = "300px";
        instructionsDiv.appendChild(woundImage);
    } 
    else if (emergencyType === 'hipoglikemia') {
        instructionsDiv.innerHTML = '<h2>Udhëzime për Hipoglikemi</h2><p><ul><li>Jepni personit me hipoglikemi ushqim ose pije me sheqer të shpejtëpërgatitur.</li><li> Thërrisni ndihmën medicinale nëse personi nuk përmirësohet brenda disa minutave.</li></ul></p>';
        var hypoglycemiaImage=document.createElement("img");
        hypoglycemiaImage.src = "f4.jpg";
        hypoglycemiaImage.alt = "Hipoglikemia Icon";
        hypoglycemiaImage.style.maxWidth = "300px";  
        hypoglycemiaImage.style.maxHeight = "300px";
        instructionsDiv.appendChild(hypoglycemiaImage);
    } 
    else if (emergencyType === 'aksidente') {
        instructionsDiv.innerHTML = '<h2>Udhëzime për Aksidente</h2><p><ul><li>Lajmërojini dhe sigurojini vendin e aksidentit.</li><li> Kontrolloni shëndetin e personave të përfshirë dhe ofroni ndihmë të parë për plagët dhe lëndimet.</li></ul></p>';
        var accidentsImage=document.createElement("img");
        accidentsImage.src = "f5.jpg";
        accidentsImage.alt = "Aksidente Icon";
        accidentsImage.style.maxWidth = "300px";  
        accidentsImage.style.maxHeight = "300px";
        instructionsDiv.appendChild(accidentsImage);
    } 
    else if (emergencyType === 'mbytja') {
        instructionsDiv.innerHTML = '<h2>Udhëzime për Permbytje</h2><p><ul><li>Nxirrni personin nga uji në mënyrë të sigurt dhe fillojni RCP (Rinanimim Kardiopulmonar) nëse personi nuk është i vetëdijshëm dhe nuk është duke frymëzuar.</li><li> Thërrisni ndihmën medicinale menjëherë.</li></ul></p>';
       var drowingImage=document.createElement("img");
       drowingImage.src = "f6.jpg";
       drowingImage.alt = "Mbytja Icon";
       drowingImage.style.maxWidth = "300px"; 
       drowingImage.style.maxHeight = "300px";
       instructionsDiv.appendChild(drowingImage);
    } 
    else if (emergencyType === 'insekte') {
        instructionsDiv.innerHTML = '<h2>Udhëzime për Insekte</h2><p><ul><li>Lajmërojini dhe pastrojini zonën rreth plages.</li><li> Aplikoni një substancë kundër inflamacionit dhe mbani lëvizjen e plages për të parandaluar përhapjen e venenit.</li></ul></p>';
        var insectsImage = document.createElement("img");
        insectsImage.src = "f7.jpg";
        insectsImage.alt = "Insekte Icon";
        insectsImage.style.maxWidth = "300px"; 
        insectsImage.style.maxHeight = "300px";
        instructionsDiv.appendChild(insectsImage);
    }

    else if (emergencyType === 'zjarri') {
        instructionsDiv.innerHTML = '<h2>Udhëzime për Zjarri</h2><p><ul><li> Largohuni në mënyrë të sigurt dhe thirrni ndihmën zjarrfikëse.</li><li> Përdorni ndihmën për të mbuluar gojën dhe hundën tuaj ndërsa dilni jashtë.</li></ul></p>';
        var fireImage = document.createElement("img");
        fireImage.src = "f8.jpg";
        fireImage.alt = "Zjarri Icon";
        instructionsDiv.appendChild(fireImage);
    
    } 
} 


// Map
document.addEventListener("DOMContentLoaded", function() {
    var map = document.getElementById("map");
    var mapToggle = document.getElementById("mapToggle");
    map.style.display = "none";

    function toggleMap() {
        if (map.style.display === "none") {
            map.style.display = "block";
        } else {
            map.style.display = "none";
        }
    }
    mapToggle.addEventListener("click", toggleMap);
});
// Footer

function callNumber(number) {
    window.location.href = 'tel:' + number;
}









  