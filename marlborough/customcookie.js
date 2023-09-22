// Cookie Custom Code for audience


const audienceProfessionNav = document.querySelector('[audience="profession"]');
const audienceLocationNav = document.querySelector('[audience="location"]');
const audienceModal = document.querySelector('[fsmodal="audience-modal"]');
const patternInsightsPost = /\/insights\/.*/;

const searchEnter = document.querySelector('[search="button"]');
const searchIcon = document.querySelector('[search="icon"]');

searchIcon.addEventListener("click", function () {
  searchEnter.click();
});

let audienceModalState = false;

// this is url update logic
let pageUrlMarlborough = window.location.href;

function openAudienceModal() {
  audienceProfessionNav.removeEventListener("click", openAudienceModal);
  audienceLocationNav.removeEventListener("click", openAudienceModal);
  document.body.style.overflow = "hidden";

  if (audienceModalState === false) {
    let tl = gsap.timeline();
    audienceModalState = true;
    tl.set(audienceModal, {
      display: "none",
      opacity: 0
    }).to(audienceModal, {
      display: "block",
      opacity: 1,
      duration: "1",
      ease: "ease-in"
    });
  }
}

function closeAudienceModal() {
  audienceProfessionNav.removeEventListener("click", closeAudienceModal);
  audienceLocationNav.removeEventListener("click", closeAudienceModal);
  audienceProfessionNav.addEventListener("click", openAudienceModal);
  audienceLocationNav.addEventListener("click", openAudienceModal);
  document.body.style.overflow = "visible";

  if (!Cookies.get("userType")) {
    Cookies.set("userType", "individual");
    Cookies.set("userLocation", "uk");
  }

  if (audienceModalState === true) {
    let tl = gsap.timeline();
    audienceModalState = false;
    tl.to(audienceModal, {
      opacity: 0,
      duration: "1",
      ease: "ease-in"
    }).to(audienceModal, {
      display: "none"
    });
  }
}

const modalButtonAudience = document.querySelector('[audience="button"]');

// let clickCount = 0;

if (audienceModalState === false) {
  audienceProfessionNav.addEventListener("click", openAudienceModal);
  audienceLocationNav.addEventListener("click", openAudienceModal);
}

modalButtonAudience.addEventListener("click", closeAudienceModal);
if (audienceModalState === true) {
  audienceProfessionNav.addEventListener("click", closeAudienceModal);
  audienceLocationNav.addEventListener("click", closeAudienceModal);
}

// simple code for Dropdowns

let locationdrawerStatus = false;
let professiondrawerStatus = false;
const locationDropdown = document.querySelector('[location="dropdown"]');
const locationDrawer = document.querySelector('[location="drawer"]');

const professionDropdown = document.querySelector('[profession="dropdown"]');
const professionDrawer = document.querySelector('[profession="drawer"]');

function closeDropdownLocationDrawer() {
  let tl = gsap.timeline();
  if (locationdrawerStatus === true) {
    tl.to(locationDrawer, {
      height: 0,
      duration: ".5",
      ease: "ease-out"
    });
  }
  locationdrawerStatus = false;
  locationDropdown.addEventListener("click", openDropdownLocationDrawer);
  locationDropdown.removeEventListener("click", closeDropdownLocationDrawer);
}

function openDropdownLocationDrawer() {
  let tl = gsap.timeline();
  if (locationdrawerStatus === false) {
    tl.set(locationDrawer, {
      height: 0
    }).to(locationDrawer, {
      height: "auto",
      duration: ".5",
      ease: "ease-in"
    });
  }
  locationdrawerStatus = true;
  locationDropdown.removeEventListener("click", openDropdownLocationDrawer);
  locationDropdown.addEventListener("click", closeDropdownLocationDrawer);
}

if (audienceModalState === false) {
  locationDropdown.addEventListener("click", openDropdownLocationDrawer);
}
if (audienceModalState === true) {
  locationDropdown.addEventListener("click", closeDropdownLocationDrawer);
}

function closeDropdownProfessionDrawer() {
  let tl = gsap.timeline();
  if (professiondrawerStatus === true) {
    tl.to(professionDrawer, {
      height: 0,
      duration: ".5",
      ease: "ease-out"
    });
  }
  professiondrawerStatus = false;

  professionDropdown.addEventListener("click", openDropdownProfessionDrawer);
  professionDropdown.removeEventListener(
    "click",
    closeDropdownProfessionDrawer
  );
}

