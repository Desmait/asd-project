const rowBtn = document.querySelector('.left');
const columnBtn = document.querySelector('.right');
const column = document.querySelectorAll('.col-12');
const card = document.querySelectorAll('.item__card');
const button = document.querySelectorAll('.card__button');
const changeDirection = (e) => {
    if (e.target.className.includes('right')) {
        column.forEach(i => {
            i.classList.add("col-md-6");
            i.classList.add("col-lg-4");
        });
        card.forEach(i => {
            i.classList.remove("row-orientation");
        });
        button.forEach(i => {
            i.classList.remove("row-button")
        });
    } else {
        column.forEach(i => {
            i.classList.remove("col-md-6");
            i.classList.remove("col-lg-4");
        });
        card.forEach(i => {
            i.classList.add("row-orientation");
        });
        button.forEach(i => {
            i.classList.add("row-button")
        });
    }
};
rowBtn.addEventListener('click', changeDirection);
columnBtn.addEventListener('click', changeDirection);
