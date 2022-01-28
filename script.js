const sketchboard = document.querySelector(".sketchboard");
const resetButton = document.querySelector("#reset");
const squaresText = document.querySelector("#squares-text");
const slider = document.querySelector("#slider");
const radioButtons = document.querySelectorAll("input[name='color-mode']");

let colorMode = "black";

radioButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        colorMode = e.target.id;
    });
});

slider.addEventListener("input", () => {
    squaresText.textContent = slider.value;
});

const populate = () => {
    sketchboard.style.setProperty("--grid-rows", slider.value);
    for (i = 0; i < slider.value ** 2; i++) {
        const newBox = document.createElement("div");
        newBox.addEventListener("mouseover", (e) => {
            if (colorMode === "rainbow") {
                const randomColor = Math.floor(Math.random()*16777215).toString(16);
                e.target.style.setProperty("--random-color", `#${randomColor}`);
            };
            e.target.classList = colorMode;
        });
        sketchboard.appendChild(newBox);
    };
};

resetButton.addEventListener("click", () => {
    sketchboard.innerHTML = "";
    populate();
});

populate();