function openDropdownProfessionDrawer() {
  let tl = gsap.timeline();
  if (professiondrawerStatus === false) {
    tl.set(professionDrawer, {
      height: 0
    }).to(professionDrawer, {
      height: "auto",
      duration: ".5",
      ease: "ease-in"
    });
  }
  professiondrawerStatus = true;
  professionDropdown.removeEventListener("click", openDropdownProfessionDrawer);
  professionDropdown.addEventListener("click", closeDropdownProfessionDrawer);
}

if (audienceModalState === false) {
  professionDropdown.addEventListener("click", openDropdownProfessionDrawer);
}
if (audienceModalState === true) {
  professionDropdown.addEventListener("click", closeDropdownProfessionDrawer);
}

// Confirm User Type and Store Cookie
$(".button_user-type").on("click", function () {
  let currentUserType = $(this).attr("user-type");
  Cookies.set("userType", currentUserType, { expires: 365 });

  $(".button_user-type").removeClass("active");
  $(this).addClass("active");
});

// Confirm User Location and Store Cookie
$(".button_user-location").on("click", function () {
  let currentUserLocation = $(this).attr("user-location");
  Cookies.set("userLocation", currentUserLocation, { expires: 365 });
  $(".button_user-location").removeClass("active");
  $(this).addClass("active");
});

// Check a User Type cookie
function checkUser(userType) {
  if (Cookies.get("userType") === userType) {
    //alert("Alert!! You are a " + userType);
    $(".button_user-type").removeClass("active");

    var myType = userType;
    $("a[user-type = " + myType + "]").addClass("active");
  }
}
checkUser("intermediary");
checkUser("individual");
checkUser("institutional");

//Check Location Cookie
function checkLocation(userLocation) {
  if (Cookies.get("userLocation") === userLocation) {
    //alert("Alert!! You are a " + userLocation);
    $(".button_user-location").removeClass("active");

    var myType = userLocation;
    $("a[user-location = " + myType + "]").addClass("active");
  }
}

const locationText = document.querySelector('[locationtext="realtime"]');
const professionText = document.querySelector('[profession="realtime"]');

function UpdateLocationOnNav() {
  if (Cookies.get("userLocation") === "uk") {
    //alert("Alert!! You are a " + userLocation);
    audienceLocationNav.textContent = "United Kingdom";
    locationText.textContent = "United Kingdom";
  }
  if (Cookies.get("userLocation") === "eu") {
    //alert("Alert!! You are a " + userLocation);
    audienceLocationNav.textContent = "European Union";
    locationText.textContent = "European Union";
  }
  if (Cookies.get("userLocation") === "row") {
    //alert("Alert!! You are a " + userLocation);
    audienceLocationNav.textContent = "Rest of the world";
    locationText.textContent = "Rest of the world";
  }
}

function UpdateProfessionOnNav() {
  if (Cookies.get("userType") === "individual") {
    //alert("Alert!! You are a " + userLocation);
    audienceProfessionNav.textContent = "Individual";
    professionText.textContent = "Individual Investor";
  }
  if (Cookies.get("userType") === "intermediary") {
    //alert("Alert!! You are a " + userLocation);
    audienceProfessionNav.textContent = "Intermediary";
    professionText.textContent = "Intermediary Investor";
  }
  if (Cookies.get("userType") === "institutional") {
    //alert("Alert!! You are a " + userLocation);
    audienceProfessionNav.textContent = "Institutional";
    professionText.textContent = "Institutional Investor";
  }
}

checkLocation("uk");
checkLocation("eu");
checkLocation("row");

$(".button_user-location").on("click", UpdateLocationOnNav);

$(".button_user-type").on("click", UpdateProfessionOnNav);

window.onload = function () {
  UpdateLocationOnNav();
  UpdateProfessionOnNav();
};

let selectPageAudience = document.querySelector("[page-audience]");
let getPageAudience = selectPageAudience.getAttribute("page-audience");
let userSelectedText = document.querySelector('[user="selected-text"]');
let userPageText = document.querySelector('[user="page-text"]');

// Auto open Modal and set cookie type when it doesn't exist
if (!Cookies.get("userType") && getPageAudience !== "generic") {
  // console.log("Hi, I am condition 1");
  openAudienceModal();
  // modalButtonAudience.textContent = "Heyyy";

  if (getPageAudience === "individual") {
    Cookies.set("userType", "individual");
  }
  if (getPageAudience === "intermediary") {
    Cookies.set("userType", "intermediary");
  }
  if (getPageAudience === "institutional") {
    Cookies.set("userType", "institutional");
  }

  if (patternInsightsPost.test(pageUrlMarlborough)) {
    console.log("Heyyy!");
  }

  if (
    pageUrlMarlborough.includes("/fund-centre") ||
    pageUrlMarlborough.includes("/managed-portfolios")
  ) {
    if (pageUrlMarlborough.includes("MarlboroughIndividual")) {
      Cookies.set("userType", "individual");
    }
    if (pageUrlMarlborough.includes("MarlboroughIntermediary")) {
      Cookies.set("userType", "intermediary");
    }
    if (pageUrlMarlborough.includes("MarlboroughInst")) {
      Cookies.set("userType", "institutional");
    }
  }

  // Funds Center URL
  modalButtonAudience.addEventListener("click", function () {});

  /* Copy Needed here when use is visiting website for the first time*/
}

