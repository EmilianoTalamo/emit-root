cheet('↑ ↑ ↓ ↓ ← → ← → b a', function () {

  // Check if easter egg is already running
  if(document.getElementById("eastereggbg") != null) {
    return false;
  }


  // Trigger audio
  var cheatAudio = new Audio('/konami-code/coin.mp3');
  cheatAudio.play();
  console.log("Konami code triggered!");


  // Draw overlay
  var bg = document.body.appendChild(document.createElement("div"));
  bg.id = "eastereggbg";

  // Overlay style
  bg.style.backgroundColor = "rgba(0,0,0,0.2)";
  bg.style.width = "100vw";
  bg.style.height = "100vh";
  bg.style.position = "fixed";
  bg.style.top = "0";
  bg.style.left = "0";
  bg.style.display = "flex";
  bg.style.transform = "initial";
  bg.style.alignItems = "center";
  bg.style.justifyContent = "center";


  // Draw video
  var javascripto = bg.appendChild(document.createElement("video"));
  javascripto.src = "/konami-code/javascripto.mp4";
  javascripto.style.maxWidth = "640px";
  javascripto.style.width = "80vw";
  javascripto.play();


  // Quit video
  function removeEasterEgg() {
    document.body.removeChild(document.getElementById("eastereggbg"));
    document.removeEventListener("keydown", escListener);
    kasemaster = false;
  }

  // Quit video with ESC
  document.addEventListener("keydown", escListener);
  function escListener(evt) {
    if(evt.key == "Escape" || evt.keyCode == 27) {
      removeEasterEgg();
    }
  }

  // Quit video with click
  bg.onclick = removeEasterEgg;

  // Quit video when video ends
  javascripto.onended = function() {
    removeEasterEgg();
  }

  
});