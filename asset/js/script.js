
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


const SELECT_OPTION = document.querySelectorAll('.select-option');
const SELECT = document.querySelectorAll('.select-option > .select');
const SELECT_OPTION_VALUE = document.querySelectorAll('.select-option > .select input.select-option-value');
const SELECT_OPTIONS = document.querySelectorAll('.select-option > .options');
const SELECT_OPTIONS_OPTION = document.querySelectorAll('.select-option > .options > .option');

if(SELECT_OPTION && SELECT && SELECT_OPTIONS && SELECT_OPTIONS_OPTION){
    var selectVisible = [];
    var select = function () {
        SELECT_OPTION.forEach((e, i) => {
            selectVisible[i] = false;
            e.addEventListener('click', (event)=>{
                selectVisible[i] = !selectVisible[i];
                console.log(selectVisible);
                // (selectVisible[i]) 
                //     ? SELECT_OPTION_VALUE[i].focus() 
                //     : SELECT_OPTION_VALUE[i].blur();
                
                    if(selectVisible[i]){
                        SELECT_OPTION_VALUE[i].focus();
                        SELECT_OPTIONS[i].style.display = 'block';
                    }else{
                        SELECT_OPTION_VALUE[i].blur();
                        SELECT_OPTIONS[i].style.display = 'none';
                    }
           
            })
        });
    }

    SELECT_OPTION_VALUE.forEach((e, i) => {
        e.addEventListener('focus', ()=>{
            SELECT_OPTIONS[i].style.display = 'block';
            selectVisible[i] = true;
            SELECT_OPTIONS_OPTION.forEach(elem => {
                elem.addEventListener('mousedown', ()=>{
                    e.value = elem.innerText;
                    e.id = elem.id;
                })    
            });
        })
    });

    SELECT_OPTION_VALUE.forEach((e, i) => {
        e.addEventListener('blur', ()=>{
            selectVisible[i] = false;
            // select();
            SELECT_OPTIONS[i].style.display = 'none';
        })
    });
}