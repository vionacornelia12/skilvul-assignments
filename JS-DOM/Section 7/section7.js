// menambahkan event keydown
document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
        alert("Anda menekan tombol spasi!");
    }
});

// menambahkan event keydown
document.addEventListener("keydown", function(event) {
    if (event.code === "ArrowRight") {
        document.getElementById("arrowRight").style.backgroundColor = "red";
    }
});

// menambahkan event click
document.getElementById("klikDiv").addEventListener("click", function() {
    this.style.backgroundColor = "red";
});

// menambahkan event mouseover
document.getElementById("myDiv").addEventListener("mouseover", function() {
    alert("Anda menyorot mouse ke elemen ini!");
});