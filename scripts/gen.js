const toTopBtn = document.getElementById("toTopBtn");
const modeToggle = document.getElementById("modeToggle");

if (toTopBtn) {
    window.onscroll = function () {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            toTopBtn.style.display = "block";
        }
        else {
            toTopBtn.style.display = "none";
        }
};

toTopBtn.onclick = function () {
    window.scrollTo({top: 0, behavior: "smooth"});
};

}

window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("darkMode");
        if (modeToggle) {
            modeToggle.checked = true;
        }

    }
})

if (modeToggle) {
modeToggle/addEventListener("change", function () {
    if (this.checked) {
        document.body.classList.add("darkMode");
        localStorage.setItem("theme", "dark");
    } else {
        document.body.classList.remove("darkMode");
        localStorage.setItem("theme", "light");
    }
});
}