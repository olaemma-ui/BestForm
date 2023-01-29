
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
    var state = [];
    SELECT.forEach((e, i) => {
        state[i] = false;
        e.addEventListener('click', () => {
            state[i] = !state[i];
            e.style.cssText = (state[i]) 
            ? `border-bottom-left-radius: 0; border-bottom-right-radius: 0;` 
            : `border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;`;
        
            (state[i]) ? SELECT_INPUT[i].focus() : SELECT_INPUT[i].blur();
            console.log(state);
        });

        e.addEventListener('mousedown', () => {
            console.log('state = ',state);
        })
        
        SELECT_INPUT[i].addEventListener('focus', ()=>{

            OPTIONS.forEach((elem) => {
                Array.from(OPTIONS[i].children).forEach(element => {
                    element.addEventListener('mousedown', ()=>{
                        e.children[0].value = element.innerText;
                        e.children[0].attributes.id.value = element.attributes.value.value;
                    });
                });
                OPTIONS[i].style.display =  'block';
            });

        });

        SELECT_INPUT[i].addEventListener('blur', ()=> {
            e.style.cssText = `border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;`;
            OPTIONS[i].style.display = 'none';
            state[i] = false;
        });
    });
}