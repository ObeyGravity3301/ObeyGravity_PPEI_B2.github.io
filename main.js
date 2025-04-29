window.onload = function () {
  console.log('main.js loaded'); // Debug log
  let bgm = document.getElementById('bgm');
  let div = document.getElementById('subtitle');
  
  // Wait for DOM to fully load
  setTimeout(() => {
    let height = div.clientHeight;
    console.log(`Subtitle height: ${height}px`); // Debug log
    if (height === 0) {
      console.warn('Subtitle height is 0, forcing visibility');
      div.style.display = 'block';
      height = div.clientHeight;
      console.log(`Recalculated height: ${height}px`);
    }

    let isPaused = false;
    let translateY = height / 1.5
    div.style.transform = `rotateX(80deg) translateY(${translateY}px)`;
    console.log(`Initial transform: rotateX(80deg) translateY(${translateY}px)`); // Debug log
    let reqid = requestAnimationFrame(scroll);

    function scroll() {
      if (!isPaused) {
        bgm.play().catch(e => console.error('BGM play failed:', e)); // Handle autoplay issues
        translateY -= 0.2;
        div.style.transform = `rotateX(90deg) translateY(${translateY}px)`;
        console.log(`Scroll: translateY=${translateY}px`); // Debug log
        if (translateY < -height / 2) {
          console.log('Scroll ended'); // Debug log
          cancelAnimationFrame(reqid);
        } else {
          reqid = requestAnimationFrame(scroll);
        }
      }
    }

    div.addEventListener('mouseenter', function () {
      isPaused = true;
      bgm.pause();
      console.log('Paused: mouseenter'); // Debug log
    });

    div.addEventListener('mouseleave', function () {
      isPaused = false;
      bgm.play().catch(e => console.error('BGM play failed:', e));
      reqid = requestAnimationFrame(scroll);
      console.log('Resumed: mouseleave'); // Debug log
    });

    document.addEventListener('wheel', function (event) {
      if (isPaused) {
        const delta = event.deltaY > 0 ? 20 : -20;
        translateY += delta;
        div.style.transform = `rotateX(90deg) translateY(${translateY}px)`;
        console.log(`Wheel: translateY=${translateY}px, delta=${delta}`); // Debug log
      }
    });
  }, 100); // Delay to ensure DOM readiness
};