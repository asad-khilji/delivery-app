 // Retrieve selected area from session storage
 document.addEventListener("DOMContentLoaded", function () {
    const selectedArea = sessionStorage.getItem("selectedArea");
    if (selectedArea) {
        document.getElementById("area-name").textContent = selectedArea;
    } else {
        document.getElementById("area-name").textContent = "No area selected.";
    }
});