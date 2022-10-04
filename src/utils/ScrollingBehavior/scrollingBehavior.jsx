const disableScrolling = () => {
  const scrollPosition = [window.pageYOffset, window.pageXOffset];
  window.onscroll = () => {
    window.scrollTo(scrollPosition[1], scrollPosition[0]);

    console.log("scroll position", scrollPosition[0]);
  };
};

const enableScrolling = () => {
  window.onscroll = () => {};
};

export { disableScrolling, enableScrolling };
