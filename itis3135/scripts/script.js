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