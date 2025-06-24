//for html pages loded
document.addEventListener("DOMContentLoaded", () => {
  //for input
  const textInput = document.getElementById("text-input");

  //for font style drop down
  const fontStyleSelect = document.getElementById("font-style");

  //for drop down value changes
  fontStyleSelect.addEventListener("change", function () {
    const selectedStyle = fontStyleSelect.value;

    textInput.style.fontStyle = "normal";
    textInput.style.fontWeight = "normal";

    if (selectedStyle === "italic") {
      textInput.style.fontStyle = "italic";
    } else if (selectedStyle === "bold") {
      textInput.style.fontStyle = "bold";
    } else if (selectedStyle === "italic-bold") {
      textInput.style.fontStyle = "italic";
      textInput.style.fontWeight = "bold";
    }
  });
});
