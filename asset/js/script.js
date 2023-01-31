
const TABS = document.querySelectorAll(".tab .tab-navs .nav-item[data-tab]");
const TAB_ITEM = document.querySelectorAll(".tab .tab-group .tab-item");
if(TABS){
    let activeTab = null;
    let activeTabItem = null;
    let tabs = []
    TAB_ITEM.forEach((elem, index)=>{
        elem.classList.contains("tab-active") ? activeTabItem = elem : null
    })
    TABS.forEach((elem, index)=>{
        let elemDt = elem.dataset.tab;
        elem.classList.contains("tab-active") ? activeTab = elem : null;
        tabs.push(elemDt)
        elem.addEventListener("click", function(){
            if(!elem.classList.contains("tab-active")){
                if(activeTab) activeTab.classList.remove("tab-active");
                
                elem.classList.add("tab-active");
                activeTab = elem
                if(activeTabItem) activeTabItem.classList.remove("tab-active");
                
                activeTabItem = document.querySelector(".tab .tab-group .tab-item"+elem.dataset.tab);
                activeTabItem.classList.add("tab-active");

                console.log(activeTabItem);
            }
        })
    })
}



const ACCEPT_LABEL = document.querySelectorAll('label.accept');
const ACCEPT_CHECKBOX = document.querySelectorAll('label.accept > input[type=checkbox]');

const OPTION_LABEL = document.querySelectorAll('.custom-option-label');
const OPTION_CHECKBOX = document.querySelectorAll('.custom-option-label > input[type=checkbox]');

if (ACCEPT_CHECKBOX && ACCEPT_LABEL && OPTION_LABEL) {
    ACCEPT_LABEL.forEach((e, i) => {
        e.addEventListener('click', ()=>{
            if(ACCEPT_CHECKBOX[i].checked){
                ACCEPT_LABEL[i].classList.add('btn-purple');
                ACCEPT_LABEL[i].classList.add('text-light');
                OPTION_LABEL[i].classList.add('active');
                OPTION_CHECKBOX[i].checked = true;
            }else{
                ACCEPT_LABEL[i].classList.remove('btn-purple')
                OPTION_LABEL[i].classList.remove('active');
                ACCEPT_LABEL[i].classList.remove('text-light');
                OPTION_CHECKBOX[i].checked = false;
            }
        })
    });
}


const SELECT_OPTION = document.querySelectorAll('.select-option > .select > .dropdown-icon');
const SELECT = document.querySelectorAll('.select-option > .select');
const SELECT_OPTION_VALUE = document.querySelectorAll('.select-option > .select input.select-option-value');
const SELECT_OPTIONS = document.querySelectorAll('.select-option > .options');
const SELECT_OPTIONS_OPTION = document.querySelectorAll('.select-option > .options > .option');

if(SELECT_OPTION && SELECT && SELECT_OPTIONS && SELECT_OPTIONS_OPTION){
    var selectVisible = [];
    SELECT_OPTION.forEach((e, i) => {
        selectVisible[i] = false;
        e.addEventListener('click', (event)=>{
            selectVisible[i] = !selectVisible[i];
            console.log(selectVisible);
            console.log(e);
            // (selectVisible[i]) 
            //     ? SELECT_OPTION_VALUE[i].focus() 
            //     : SELECT_OPTION_VALUE[i].blur();
            
                if(selectVisible[i]){
                    // SELECT_OPTION_VALUE[i].focus();
                    SELECT_OPTIONS[i].style.display = 'block';
                }else{
                    SELECT_OPTION_VALUE[i].blur();
                    SELECT_OPTIONS[i].style.display = 'none';
                }
       
                // SELECT_OPTIONS_OPTION.forEach(elem => {
                //     elem.addEventListener('mousedown', ()=>{
                //         e.value = elem.innerText;
                //         e.id = elem.id;
                //     })    
                // });
        })
    });

    SELECT_OPTION_VALUE.forEach((e, i) => {
        e.addEventListener('focus', ()=>{
            SELECT_OPTIONS[i].style.display = 'block';
            selectVisible[i] = true;
            // SELECT_OPTIONS_OPTION.forEach(elem => {
            //     elem.addEventListener('mousedown', ()=>{
            //         e.value = elem.innerText;
            //         e.id = elem.id;
            //     })    
            // });
        })
    });

    SELECT_OPTION_VALUE.forEach((e, i) => {
        e.addEventListener('blur', ()=>{
            selectVisible[i] = false;
            SELECT_OPTIONS[i].style.display = 'none';
        })
    });
}









