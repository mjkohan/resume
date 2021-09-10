
function showDetailed(el) {
    var moreText = document.getElementById(el);
    if (moreText.style.display === "none") {
        moreText.style.display = "flex";
    } else {
        moreText.style.display = "none";
    }
}