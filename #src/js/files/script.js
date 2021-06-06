document.addEventListener('DOMContentLoaded', () => {
    const inputSearch = document.querySelector('.homepage__input');
    const searchBtn = document.querySelector('.homepage__searchBtn');
    const move = document.querySelector('.homepage__move');
    const logo = document.querySelector('.homepage__logo');
    const homepage = document.querySelector('.homepage');

    const search = () => {
        if(inputSearch.value){
            move.classList.add('active');
            setTimeout(() => {
                const url = `https://www.google.com/search?q=${inputSearch.value}`;
                window.open(url, '_self');
                move.classList.remove('active');
            }, 1000);
        }
    }

    const keySearch = e => {
        if(e.key === "Enter") search();
    }

    const removeAnimateTheme = () => {
        setTimeout(() => {
            homepage.classList.remove('animateTheme');
        }, 3100);
    }

    const toDarkTheme = () => {
        localStorage.setItem('theme', 'dark');
        homepage.classList.add('animateTheme');
        setTimeout(() => {
            homepage.classList.add('dark');
        }, 1000);
        removeAnimateTheme();
    }

    if(localStorage.getItem('theme') === 'dark'){
        homepage.classList.add('dark');
    }
    
    const toggleTheme = () => {
        if(localStorage.getItem('theme') === 'dark' && !homepage.classList.contains('animateTheme')){
            homepage.classList.add('animateTheme');
            localStorage.setItem('theme', 'light');
            setTimeout(() => {
                homepage.classList.remove('dark');
            }, 1000);
            removeAnimateTheme();
        }else if(!homepage.classList.contains('animateTheme')){
            toDarkTheme();
        }
    }

    searchBtn.addEventListener('click', search);
    inputSearch.addEventListener('keyup', keySearch);
    logo.addEventListener('click', toggleTheme);

}); // end