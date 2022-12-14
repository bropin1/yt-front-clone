// const checkScrollSpeed = (settings) => {
//   settings = settings || {};
//   let lastPos,
//     newPos,
//     timer,
//     delta,
//     delay = settings.delay || 50;

//     const clear = () =>{
//         lastPos = null;
//         delta = 0;
//     }
// };

// export default checkScrollSpeed;

const checkScrollSpeed = (function (settings) {
  settings = settings || {};

  let lastPos,
    newPos,
    timer,
    delta,
    delay = settings.delay || 50; // in "ms" (higher means lower fidelity )

  function clear() {
    lastPos = null;
    delta = 0;
  }

  clear();

  return function () {
    newPos = window.scrollY;
    if (lastPos != null) {
      // && newPos < maxScroll
      delta = newPos - lastPos;
    }
    lastPos = newPos;

    clearTimeout(timer);
    timer = setTimeout(clear, delay);

    return delta;
  };
})();

export default checkScrollSpeed;
