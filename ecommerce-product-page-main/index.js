const bar = document.getElementById("bar");
const mobileNav = document.querySelector(".mobileNav");
const closeIcon = document.querySelector(".closeIcon");
const section = document.querySelector("section");
const mainImage = document.querySelector(".product1");
const products1 = document.getElementById("products1");
const products2 = document.getElementById("products2");
const products3 = document.getElementById("products3");
const products4 = document.getElementById("products4");
const minusSymbol = document.querySelector(".minus");
const plusSymbol = document.getElementById("plus");
const zero = document.querySelector(".zero");
const button = document.querySelector(".button");
const notification = document.querySelector(".notification");
const buttonText = document.querySelector(".buttonText");
const noOfItems = document.querySelector(".noOfItems");
const result = document.querySelector(".result");
const texted = document.querySelector(".texted");
const deleteIcon = document.querySelector(".deleteIcon");
const checkout = document.querySelector(".checkout");
const cart = document.querySelector(".cart");
const belowAvatar = document.querySelector(".belowAvatar");
let count = 0;
bar.addEventListener("click", () => {
  mobileNav.style.display = "block";
  section.style.display = "block";
});
closeIcon.addEventListener("click", () => {
  mobileNav.style.display = "none";
  section.style.display = "none";
});
products1.addEventListener("click", () => {
  mainImage.src = "images/image-product-1-thumbnail.jpg";
});
products2.addEventListener("click", () => {
  mainImage.src = "images/image-product-2-thumbnail.jpg";
});
products3.addEventListener("click", () => {
  mainImage.src = "images/image-product-3-thumbnail.jpg";
});
products4.addEventListener("click", () => {
  mainImage.src = "images/image-product-4-thumbnail.jpg";
});
plusSymbol.addEventListener("click", () => {
  count += 1;
  zero.textContent = count;
});
minusSymbol.addEventListener("click", () => {
  count -= 1;
  zero.textContent = count;
});
button.addEventListener("click", () => {
  notification.textContent = count;
  noOfItems.textContent = count;
  let finalResult = count * 125;
  result.textContent = "$" + finalResult;
});
deleteIcon.addEventListener("click", () => {
  texted.remove();
  checkout.remove();
});
cart.addEventListener("click", () => {
  belowAvatar.style.display = "block";
  belowAvatar.focus();
  if (count == 0) {
    texted.textContent = "your cart is empty";
    checkout.remove();
  }
});
checkout.addEventListener("click", () => {
  belowAvatar.style.display = "none";
});
