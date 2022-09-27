var header = document.getElementById("header");
var mobileMenu = document.getElementById("mobile-menu");
var headrHeight = header.clientHeight;
// Đóng mở mobile menu
mobileMenu.onclick = function () {
  var isClosed = header.clientHeight === headrHeight;
  if (isClosed) {
    header.style.height = "auto";
  } else {
    header.style.height = null;
  }
};

// Tự động đóng khi chọn menu
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for (var i = 0; i < menuItems.length; i++) {
  var menuItem = menuItems[i];

  menuItem.onclick = function (event) {
    var isParentMenu =
      this.nextElementSibling &&
      this.nextElementSibling.classList.contains("subnav");
    if (!isParentMenu) {
      header.style.height = null;
    } else {
      event.preventDefault();
    }
  };
  // menuItem.addEventListener("click", function (event) {
  //   var isParent =
  //     this.nextElementSibling &&
  //     this.nextElementSibling.classList.contains("subnav");

  //   if (!isParent) {
  //     header.style.height = null;
  //   } else {
  //     event.preventDefault()
  //   }
  // });
}
