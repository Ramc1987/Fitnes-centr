const activatesTabs = () => {
  const tabs = document.querySelectorAll('.tabs__button');
  const tabsContent = document.querySelectorAll('.tab__list');

  if (tabs) {
    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        tabsContent.forEach((item) => {
          item.classList.remove('tab__list--active');
        });

        target.classList.add('tab__list--active');

        tabs.forEach((tabitem) => {
          tabitem.classList.remove('tabs__button--active');
        });

        tab.classList.add('tabs__button--active');
      });
    });
  }
};

export {activatesTabs};
