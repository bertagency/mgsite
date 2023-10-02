/*---- Simple Attribute based gsap animations ----*/

// Hero Animation

let PageOnLoadHeading = document.querySelector('[animation="heroheading"]');
let contentBottom = document.querySelector('[animation="contentbottom"]');
let bodyTag = document.querySelector("body");
function headingAnimationOnload() {
  let tl = gsap.timeline();

  tl.to(PageOnLoadHeading, {
    opacity: 1,
    x: 0,
    duration: 0.5,
    ease: "ease-out"
  })
    .to(contentBottom, { opacity: 1, y: 0, duration: 0.75, ease: "ease-in" })
    // .set(bodyTag, {
    //   overflow: "visible"
    // });
    .add(() => {
      if (
        parseFloat(
          window.getComputedStyle(audienceModal).getPropertyValue("opacity")
        ) < 0.2
      ) {
        gsap.set(bodyTag, { overflow: "visible" });
      }
    });
}

headingAnimationOnload();

// Testimonial Mask Image Animation
let testimonialImages = document.querySelectorAll('[datamask="testimonial"]');

function imageMaskGrow(image) {
  let tl = gsap.timeline();

  tl.to(image, {
    webkitMaskSize: "100%",
    maskSize: "100%",
    duration: 1.35,
    ease: "ease-out"
  });
}

// Create an Intersection Observer instance
const observerTestimonial = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const imageHeight = entry.target.clientHeight;
      const threshold = imageHeight * 1; // Trigger animation when image is past 50% in viewport

      if (entry.intersectionRatio >= threshold / imageHeight) {
        imageMaskGrow(entry.target);
        observerTestimonial.unobserve(entry.target); // Stop observing once animation is triggered
      }
    });
  },
  { threshold: [0, 0.8, 1] }
); // Observe at 0%, 80%, and 100% thresholds

testimonialImages.forEach((image) => {
  observerTestimonial.observe(image);
});
