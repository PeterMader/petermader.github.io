document.addEventListener('DOMContentLoaded', function () {

  const background = document.querySelector('aside');
  let isDesktop = false;
  const desktopBackgroundSize = getBackgroundImageSize();

  function handleResize () {
    if (isDesktop = window.innerWidth > 680) {
      // desktop layout
      background.style.backgroundPosition = 'right 0';
      background.style.backgroundSize = desktopBackgroundSize * 100 + 'vh';
      handleScroll();
    } else {
      // mobile layout
      background.style.backgroundPosition = 'center 0';
      background.style.backgroundSize = 'contain';
    }
  }

  function handleScroll () {
    if (isDesktop) {
      const imageHeight = window.innerHeight * desktopBackgroundSize;
      const imagePosition = (1 - window.scrollY / window.innerHeight) * (imageHeight - window.innerHeight);
      background.style.backgroundPosition = `right ${imagePosition}px`;
    }
  }

  function getBackgroundImageSize () {
    const backgroundSize = window.getComputedStyle(background).getPropertyValue('background-size');
    const first = backgroundSize.split(' ')[0];
    if (first.slice(-2) === 'px') {
      const height = parseFloat(first.slice(0, -2));
      return height / window.innerHeight;
    } else {
      return 1;
    }
  }

  window.addEventListener('resize', handleResize);
  window.addEventListener('scroll', handleScroll);

  handleResize();
  handleScroll();

});