function waitForCondition() {
  return new Promise((resolve) => {
    function checkCondition() {
      if (Cookies.get("userType") === getPageAudience) {
        resolve();
      } else {
        setTimeout(checkCondition, 100); // Check again after a short delay
      }
    }

    checkCondition(); // Start checking the condition
  });
}

function waitForConditionFundsCenter(state) {
  return new Promise((resolve) => {
    function checkCondition() {
      if (Cookies.get("userType") === state) {
        resolve();
      } else {
        setTimeout(checkCondition, 100); // Check again after a short delay
      }
    }

    checkCondition(); // Start checking the condition
  });
}

// check for cookies function

let checkPopState = function () {
  if (getPageAudience !== "generic") {
    if (getPageAudience !== Cookies.get("userType") || !Cookies.get("userType"))
      if (
        getPageAudience !== "insights" &&
        !patternInsightsPost.test(pageUrlMarlborough)
      ) {
        {
          openAudienceModal();
          let parentText = userSelectedText.parentNode;
          parentText.style.display = "block";
          userSelectedText.textContent = Cookies.get("userType");
          userPageText.textContent = getPageAudience;
          modalButtonAudience.style.cssText =
            "background: #9e9e9e; border-color: #9e9e9e; pointer-events: none;";

          async function checkforconditionmet() {
            await waitForCondition();

            // Condition is met, execute the code block
            modalButtonAudience.style.cssText =
              "background: #88f469; border-color: #88f469; pointer-events: auto;";
            modalButtonAudience.addEventListener("click", function () {
              parentText.style.display = "none";
            });
          }

          // Call the main async function to start the process
          checkforconditionmet();

          // Active state of the button write here
        }
      }

    if (getPageAudience === "insights") {
      closeAudienceModal();
    }
  }
};

// if (pageUrlMarlborough.includes("/insights")) {
//   // console.log("find-filter");
// }

if (
  pageUrlMarlborough.includes("/fund-centre") ||
  pageUrlMarlborough.includes("/managed-portfolios")
) {
  // Code here for the case when the URL contains "/fund-centre"
  if (pageUrlMarlborough.includes("MarlboroughIndividual")) {
    if (Cookies.get("userType") !== "individual") {
      openAudienceModal();
      let parentText = userSelectedText.parentNode;
      parentText.style.display = "block";
      userSelectedText.textContent = Cookies.get("userType");
      userPageText.textContent = "Individual";
      // modalButtonAudience.addEventListener("click", function () {
      //   parentText.style.display = "none";
      // });
      modalButtonAudience.style.cssText =
        "background: #9e9e9e; border-color: #9e9e9e; pointer-events: none;";

      async function checkforconditionmet() {
        await waitForConditionFundsCenter("individual");

        // Condition is met, execute the code block
        modalButtonAudience.style.cssText =
          "background: #88f469; border-color: #88f469; pointer-events: auto;";
        modalButtonAudience.addEventListener("click", function () {
          parentText.style.display = "none";
        });
      }

      // Call the main async function to start the process
      checkforconditionmet();
    }
  }
  if (pageUrlMarlborough.includes("MarlboroughIntermediary")) {
    if (Cookies.get("userType") !== "intermediary") {
      openAudienceModal();
      let parentText = userSelectedText.parentNode;
      parentText.style.display = "block";
      userSelectedText.textContent = Cookies.get("userType");
      userPageText.textContent = "Intermediary";
      // modalButtonAudience.addEventListener("click", function () {
      //   parentText.style.display = "none";
      // });

      modalButtonAudience.style.cssText =
        "background: #9e9e9e; border-color: #9e9e9e; pointer-events: none;";

      async function checkforconditionmet() {
        await waitForConditionFundsCenter("intermediary");

        // Condition is met, execute the code block
        modalButtonAudience.style.cssText =
          "background: #88f469; border-color: #88f469; pointer-events: auto;";
        modalButtonAudience.addEventListener("click", function () {
          parentText.style.display = "none";
        });
      }

      // Call the main async function to start the process
      checkforconditionmet();
    }
  }
  if (pageUrlMarlborough.includes("MarlboroughInst")) {
    if (Cookies.get("userType") !== "institutional") {
      openAudienceModal();
      let parentText = userSelectedText.parentNode;
      parentText.style.display = "block";
      userSelectedText.textContent = Cookies.get("userType");
      userPageText.textContent = "Institutional";
      // modalButtonAudience.addEventListener("click", function () {
      //   parentText.style.display = "none";
      // });
      modalButtonAudience.style.cssText =
        "background: #9e9e9e; border-color: #9e9e9e; pointer-events: none;";

      async function checkforconditionmet() {
        await waitForConditionFundsCenter("institutional");

        // Condition is met, execute the code block
        modalButtonAudience.style.cssText =
          "background: #88f469; border-color: #88f469; pointer-events: auto;";
        modalButtonAudience.addEventListener("click", function () {
          parentText.style.display = "none";
        });
      }

      // Call the main async function to start the process
      checkforconditionmet();
    }
  }
} else {
  // Code here for the case when the URL does not contain "/fund-centre"
  checkPopState();
}

