const sketchboard = document.querySelector(".sketchboard");
const resetButton = document.querySelector("#reset");
const squaresText = document.querySelector("#squares-text");
const slider = document.querySelector("#slider");
const boardSize = sketchboard.offsetWidth;

const getColorMode = () => {
    return document.querySelector("input[name='color-mode']:checked").id;
};

slider.addEventListener("input", () => {
    squaresText.textContent = slider.value;
});

const populate = () => {
    sketchboard.style.setProperty("--grid-rows", slider.value);
    for (i = 0; i < slider.value ** 2; i++) {
        const newBox = document.createElement("div");
        newBox.addEventListener("mouseover", () => {
            newBox.classList.add(getColorMode());
        }, {
            once: true
        })
        sketchboard.appendChild(newBox);
    }
};

const dePopulate = () => {
    sketchboard.innerHTML = "";
};

resetButton.addEventListener("click", () => {
    dePopulate();
    populate();
});

populate();