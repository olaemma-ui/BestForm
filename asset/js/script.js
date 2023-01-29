
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
                if(activeTab)
                    activeTab.classList.remove("tab-active");
                elem.classList.add("tab-active");
                activeTab = elem
                if(activeTabItem)
                    activeTabItem.classList.remove("tab-active");
                activeTabItem = document.querySELECTor(".tab .tab-group .tab-item"+elem.dataset.tab);
                activeTabItem.classList.add("tab-active");
            }
        })
    })
}


const OPTIONS = document.querySelectorAll('.select .select-options');
const SELECT = document.querySelectorAll('.select');
const SELECT_INPUT = document.querySelectorAll('.select > input');

if(OPTIONS && SELECT && SELECT_INPUT){
    var visible = false;
    SELECT.forEach((e, i) => {
        e.addEventListener('click', () => {
            e.style.cssTex = `
                border-bottom-left-radius: 8px !important;
                border-bottom-right-radius: 8px !important;
            `;
            
            SELECT_INPUT[i].focus();
        });
        SELECT_INPUT[i].addEventListener('focus', ()=>{

            OPTIONS.forEach((elem) => {
                elem.style.visibility = 'hidden';
                Array.from(OPTIONS[i].children).forEach(element => {
                    element.addEventListener('mousedown', ()=>{
                        e.children[0].value = element.innerText;
                        e.children[0].attributes.id.value = element.attributes.value.value;
                    });
                });
                OPTIONS[i].style.visibility = (document.activeElement === SELECT_INPUT[i]);
            });

        });

        SELECT_INPUT[i].addEventListener('blur', ()=> OPTIONS[i].style.visibility = 'hidden');
    });
}