// ================================ Signature pad ============================

// var canvas = document.querySelector('canvas');
//   if(canvas){
//     canvas.style.position = 'relative';
//     canvas.style.top = "0";
//     canvas.style.left = "0";
//     canvas.style.color = 'green';

//     var ctx = canvas.getContext('2d');
//     // canvas.width = 600;
//     // canvas.height = 350;

//     function resizeCanvas() {

//         var ratio =  Math.max(window.devicePixelRatio || 1, 1);
   
//         canvas.width = canvas.offsetWidth * ratio;
//         canvas.height = canvas.offsetHeight * ratio;
//         canvas.getContext("2d").scale(ratio, ratio);
//    }
   
//     window.onresize = resizeCanvas;
//     resizeCanvas();


//     ctx.lineWidth = 2;
//     ctx.lineJoin = ctx.lineCap = 'round';

//     var isDrawing, drawLine;

//     canvas.onmousedown = function(event) {
//         isDrawing = true;
//         drawLine = { x: event.clientX, y: event.clientY };

//         console.log(drawLine);
//     };

//     canvas.onmousemove = function(event) {
//         if (!isDrawing) return;

//     //   alert('ola');

//         ctx.beginPath();
        
//         ctx.moveTo(drawLine.x, drawLine.y);
//         ctx.lineTo(event.clientX, event.clientY);
        
//         ctx.stroke();
//         drawLine = { x: event.clientX, y: event.clientY };
//     };

//     canvas.onmouseup = function() {
//         isDrawing = false;
//     };

//     document.getElementById('clear').addEventListener('click', function() {
//             ctx.clearRect(0, 0, canvas.width, canvas.height);
//         }, false);

//     window.onload = function(){
//     var save = document.getElementById('download');

//         save.onclick = function(){
//             download(canvas, 'signature.png');
//         }

//     }

//     function download(canvas, filename) {
//     var lnk = document.createElement('a'), e;
//     lnk.download = filename;
//     lnk.href = canvas.toDataURL("image/png;base64");
    
//     if (document.createEvent) {
//         e = document.createEvent("MouseEvents");
//         e.initMouseEvent("click", true, true, window,
//                         0, 0, 0, 0, 0, false, false, false,
//                         false, 0, null);

//         lnk.dispatchEvent(e);
//     } else if (lnk.fireEvent) {
//         lnk.fireEvent("onclick");
//     }
//     }
//   }

// document.querySelectorAll('input#address').forEach((e, i) => {
//     e.addEventListener('keyup', (event)=>{
        
       
    
//     })
// });


document.addEventListener("DOMContentLoaded", function() {
    var canvas = document.querySelector("#signature_pad");
    var signaturePad = new SignaturePad(canvas, {
        minWidth: 1,
        maxWidth: 2,
    });

    function resizeCanvas() {
        var ratio =  Math.max(window.devicePixelRatio || 1, 1);
        canvas.width = canvas.offsetWidth * ratio;
        canvas.height = canvas.offsetHeight * ratio;
        canvas.getContext("2d").scale(ratio, ratio);
        let storedData = signaturePad.toData();
        signaturePad.clear(); // otherwise isEmpty() might return incorrect value
        signaturePad.fromData(storedData);
    }

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    
    var clearButton = document.querySelector("#clear_button");
    clearButton.addEventListener("click", function() {
        signaturePad.clear();
    });
    
    var finishButton = document.querySelector("#finish_button");
    finishButton.addEventListener("click", function(e) {
        e.preventDefault();
        const svgDataUrl = signaturePad.toDataURL("image/svg+xml");
        document.querySelector('#base64-string').value = svgDataUrl;
    });
});

function fetchAddress(params) {
    google.maps.event.addDomListener(window, 'load', initialize);
    function initialize() {
        var input = document.getElementById('autocomplete_search');
        var autocomplete = new google.maps.places.Autocomplete(input);

        var input2 = document.getElementById('autocomplete_search2');
        var autocomplete2 = new google.maps.places.Autocomplete(input2);

        autocomplete.addListener('place_changed', function () {
            
            var place = autocomplete.getPlace();
                
            var from_address = place.formatted_address;
            document.getElementById("latitude").value = place.geometry['location'].lat();
            document.getElementById("longitude").value = place.geometry['location'].lng();					
            $('#address').val(from_address);
        
        });
   
    }
}
