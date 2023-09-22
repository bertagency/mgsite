// Menu Animations for the website

document.addEventListener("DOMContentLoaded", function () {
  // Your JavaScript code here
  const globalNav = document.querySelector("[global='nav']");
  const screenWidth = window.innerWidth;
  if (globalNav && screenWidth > 991) {
    const menuHeight = globalNav.querySelector(".nav_main-menu-wrapper");
    const emptyElement = globalNav.querySelector(".empty-space-fill");
    const currentNavColor = window.getComputedStyle(globalNav).backgroundColor;
    const popupmodalAnimationPadding = document.querySelector(
      "[fsmodal='audience-modal']"
    );

    let animationStartThreshold;
    let animationEndThreshold;
    let isScrollingUp = false;
    let lastScrollPosition = 0;
    let isBackgroundWhite = false;

    // Get the current path of the URL
    var currentPath = window.location.pathname;

    // Check if the current path is the homepage ("/")
    if (currentPath === "/") {
      if (globalNav && screenWidth > 991) {
        animationStartThreshold = 0.001;
        animationEndThreshold = 0.2;
      }
    } else {
      if (globalNav && screenWidth > 991) {
        animationStartThreshold = 0.05;
        animationEndThreshold = 0.2;
      }
    }

    function updateMenuAndEmptyHeight() {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollPercentage =
        scrollPosition / (document.documentElement.scrollHeight - windowHeight);

      const percentageWithinAnimation = Math.max(
        0,
        Math.min(
          1,
          (scrollPercentage - animationStartThreshold) /
            (animationEndThreshold - animationStartThreshold)
        )
      );

      if (
        !isBackgroundWhite &&
        (scrollPercentage >= animationStartThreshold ||
          scrollPercentage > animationEndThreshold)
      ) {
        if (typeof gsap !== "undefined") {
          gsap.to(globalNav, {
            backgroundColor: "white",
            ease: "power2.easeInOut",
            duration: 0.5
          });
        }
        isBackgroundWhite = true;
      } else if (
        isBackgroundWhite &&
        scrollPercentage < animationStartThreshold
      ) {
        if (typeof gsap !== "undefined") {
          gsap.to(globalNav, {
            backgroundColor: currentNavColor,
            ease: "power2.easeInOut",
            duration: 0.5
          });
        }
        isBackgroundWhite = false;
      }

      if (typeof gsap !== "undefined") {
        gsap.to(menuHeight, {
          height: `${Math.max(6, 10 - percentageWithinAnimation * 4)}rem`,
          ease: "power2.easeInOut",
          duration: 0.5
        });

        gsap.to(emptyElement, {
          height: "2.75rem",
          ease: "power2.easeInOut",
          duration: 0.5
        });

        if (scrollPercentage > 0.3) {
          isScrollingUp = scrollPosition < lastScrollPosition;
          lastScrollPosition = scrollPosition;

          gsap.to(globalNav, {
            translateY: isScrollingUp ? 0 : -globalNav.clientHeight,
            ease: "power2.easeInOut",
            duration: 1
          });
        }

        // Calculate padding-top value based on scrollPercentage
        const defaultPaddingTop = "11rem";
        const scrolledPaddingTop = "6.9rem";
        const paddingTop =
          scrollPercentage === 0 ? defaultPaddingTop : scrolledPaddingTop;

        // Apply the calculated padding-top value to the popupmodalAnimationPadding element
        if (popupmodalAnimationPadding) {
          popupmodalAnimationPadding.style.paddingTop = paddingTop;
        }
      }
    }

    if (typeof gsap !== "undefined") {
      window.addEventListener("scroll", updateMenuAndEmptyHeight);
    }
  }
});
