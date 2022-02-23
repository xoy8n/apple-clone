// 모바일 햄버거 버튼
const selectElement = (element) => document.querySelector(element);

selectElement(".mobile-menu").addEventListener("click", () => {
  selectElement("header").classList.toggle("active");
});
