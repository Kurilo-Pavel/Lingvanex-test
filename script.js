const handleClick = (e) => {
  for (const button of e.parentElement.children) {
    if (button === e) {
      button.className = "button section-buttons__button button_active";
    } else {
      button.className = "button section-buttons__button button_inactive";
    }
  }
  const blockTravel = document.getElementsByClassName("block-travel")[0];
  for (const block of blockTravel.children) {
    if (block.dataset.id) {
      if (block.dataset.id === e.dataset.id) {
        block.className = "card block-travel__card block-travel__card-active";
      } else {
        block.className = "card block-travel__card block-travel__card-inactive";
      }
    }
  }
};
