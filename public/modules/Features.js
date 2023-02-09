// #region Calendar Drag - Drag the calendar days to the left or right to change the date

// #endregion

// #region Open Create Event Menu - Open the create event menu when the user clicks the create event button
const divBottomContainer = document.getElementById('divBottomContainer');
const divBottomContainerButton = document.getElementById('divBottomContainerBtn');

const onDivBottomClick = () => {
  if (divTop.style.height === '50%') {
    divTop.style.height = '90%';
    divBottom.style.height = '10%';
  } else {
    divTop.style.height = '50%';
    divBottom.style.height = '50%';
  }

  divBottom.removeEventListener('click', onDivBottomClick);

  divBottomContainerButton.addEventListener('click', onDivBottomCloseClick);
  divBottomContainerButton.style.display = 'block';

  divBottomContainer.appendChild(divBottomContainerButton);
};

const onDivBottomCloseClick = async () => {
  divBottomContainerButton.style.display = 'none';

  if (divTop.style.height === '50%') {
    divTop.style.height = '90%';
    divBottom.style.height = '10%';
  } else {
    divTop.style.height = '50%';
    divBottom.style.height = '50%';
  }

  divBottomContainerButton.removeEventListener('click', onDivBottomCloseClick);

  // TODO: Fix this
  await sleep(1);

  divBottom.addEventListener('click', onDivBottomClick);
};

divBottom.addEventListener('click', onDivBottomClick);
// #endregion