// Function to update the profession attribute and the URL
function updateProfessionAndURL() {
  let selectUrltoUpdate = document.querySelectorAll("[update='url']");
  let userType;
  if (Cookies.get("userType")) {
    userType = Cookies.get("userType");
  }
  if (!Cookies.get("userType")) {
    userType = "individual";
  }
  // Define a mapping of keywords and their corresponding usertypes
  const keywordMap = {
    individual: "individuals",
    intermediary: "intermediaries",
    institutional: "institutional"
  };

  // Loop through the selected elements and update the profession attribute and the URL
  selectUrltoUpdate.forEach((element) => {
    const currentUrl = new URL(element.href);
    const currentPathname = currentUrl.pathname;

    // Extract the current keyword from the URL
    const currentKeyword = Object.keys(keywordMap).find((keyword) =>
      currentPathname.includes(keywordMap[keyword])
    );

    if (currentKeyword) {
      // Replace the current keyword with the new keyword based on userType
      const newKeyword = keywordMap[userType];
      const newUrl = currentPathname.replace(
        keywordMap[currentKeyword],
        newKeyword
      );

      // Update the URL and profession attribute based on userType
      element.href = currentUrl.origin + newUrl;
      element.setAttribute("profession", userType);
    }
  });
}

// Run the updateProfessionAndURL function initially to set the profession attribute and the URL
updateProfessionAndURL();

modalButtonAudience.addEventListener("click", updateProfessionAndURL);



// Test if the URL matches the patternInsightsPost
if (patternInsightsPost.test(pageUrlMarlborough)) {
  document
    .querySelectorAll(".w-condition-invisible")
    .forEach((e) => e.remove());
  // Call the function to execute the logic
  if (Cookies.get("userType")) {
    checkinsightspagelogic();
  } else {
    // console.log("Cookie is absent");
  }
}

function checkinsightspagelogic() {
  let currentCookie = Cookies.get("userType");
  let userAudiencesPresentOnPage = document.querySelectorAll("[page-audience]");
  let currentAudienceNeeded = null; // Initialize missingvariable to null

  // Check if there are no user audiences present on the page
  if (userAudiencesPresentOnPage.length === 0) {
    return; // No action needed, just return
  }

  for (let i = 0; i < userAudiencesPresentOnPage.length; i++) {
    let audienceValue = userAudiencesPresentOnPage[i].getAttribute(
      "page-audience"
    );
    if (audienceValue === currentCookie) {
      return; // Exit the function as soon as a match is found
    }
    currentAudienceNeeded = audienceValue; // Update missingvariable if no match is found
  }

  console.log("openpopup"); // Log "openpopup" only if no match is found
  openAudienceModal();
  let parentText = userSelectedText.parentNode;
  parentText.style.display = "block";
  userSelectedText.textContent = Cookies.get("userType");
  userPageText.textContent = currentAudienceNeeded; // Set missingvariable where the loop broke
  modalButtonAudience.style.cssText =
    "background: #9e9e9e; border-color: #9e9e9e; pointer-events: none;";

  async function checkforconditionmet() {
    await waitForConditionFundsCenter(currentAudienceNeeded);

    // Condition is met, execute the code block
    modalButtonAudience.style.cssText =
      "background: #88f469; border-color: #88f469; pointer-events: auto;";
    modalButtonAudience.addEventListener("click", function () {
      parentText.style.display = "none";
    });
  }

  // Call the main async function to start the process
  checkforconditionmet();
}
