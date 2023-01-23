const tabs = [...document.querySelectorAll('.tab')];
const tabsContent = [...document.querySelectorAll('.project__content')];

tabs.forEach((tab) => tab.addEventListener('click', tabsChange));
tabs.forEach((tab) => tab.addEventListener('keydown', arrowNavigation));

function tabsChange(e) {
    const indexToRemove = tabs.findIndex((tab) =>
        tab.classList.contains('tab--active')
    );
    tabs[indexToRemove].classList.remove('tab--active');
    tabs[indexToRemove].setAttribute('aria-seclected', 'false');
    tabs[indexToRemove].setAttribute('tabindex', '-1');
    tabsContent[indexToRemove].classList.remove('project__content--active');

    const indexToShow = tabs.indexOf(e.target);
    tabsContent[indexToShow].classList.add('project__content--active');
    tabs[indexToShow].classList.add('tab--active');
    tabs[indexToShow].setAttribute('tabindex', '0');
    tabs[indexToShow].setAttribute('aria-seclected', 'true');
};

let tabFocus = 0;
function arrowNavigation(e){
    if(e.keyCode === 39 || e.keyCode === 37){
        tabs[tabFocus].setAttribute('tabindex',-1);

        if(e.keyCode === 39){
            tabFocus++;

            if(tabFocus >= tabs.length){
                tabFocus = 0;
            }
            else if(e.keyCode === 37){
                tabFocus--;

                if(tabFocus < 0){
                    tabFocus = tabs.length -1 ;
                }
            }

            tabs[tabFocus].setAttribute('tabindex',0);
            tabs[tabFocus].focus();
        }
    }
}
