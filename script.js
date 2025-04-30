function searchItems() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let items = document.getElementsByClassName("item");

    for (let i = 0; i < items.length; i++) {
        let itemName = items[i].getAttribute("data-name").toLowerCase();
        if (itemName.indexOf(input) > -1) {
            items[i].style.display = "";
        } else {
            items[i].style.display = "none";
        }
    }
}

// Update hue and saturation values
document.getElementById("hueSlider").addEventListener("input", function() {
    document.getElementById("hueValue").textContent = this.value;
});

document.getElementById("saturationSlider").addEventListener("input", function() {
    document.getElementById("saturationValue").textContent = this.value;
});
