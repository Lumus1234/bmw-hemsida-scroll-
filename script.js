function myFunction() {
    var dots = document.getElementById("punkter");
    var moreText = document.getElementById("mer");
    var btnText = document.getElementById("läsmer");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Läs mer";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Läs mindre";
      moreText.style.display = "inline";
    }
}