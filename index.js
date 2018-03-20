const reveal = direction => {
  document.getElementById('skills-container').classList.add(`reveal-${direction}`);
};

const hide = () => {
  document.getElementById('skills-container').classList.remove('reveal-left');
  document.getElementById('skills-container').classList.remove('reveal-right');
};

document.getElementById('webDev').addEventListener(
  'click', () => reveal('left')
);

document.getElementById('compSci').addEventListener(
  'click', () => reveal('right')
);

Array.prototype.forEach.call(document.getElementsByClassName('back-button'),
  bb => bb.addEventListener(
    'click', () => hide()
  )
);