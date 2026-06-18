
// ======================================
// DRAGGABLE WINDOWS
// ======================================
const windows = document.querySelectorAll(".window-box");

windows.forEach(function(windowBox) {

    let isDragging = false;
    let offsetX;
    let offsetY;

    windowBox.addEventListener("mousedown", function(event) {
        isDragging = true;

        offsetX = event.clientX - windowBox.offsetLeft;
        offsetY = event.clientY - windowBox.offsetTop;
    });

    document.addEventListener("mousemove", function(event) {
        if (isDragging) {
            windowBox.style.left = event.clientX - offsetX + "px";
            windowBox.style.top = event.clientY - offsetY + "px";
        }
    });

    document.addEventListener("mouseup", function() {
        isDragging = false;
    });

});
