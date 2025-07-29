window.addEventListener('scroll', function () {
  const logoContainer = document.querySelector('.main-logo');
  if (window.pageYOffset > 100) { // 예시: 100px 스크롤 시
    logoContainer.classList.add('scrolled');
  } else {
    logoContainer.classList.remove('scrolled');
  }
});