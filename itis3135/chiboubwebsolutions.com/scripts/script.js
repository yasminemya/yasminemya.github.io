const menuButton = document.getElementById("menuButton");
const mainNav = document.getElementById("mainNav");

if (menuButton && mainNav) {
    menuButton.addEventListener("click", () => {
        mainNav.classList.toggle("open");

        const isOpen = mainNav.classList.contains("open");

        menuButton.setAttribute(
            "aria-label",
            isOpen ? "Close navigation" : "Open navigation"
        );

        menuButton.textContent = isOpen ? "×" : "☰";
    });
}


/*
    Small pixel interaction:
    When the user moves over the pixel scene,
    the floating elements shift slightly.
*/

const pixelScene = document.querySelector(".pixel-scene");

if (pixelScene) {

    const tags = document.querySelectorAll(".floating-tag");

    pixelScene.addEventListener("mousemove", (event) => {

        const rect = pixelScene.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const moveX = (x / rect.width - 0.5) * 8;
        const moveY = (y / rect.height - 0.5) * 8;

        tags.forEach((tag, index) => {

            const multiplier = index + 1;

            tag.style.transform =
                `translate(${moveX * multiplier}px, ${moveY * multiplier}px)`;
        });
    });


    pixelScene.addEventListener("mouseleave", () => {

        tags.forEach((tag) => {
            tag.style.transform = "translate(0, 0)";
        });

    });

}

document.addEventListener("DOMContentLoaded", function () {
    const scene = document.querySelector("#pixelScene");
    const tags = document.querySelectorAll(".pixel-tag");

    if (scene) {
        scene.addEventListener("mousemove", function (event) {
            const rect = scene.getBoundingClientRect();

            const x = (event.clientX - rect.left) / rect.width - 0.5;
            const y = (event.clientY - rect.top) / rect.height - 0.5;

            tags.forEach(function (tag, index) {
                const amount = (index + 1) * 5;

                tag.style.transform =
                    "translate(" + (x * amount) + "px, " +
                    (y * amount) + "px)";
            });
        });

        scene.addEventListener("mouseleave", function () {
            tags.forEach(function (tag) {
                tag.style.transform = "translate(0, 0)";
            });
        });
    }
});