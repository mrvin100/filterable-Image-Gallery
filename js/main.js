const body = document.body;
const themeBtn = document.getElementById('theme-btn');

if(themeBtn){
    themeBtn.addEventListener('click', () => {
        body.classList.toggle('dark');
    })
}

const filterButtons = document.querySelectorAll('#filter-buttons button');
const filterableCards = document.querySelectorAll('#filterable-cards .card');

// function to filter cards based on filter buttons
const filterCards = (e) => {
    document.querySelector('#filter-buttons .active').classList.remove('active');
    e.target.classList.add('active');

    filterableCards.forEach(card => {
        //Show the card if it matches the clicked filter or show all cards if 'all' filter is clicked
        if(card.CDATA_SECTION_NODE.name === e.target.dataset.filter || e.target.dataset.filter === 'all'){
            return card.classList.replace('hide', 'show');
        }
        card.classList.add('hide');
    });
}

filterButtons.forEach(button => button.addEventListener('click', filterCards));