const tabs = Array.from(document.getElementsByClassName('tab'));
const tabContents = Array.from(document.getElementsByClassName('tab__content'));

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        
        
        for (let i = 0; i < tabs.length; i++) {
            tabs[i].classList.remove('tab_active');
        }
        tab.classList.toggle('tab_active');
        if (tab.classList.contains('tab_active')) {
            for (let i = 0; i < tabs.length; i++) {
                tabContents[i].classList.remove('tab__content_active');
            }
                tabContents[index].classList.toggle('tab__content_active');
            
            } 
    })
    
})