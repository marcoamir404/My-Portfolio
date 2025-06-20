function showUp() {
    document.getElementById("arrow-up").classList.add("hidden");
    document.getElementById("arrow-down").classList.remove("hidden");
    document.getElementById("nav-content").classList.remove("hidden");
}

function showDown() {
    document.getElementById("arrow-up").classList.remove("hidden");
    document.getElementById("arrow-down").classList.add("hidden");
    document.getElementById("nav-content").classList.add("hidden");
}
