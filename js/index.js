// Select all list items on the page
var listItems = document.querySelectorAll("ul li");

// Loop through each list item
listItems.forEach(function (item) {

  // Mouse enters list item
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

// Check when page is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  console.log("About page loaded successfully");
});
