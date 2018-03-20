function getById(id) {
  return document.getElementById(id);
}

function getByClass(cl) {
  return document.getElementsByClassName(cl)[0];
}

const reveal = direction => {
  getByClass('main-card').classList.add(`reveal-${direction}`);
};

const hide = () => {
  getByClass('main-card').classList.remove('reveal-left');
  getByClass('main-card').classList.remove('reveal-right');
};

document.getElementById('wdSelect').addEventListener(
  'click', () => reveal('left')
);

document.getElementById('csSelect').addEventListener(
  'click', () => reveal('right')
);

Array.prototype.forEach.call(document.getElementsByClassName('back-button'),
  bb => bb.addEventListener(
    'click', () => hide()
  )
);
