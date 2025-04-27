document.addEventListener("DOMContentLoaded", () => {
    const messages = document.querySelectorAll(".message");
    const startBtn = document.querySelector(".start-interview-button");
  
    function checkVisibility() {
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
  
      messages.forEach((msg, i) => {
        const rect = msg.getBoundingClientRect();
  
        // 消息进入可视区域时显示
        if (rect.top >= 0 && rect.top <= windowHeight - 100) {
          setTimeout(() => {
            msg.classList.add("visible");
          }, i * 100);
        } else if (rect.bottom < 0 || rect.top > windowHeight) {
          // 消息离开可视区域时隐藏
          msg.classList.remove("visible");
        }
      });
  
      // 滚动到底部时显示按钮
      if (scrollPosition + windowHeight >= documentHeight - 10) {
        startBtn.classList.add("visible");
      } else {
        startBtn.classList.remove("visible");
      }
    }
  
    window.addEventListener("scroll", checkVisibility);
    window.addEventListener("resize", checkVisibility); // 窗口大小变化时重新检查
    checkVisibility();
  });