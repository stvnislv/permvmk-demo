(function () {
  var key = 'pvmk-a11y';
  try {
    if (localStorage.getItem(key) === '1') document.documentElement.classList.add('a11y');
  } catch (e) {}

  function paint() {
    var on = document.documentElement.classList.contains('a11y');
    var buttons = document.querySelectorAll('[data-a11y-toggle]');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].textContent = on ? 'Обычная версия' : 'Для слабовидящих';
      buttons[i].setAttribute('aria-pressed', on ? 'true' : 'false');
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    paint();
    var buttons = document.querySelectorAll('[data-a11y-toggle]');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function () {
        var on = document.documentElement.classList.toggle('a11y');
        try { localStorage.setItem(key, on ? '1' : '0'); } catch (e) {}
        paint();
      });
    }
  });
})();
