document.addEventListener("DOMContentLoaded", function () {
  fetch("common.html")
    .then(response => response.text())
    .then(data => {
      document.body.insertAdjacentHTML("afterbegin", data);
    });
});

