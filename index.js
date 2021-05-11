const clouds = document.querySelectorAll('.cloud');
const fishes = document.querySelectorAll('.fish');
const shark = document.querySelector('.shark');

function inverseValue(value) {
  return 0 - value;
}

function isHide(element) {
  return element.classList.contains('hide');
}

function getLeft(element) {
  return element.offsetLeft;
}

function getWidth(element) {
  return element.offsetWidth;
}

function hide(element) {
  element.classList.add('hide');
}

function unhide(element, random = false) {
  element.style.left = `${window.innerWidth}px`;
  if (random) {
    element.style.bottom = `${10 + Math.round(Math.random() * 80)}%`;
  }
  element.classList.remove('hide');
}

function move(element, left, speed = 1) {
  element.style.left = `${left - speed}px`;
}

function moveShark(shark) {
  let left = getLeft(shark);
  let width = getWidth(shark);

  if (left < inverseValue(width)) {
    hide(shark);
  } else {
    if (isHide(shark)) {
      unhide(shark, true);
    } else {
      move(shark, left, shark.dataset.speed);
    }
  }
}

function moveClouds(clouds) {
  clouds.forEach((cloud) => {
    let left = getLeft(cloud);
    let width = getWidth(cloud);

    if (left < inverseValue(width)) {
      hide(cloud);
    } else {
      if (isHide(cloud)) {
        unhide(cloud);
      } else {
        move(cloud, left, 1);
      }
    }
  });
}

function moveFishes(fishes) {
  fishes.forEach((fish) => {
    let left = getLeft(fish);
    let width = getWidth(fish);

    if (left < inverseValue(width)) {
      hide(fish);
    } else {
      if (isHide(fish)) {
        unhide(fish, true);
      } else {
        move(fish, left, fish.dataset.speed);
      }
    }
  });
}

setInterval(() => {
  moveClouds(clouds);
  moveFishes(fishes);
  moveShark(shark);
}, 100);
