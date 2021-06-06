document.addEventListener('DOMContentLoaded', () => {
    const inputSearch = document.querySelector('.homepage__input');
    const searchBtn = document.querySelector('.homepage__searchBtn');
    const move = document.querySelector('.homepage__move');

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

    searchBtn.addEventListener('click', search);
    inputSearch.addEventListener('keyup', keySearch);

}); // end