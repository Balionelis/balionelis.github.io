document.addEventListener("mousemove", function(event) {
  var trail = document.createElement("div");
  trail.style.backgroundColor = "#00a6ff";
  trail.style.width = "10px";
  trail.style.height = "10px";
  trail.style.borderRadius = "50%";
  trail.style.position = "absolute";
  trail.style.left = event.clientX - 5 + "px";
  trail.style.top = event.clientY - 5 + "px";
  trail.style.opacity = "0";
  trail.style.pointerEvents = "none"; // Add this line
  document.getElementById("trailContainer").appendChild(trail);

  setTimeout(function() {
    trail.style.transition = "opacity 0.5s linear";
    trail.style.opacity = "1";
  }, 0);
  
  setTimeout(function() {
    trail.parentNode.removeChild(trail);
  }, 500);
});
