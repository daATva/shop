const filterItems = document.querySelectorAll('.filter__item');

const descriptionItems = document.querySelectorAll('.description__item');

filterItems.forEach((filterItem, index) => {
  filterItem.addEventListener('click', () => {
    filterItems.forEach((item) => {
      item.classList.remove('filter__item--active');
    });

    descriptionItems.forEach((item) => {
      item.classList.remove('active');
    });

    filterItem.classList.add('filter__item--active');

    descriptionItems[index].classList.add('active');
  });
});