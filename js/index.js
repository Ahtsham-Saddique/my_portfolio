
var listItems = document.querySelectorAll("ul li");

listItems.forEach(function (item) {

  item.addEventListener("mouseenter", function () {
    item.style.backgroundColor = "#0d6efd";
    item.style.color = "white";
  });

  // Mouse leaves list item
  item.addEventListener("mouseleave", function () {
    item.style.backgroundColor = "white";
    item.style.color = "black";
  });

});

document.addEventListener("DOMContentLoaded", function () {
  console.log("About page loaded successfully");
});


document.addEventListener('DOMContentLoaded', () => {

  const demoButtons = document.querySelectorAll('.project-card .btn');
  demoButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const projectName = btn.closest('.project-card').querySelector('.card-title').innerText;
      console.log(`Opening live demo for ${projectName}`);
      // Optional: alert(`Opening live demo for ${projectName}`);
    });
  });

  const cards = document.querySelectorAll('.project-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
    });
  });

});


