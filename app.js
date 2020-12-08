const canvas = document.getElementById("jsCanvas");
const painting = false;
function mouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
}
function stopPainting() {
  painting = false;
}
function mouseDown(event) {
  painting = true;
}

function mouseUp(event) {
  painting = false;
}

function mouseLeave(event) {
  painting = false;
}

if (canvas) {
  canvas.addEventListener("mousemove", mouseMove);
  canvas.addEventListener("mousedown", mouseDown);
  canvas.addEventListener("mouseup", mouseUp);
  canvas.addEventListener("mouseleave");
}
