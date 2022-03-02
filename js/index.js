window.addEventListener("scroll", (e) => {
  let header = document.querySelector("header");
  let headerHeight = header.offsetHeight;
  let scrollTop = window.scrollY;
  if (scrollTop > headerHeight) {
    header.classList.add("header-elevated");
  } else {
    header.classList.remove("header-elevated");
  }
});
