//This interaction/functionality works if the div structure is followed properly

function createAccordion(
  containerSelector,
  questionSelector,
  answerSelector,
  arrowSelector
) {
  const expands = document.querySelectorAll(containerSelector);

  expands.forEach((el) => {
    let trigger = el.querySelector(questionSelector);
    let content = el.querySelector(answerSelector);
    let arrowExpand = el.querySelector(arrowSelector);

    function openEl() {
      let tl = gsap.timeline();

      if (content.style.height === "auto") {
        // Close the expanded section
        tl.to(content, {
          height: 0,
          duration: 0.5,
          ease: "ease-out",
        }).to(
          arrowExpand,
          {
            rotate: 0,
            duration: 0.5,
            ease: "ease-out",
          },
          0
        );
      } else {
        // Open the collapsed section
        tl.to(content, {
          height: "auto",
          duration: 0.5,
          ease: "ease-in",
        }).to(
          arrowExpand,
          {
            rotate: 180,
            duration: 0.5,
            ease: "ease-in",
          },
          0
        );
      }
    }

    trigger.addEventListener("click", openEl);
  });
}

// Usage example:
createAccordion(
  ".accordion-faq",
  ".accordion-faq-question",
  ".accordion-faq-answer",
  ".arrow-down-chevron"
);

// Usage example:
createAccordion(
  ".expand-section",
  ".expand-trigger",
  ".expand-section--read-more",
  ".arrow-expand"
);

//
$(document).ready(function () {
  // Attach click event handler to elements with the accordion-faq-question class
  $(".accordion-faq-question").click(function () {
    // Toggle the is--white class on the clicked question element
    $(this).toggleClass("is--white");

    // Add or remove the is--white class on the parent accordion-faq element
    $(this).parent(".accordion-faq").toggleClass("is--white");
  });
});
