// ===== GET ELEMENTS FROM DOM =====
let postInput = document.getElementById("postInput");
let counter = document.getElementById("counter");
let postBtn = document.getElementById("postBtn");
let postDisplay = document.getElementById("postDisplay");

// ===== LIVE CHARACTER COUNT =====
postInput.addEventListener("input", function () {
  let count = postInput.value.length;

  // update counter text
  counter.textContent = count + " / 200";

  // add warning style when close to limit
  if (count >= 180) {
    counter.classList.add("warning");
  } else {
    counter.classList.remove("warning");
  }
});

// ===== POST BUTTON FUNCTION =====
postBtn.addEventListener("click", function () {
  let text = postInput.value.trim();

  // prevent empty posts
  if (text !== "") {
    postDisplay.textContent = text;

    // reset input
    postInput.value = "";
    counter.textContent = "0 / 200";
    counter.classList.remove("warning");
  }
});
