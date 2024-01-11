// Cookie Custom Code for audience
const audienceProfessionNav = document.querySelector('[audience="profession"]');
const audienceLocationNav = document.querySelector('[audience="location"]');
const audienceModal = document.querySelector('[fsmodal="audience-modal"]');
const patternInsightsPost = /\/insights\/.*/;

const searchEnter = document.querySelector('[search="button"]');
const searchIcon = document.querySelector('[search="icon"]');
const buttonAlternate = document.querySelector("[button='alternate']");
const modalButtonAudience = document.querySelector('[audience="button"]');
const buttonGreenAlternate = document.querySelector(
  '[audience="buttonalternate"]'
);

const locationText = document.querySelector('[locationtext="realtime"]');
const professionText = document.querySelector('[profession="realtime"]');

let selectPageAudience = document.querySelector("[page-audience]");
let getPageAudience = selectPageAudience.getAttribute("page-audience");
let userSelectedText = document.querySelector('[user="selected-text"]');
let userPageText = document.querySelector('[user="page-text"]');

let audienceModalState = false;

let pageUrlMarlborough = window.location.href; // codewise variables

let personLandedUserType = Cookies.get("userType");

if (
  !pageUrlMarlborough.includes("/fund-centre") &&
  !pageUrlMarlborough.includes("/managed-portfolios")
) {
  if (!personLandedUserType) {
    cookieset("individual");
    personLandedUserType = "individual";
  }
}

if (Cookies.get("userType")) {
  updateProfessionAndURL();
  UpdateLocationOnNav();
  UpdateProfessionOnNav();
}

// Code for Search when clicked
searchIcon.addEventListener("click", function () {
  searchEnter.click();
});

function openAudienceModal() {
  audienceProfessionNav.removeEventListener("click", openAudienceModal);
  audienceLocationNav.removeEventListener("click", openAudienceModal);
  document.body.style.overflow = "hidden";

  if (audienceModalState === false) {
    let tl = gsap.timeline();
    audienceModalState = true;
    tl.set(audienceModal, {
      display: "none",
      opacity: 0,
    }).to(audienceModal, {
      display: "block",
      opacity: 1,
      duration: "1",
      ease: "ease-in",
    });
  }
}

function genericPageSimpleClick() {
  $(".button_user-type").removeClass("active");
  let myType = personLandedUserType;
  $("a[user-type = " + myType + "]").addClass("active");

  $(".button_user-type").on("click", function () {
    let currentUserType = $(this).attr("user-type");
    professionText.textContent = `${capitalizeFirstLetter(
      currentUserType
    )} Investor`;
    $(".button_user-type").removeClass("active");
    modalButtonAudience.textContent = `Proceed as ${capitalizeFirstLetter(
      currentUserType
    )} User`;
    modalButtonAudience.addEventListener("click", function () {
      cookieset(currentUserType);
      updateProfessionAndURL();
      UpdateLocationOnNav();
      UpdateProfessionOnNav();
      updateFundsPageLinkonHomepageOnChange(currentUserType);
    });

    $(this).addClass("active");
  });
}

function genericPageSimpleClickInsights() {
  $(".button_user-type").removeClass("active");
  let myType = personLandedUserType;
  $("a[user-type = " + myType + "]").addClass("active");

  $(".button_user-type").on("click", function () {
    let currentUserType = $(this).attr("user-type");
    professionText.textContent = `${capitalizeFirstLetter(
      currentUserType
    )} Investor`;
    $(".button_user-type").removeClass("active");
    modalButtonAudience.textContent = `Proceed as ${capitalizeFirstLetter(
      currentUserType
    )} User`;
    modalButtonAudience.addEventListener("click", function () {
      cookieset(currentUserType);
      updateProfessionAndURL();
      UpdateLocationOnNav();
      UpdateProfessionOnNav();
    });

    $(this).addClass("active");
  });
}

function simpleUpdateThings() {
  professionText.textContent = `${capitalizeFirstLetter(
    personLandedUserType
  )} Investor`;
  modalButtonAudience.textContent = `Proceed as ${capitalizeFirstLetter(
    personLandedUserType
  )} User`;
  checkUser(personLandedUserType);
  if (getPageAudience === "generic") {
    genericPageSimpleClick();
  }
  if (getPageAudience === "insights") {
    genericPageSimpleClickInsights();
  }

  if (getPageAudience !== "generic" && getPageAudience !== "insights") {
    if (
      !pageUrlMarlborough.includes("/fund-centre") ||
      !pageUrlMarlborough.includes("/managed-portfolios")
    ) {
      whenChangeIsRequiredButtonCLick();
    }
  }
}

audienceProfessionNav.addEventListener("click", simpleUpdateThings);

// Controls HOW the modal Closes
function closeAudienceModal() {
  audienceProfessionNav.removeEventListener("click", closeAudienceModal);
  audienceLocationNav.removeEventListener("click", closeAudienceModal);
  audienceProfessionNav.addEventListener("click", openAudienceModal);
  audienceLocationNav.addEventListener("click", openAudienceModal);
  document.body.style.overflow = "visible";
  let parentTextBox = document.querySelector('[user-warning="text"]');
  parentTextBox.style.opacity = "0";

  if (!personLandedUserType) {
    Cookies.set("userType", "individual");
    Cookies.set("userLocation", "uk");
  }

  if (audienceModalState === true) {
    let tl = gsap.timeline();
    audienceModalState = false;
    tl.to(audienceModal, {
      opacity: 0,
      duration: "1",
      ease: "ease-in",
    }).to(audienceModal, {
      display: "none",
    });
  }
}

// Adding and Removing event listeners to open and close modal
if (audienceModalState === false) {
  audienceProfessionNav.addEventListener("click", openAudienceModal);
  audienceLocationNav.addEventListener("click", openAudienceModal);
}

if (audienceModalState === true) {
  audienceProfessionNav.addEventListener("click", closeAudienceModal);
  audienceLocationNav.addEventListener("click", closeAudienceModal);
}

// This closes the modal
// modalButtonAudience.addEventListener("click", closeAudienceModal);

modalButtonAudience.addEventListener("click", function () {
  closeAudienceModal();
  UpdateProfessionOnNav();
  UpdateLocationOnNav();
});

// Selecting Dropdowns or Select Menu

let locationdrawerStatus = false;
let professiondrawerStatus = false;

const locationDropdown = document.querySelector('[location="dropdown"]');
const locationDrawer = document.querySelector('[location="drawer"]');
const professionDropdown = document.querySelector('[profession="dropdown"]');
const professionDrawer = document.querySelector('[profession="drawer"]');

// Controls the Menu opening Location
function openDropdownLocationDrawer() {
  let tl = gsap.timeline();
  if (locationdrawerStatus === false) {
    tl.set(locationDrawer, {
      height: 0,
    }).to(locationDrawer, {
      height: "auto",
      duration: ".5",
      ease: "ease-in",
    });
  }
  locationdrawerStatus = true;
  locationDropdown.removeEventListener("click", openDropdownLocationDrawer);
  locationDropdown.addEventListener("click", closeDropdownLocationDrawer);
}

// Controls the Location List closing
function closeDropdownLocationDrawer() {
  let tl = gsap.timeline();
  if (locationdrawerStatus === true) {
    tl.to(locationDrawer, {
      height: 0,
      duration: ".5",
      ease: "ease-out",
    });
  }
  locationdrawerStatus = false;
  locationDropdown.addEventListener("click", openDropdownLocationDrawer);
  locationDropdown.removeEventListener("click", closeDropdownLocationDrawer);
}

// Adding event listeners on location state
if (audienceModalState === false) {
  locationDropdown.addEventListener("click", openDropdownLocationDrawer);
}

if (audienceModalState === true) {
  locationDropdown.addEventListener("click", closeDropdownLocationDrawer);
}

// Controls the Menu Closing Profession
function closeDropdownProfessionDrawer() {
  let tl = gsap.timeline();
  if (professiondrawerStatus === true) {
    tl.to(professionDrawer, {
      height: 0,
      duration: ".5",
      ease: "ease-out",
    });
  }
  professiondrawerStatus = false;

  professionDropdown.addEventListener("click", openDropdownProfessionDrawer);
  professionDropdown.removeEventListener(
    "click",
    closeDropdownProfessionDrawer
  );
}

// Controls the Menu opening Profession
function openDropdownProfessionDrawer() {
  let tl = gsap.timeline();
  if (professiondrawerStatus === false) {
    tl.set(professionDrawer, {
      height: 0,
    }).to(professionDrawer, {
      height: "auto",
      duration: ".5",
      ease: "ease-in",
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

let newUpdatedTemporarySelection = null;

// Confirming usertype and set the cookie when clicked. (Wrong implementation)

function whenChangeIsRequiredButtonCLick() {
  $(".button_user-type").on("click", function () {
    let currentUserType = $(this).attr("user-type");
    professionText.textContent = `${capitalizeFirstLetter(
      currentUserType
    )} Investor`;
    newUpdatedTemporarySelection = $(this).attr("user-type");
    $(".button_user-type").removeClass("active");
    if (newUpdatedTemporarySelection) {
      thirdbuttonLogic();
    }
    $(this).addClass("active");
    return newUpdatedTemporarySelection;
  });
}

// Confirm User Location and Store Cookie
$(".button_user-location").on("click", function () {
  let currentUserLocation = $(this).attr("user-location");
  Cookies.set("userLocation", currentUserLocation, { expires: 365 });
  $(".button_user-location").removeClass("active");
  $(this).addClass("active");
});

// Check a User Type cookie ( Need to change this as well)
function checkUser(userType) {
  // if (Cookies.get("userType") === userType) {
  if (getPageAudience === userType) {
    //alert("Alert!! You are a " + userType);
    $(".button_user-type").removeClass("active");
    let myType = userType;
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

checkLocation("uk");
checkLocation("eu");
checkLocation("row");

// Change this
function UpdateLocationOnNav() {
  if (Cookies.get("userLocation") === "uk") {
    audienceLocationNav.textContent = "United Kingdom";
    locationText.textContent = "United Kingdom";
  }
  if (Cookies.get("userLocation") === "eu") {
    audienceLocationNav.textContent = "European Union";
    locationText.textContent = "European Union";
  }
  if (Cookies.get("userLocation") === "row") {
    audienceLocationNav.textContent = "Rest of the world";
    locationText.textContent = "Rest of the world";
  }
}

// console.log(personLandedUserType);

function UpdateProfessionOnNav() {
  if (Cookies.get("userType") === "individual") {
    audienceProfessionNav.textContent = "Individual";
  }
  if (Cookies.get("userType") === "intermediary") {
    audienceProfessionNav.textContent = "Intermediary";
  }
  if (Cookies.get("userType") === "institutional") {
    audienceProfessionNav.textContent = "Institutional";
  }
}

// $(".button_user-location").on("click", UpdateLocationOnNav);
// $(".button_user-type").on("click", UpdateProfessionOnNav);

window.onload = function () {
  UpdateLocationOnNav();
  UpdateProfessionOnNav();
};

function cookieset(ab) {
  Cookies.set("userType", ab);
}

// This code it for changing the default user
function fundsManagerPortfolios(personLandedUserTypeCurrent) {
  $(".button_user-type").removeClass("active");
  let myType = personLandedUserTypeCurrent;
  $("a[user-type = " + myType + "]").addClass("active");
  // console.debug("Function Trigger");
  professionText.textContent = `${capitalizeFirstLetter(
    personLandedUserTypeCurrent
  )} Investor`;
  modalButtonAudience.addEventListener("click", function () {
    cookieset(personLandedUserTypeCurrent);
    updateProfessionAndURL();
    UpdateLocationOnNav();
    UpdateProfessionOnNav();
    updateFundsPageLinkonHomepageOnChange(personLandedUserTypeCurrent);
  });
  modalButtonAudience.textContent = `Proceed as ${capitalizeFirstLetter(
    personLandedUserTypeCurrent
  )} User`;
  //
  $(".button_user-type").on("click", function () {
    let currentUserType = $(this).attr("user-type");
    professionText.textContent = `${capitalizeFirstLetter(
      currentUserType
    )} Investor`;

    if (personLandedUserTypeCurrent === currentUserType) {
      modalButtonAudience.style.display = "block";
    } else {
      modalButtonAudience.style.display = "none";
    }
    $(".button_user-type").removeClass("active");
    modalButtonAudience.textContent = `Proceed as ${capitalizeFirstLetter(
      currentUserType
    )} User`;
    modalButtonAudience.addEventListener("click", function () {
      cookieset(currentUserType);
      updateProfessionAndURL();
      UpdateLocationOnNav();
      UpdateProfessionOnNav();
      updateFundsPageLinkonHomepageOnChange(currentUserType);
    });

    $(this).addClass("active");
  });
}

// Auto open Modal and set cookie type when it doesn't exist
if (!Cookies.get("userType") && getPageAudience !== "generic") {
  openAudienceModal();
  if (getPageAudience) {
    if (getPageAudience === "individual") {
      cookieset("individual");
    }
    if (getPageAudience === "intermediary") {
      cookieset("intermediary");
    }
    if (getPageAudience === "institutional") {
      cookieset("institutional");
    }
  }

  // if (patternInsightsPost.test(pageUrlMarlborough)) {
  // }

  if (
    pageUrlMarlborough.includes("/fund-centre") ||
    pageUrlMarlborough.includes("/managed-portfolios")
  ) {
    if (pageUrlMarlborough.includes("MarlboroughIndividual")) {
      // cookieset("individual");

      // console.debug("HelloW I am Individal Page");
      fundsManagerPortfolios("individual");
    }
    if (pageUrlMarlborough.includes("MarlboroughIntermediary")) {
      // cookieset("intermediary");
      // console.debug("HelloW I am Intermediary Page");
      fundsManagerPortfolios("intermediary");
    }
    if (pageUrlMarlborough.includes("MarlboroughInst")) {
      // cookieset("institutional");
      fundsManagerPortfolios("institutional");
    }
  }
}

function linkUpdateDefault(variable, redirect) {
  const keywordMap = {
    individual: "individuals",
    intermediary: "intermediaries",
    institutional: "institutional",
  };

  // Extract the current URL of buttonAlternate
  const currentUrl = new URL(variable.href);
  const currentPathname = currentUrl.pathname;

  // Identify any of the keywords present in the URL
  const currentKeyword = Object.values(keywordMap).find((keyword) =>
    currentPathname.includes(keyword)
  );

  // If a keyword is found in the URL, replace it with the one based on the userType
  if (currentKeyword) {
    const newKeyword = keywordMap[redirect];
    const newUrl = currentPathname.replace(currentKeyword, newKeyword);

    // Update the href of buttonAlternate
    variable.href = currentUrl.origin + newUrl;
  }
}

// // For funds Page Only

let dataSiblingValue;
let LinkfinalDefault;
let getAllTheSiblings;
let fundsThirdButtonGreenAlternateAudience;
let buttonFundButtonLinkThird;

function linkUpdateFundsDefault(currentLink) {
  // Ensure the button is initially visible
  buttonAlternate.style.display = "block";

  // Set the button text
  buttonAlternate.textContent = `Show me ${capitalizeFirstLetter(
    personLandedUserType
  )} version`;

  // Retrieve data-sibling value
  dataSiblingValue = currentLink[0].getAttribute("data-sibling");
  // Find all elements with the matching data-sibling value
  getAllTheSiblings = document.querySelectorAll(
    `[data-sibling='${dataSiblingValue}']`
  );
  // Loop through all siblings and check data-audience attribute
  getAllTheSiblings.forEach(function (element) {
    if (element.getAttribute("data-audience") === personLandedUserType) {
      LinkfinalDefault = element.getAttribute("href");
    }
  });

  // Check if a matching link was found
  if (LinkfinalDefault) {
    // Set the href attribute if a link is found
    buttonAlternate.href = LinkfinalDefault;
  } else {
    // Hide the button if no link is found
    buttonAlternate.style.display = "none";
  }
}

function findThirdButtonFunds() {
  let arrayAudiencetype = ["individual", "intermediary", "institutional"];
  let removedCurrentFirst = arrayAudiencetype.filter(
    (type) => type !== personLandedUserType
  );
  fundsThirdButtonGreenAlternateAudience = removedCurrentFirst.filter(
    (type) => type !== getPageAudience
  );

  let currentLinksForThird = document.querySelectorAll(
    `[data-sibling='${dataSiblingValue}'][data-audience="${fundsThirdButtonGreenAlternateAudience[0]}"]`
  );

  buttonFundButtonLinkThird = currentLinksForThird[0].href;
}

function alternateLinkOpen() {
  // Get the userType from the cookie

  // If userType is undefined, hide the button and exit the function
  if (
    getPageAudience === personLandedUserType ||
    getPageAudience === "generic"
  ) {
    buttonAlternate.style.display = "none";
    return;
  }

  linkUpdateDefault(buttonAlternate, personLandedUserType);
  // Display the buttonAlternate and set its text content
  buttonAlternate.style.display = "block";
  buttonAlternate.textContent = `Show me ${capitalizeFirstLetter(
    personLandedUserType
  )} version`;
  buttonAlternate.addEventListener("click", function () {
    cookieset(personLandedUserType);
  });
}

// Slicing Function
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function resuablefunctioninside() {
  userSelectedText.textContent = personLandedUserType;
  userPageText.textContent = getPageAudience;
  modalButtonAudience.textContent = `Proceed as ${capitalizeFirstLetter(
    getPageAudience
  )} User`;
  professionText.textContent = `${capitalizeFirstLetter(
    getPageAudience
  )} Investor`;

  modalButtonAudience.addEventListener("click", function () {
    cookieset(getPageAudience);
    UpdateProfessionOnNav();
    UpdateLocationOnNav();
  });
}

// personLandedUserType

function thirdbuttonLogic() {
  if (
    pageUrlMarlborough.includes("/fund-centre") ||
    pageUrlMarlborough.includes("/managed-portfolios")
  ) {
    findThirdButtonFunds();
    if (newUpdatedTemporarySelection === personLandedUserType) {
      modalButtonAudience.style.display = "none";
      buttonGreenAlternate.style.display = "none";
    }

    if (newUpdatedTemporarySelection === getPageAudience) {
      modalButtonAudience.style.display = "block";
      buttonGreenAlternate.style.display = "none";
    }
    if (
      newUpdatedTemporarySelection === fundsThirdButtonGreenAlternateAudience[0]
    ) {
      modalButtonAudience.style.display = "none";
      buttonGreenAlternate.style.display = "block";
      buttonGreenAlternate.textContent = `Proceed as ${capitalizeFirstLetter(
        fundsThirdButtonGreenAlternateAudience[0]
      )} User`;
      buttonGreenAlternate.addEventListener("click", function () {
        cookieset(fundsThirdButtonGreenAlternateAudience[0]);
      });
      buttonGreenAlternate.href = buttonFundButtonLinkThird;
    }
  } else {
    if (!patternInsightsPost.test(pageUrlMarlborough)) {
      console.debug("ButtonClick on Normal Pages");
      linkUpdateDefault(buttonGreenAlternate, newUpdatedTemporarySelection);
      buttonGreenAlternate.textContent = `Proceed as ${capitalizeFirstLetter(
        newUpdatedTemporarySelection
      )} User`;

      buttonGreenAlternate.addEventListener("click", function () {
        cookieset(newUpdatedTemporarySelection);
      });

      if (
        newUpdatedTemporarySelection !== personLandedUserType &&
        getPageAudience
      ) {
        modalButtonAudience.style.display = "none";
        buttonGreenAlternate.style.display = "block";
        // buttonGreenAlternate.addEventListener('click', function)
      }

      if (newUpdatedTemporarySelection === personLandedUserType) {
        modalButtonAudience.style.display = "none";
        buttonGreenAlternate.style.display = "none";
      }
      if (newUpdatedTemporarySelection === getPageAudience) {
        modalButtonAudience.style.display = "block";
        buttonGreenAlternate.style.display = "none";
      }
    }

    if (patternInsightsPost.test(pageUrlMarlborough)) {
      console.debug("ButtonClick on Insights Pages");

      if (newUpdatedTemporarySelection !== personLandedUserType) {
        modalButtonAudience.style.display = "none";
      }

      if (newUpdatedTemporarySelection === personLandedUserType) {
        modalButtonAudience.style.display = "block";
      }
    }
  }
}

// function selectCookieSettingByDefaultOnloadinList() {}

let checkPopState = function () {
  if (getPageAudience !== "generic") {
    if (getPageAudience !== Cookies.get("userType") || !Cookies.get("userType"))
      if (
        getPageAudience !== "insights" &&
        !patternInsightsPost.test(pageUrlMarlborough)
      ) {
        {
          openAudienceModal();
          alternateLinkOpen();
          resuablefunctioninside();
          whenChangeIsRequiredButtonCLick();
          let parentText = userSelectedText.parentNode;
          parentText.style.display = "block";
          modalButtonAudience.style.cssText =
            "background: #57f84f; border-color: #57f84f; pointer-events: auto;";
        }
      }

    if (getPageAudience === "insights") {
      closeAudienceModal();
    }
  }
};

//Only check for Funds Page

if (
  pageUrlMarlborough.includes("/fund-centre") ||
  pageUrlMarlborough.includes("/managed-portfolios")
) {
  popsStateFunds();
} else {
  checkPopState();
}

function forSettingTheAudience() {
  if (getPageAudience === "individual") {
  }
}

function popsStateFunds() {
  document.addEventListener("DOMContentLoaded", function () {
    function findCurrentLink() {
      let currentLink = document.querySelectorAll(".w--current");
      if (currentLink.length === 0) {
        console.debug("No elements found. Retrying in 1 second...");
        setTimeout(findCurrentLink, 1000); // Retry after 1 second
      } else {
        getPageAudience = currentLink[0].getAttribute("data-audience");
        if (personLandedUserType) {
          if (getPageAudience !== personLandedUserType) {
            openAudienceModal();
            whenChangeIsRequiredButtonCLick();
            let parentText = userSelectedText.parentNode;
            parentText.style.display = "block";
            resuablefunctioninside();
            checkUser(getPageAudience);
            linkUpdateFundsDefault(currentLink);
          } else {
            return;
          }
        }
      }
    }

    findCurrentLink();
  });
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
    institutional: "institutional",
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

modalButtonAudience.addEventListener("click", function () {
  UpdateLocationOnNav();
  UpdateProfessionOnNav();
  updateProfessionAndURL();
});

// Insights Page Logic

function removeInvisibleonInsightsDynamic() {
  document
    .querySelectorAll(".w-condition-invisible")
    .forEach((e) => e.remove());
}

if (patternInsightsPost.test(pageUrlMarlborough)) {
  removeInvisibleonInsightsDynamic();
  console.debug(personLandedUserType, "personLandedUserType");
  checkLogicInsights();
}

function checkLogicInsights() {
  let audienceValues = [];
  let userAudiencesPresentOnPage = document.querySelectorAll("[page-audience]");

  userAudiencesPresentOnPage.forEach((element) => {
    let audienceValue = element.getAttribute("page-audience");
    audienceValues.push(audienceValue);
  });

  // If you need to do something with the array of audienceValues, you can do that here
  // For example, you could return it or log it to the console
  // console.log(audienceValues);

  if (audienceValues.length === 3) {
    // console.log("Do nothing");
  }
  if (audienceValues.length === 2) {
    audienceProfessionNav.addEventListener("click", function () {
      simpleInsightsPageFunctionClicks(audienceValues);
      buttonAlternate.style.display = "block";
      buttonAlternate.textContent = "Proceed to Insights Lisiting Page";
      buttonAlternate.href = "/insights";
    });

    // console.log(personLandedUserType);
    if (
      personLandedUserType !== `${audienceValues[0]}` &&
      personLandedUserType !== "institutional"
      // personLandedUserType !== `${audienceValues[1]}`
    ) {
      singleAudienceTypeChangeInsightTwoChoice(
        personLandedUserType,
        audienceValues
      );
      InsightscheckUser(`${audienceValues[0]}`);
      buttonInsightsAudinceChnageLogic(audienceValues);
    } else {
      return;
    }
  }
  if (audienceValues.length === 1) {
    audienceProfessionNav.addEventListener("click", function () {
      simpleInsightsPageFunctionClicks(audienceValues);
    });
    if (personLandedUserType !== `${audienceValues}`) {
      singleAudienceTypeChangeInsight(personLandedUserType, audienceValues);
      InsightscheckUser(`${audienceValues[0]}`);
      buttonInsightsAudinceChnageLogic(audienceValues);
    } else {
      return;
    }
  }
  return audienceValues;
}

function InsightscheckUser(userType) {
  $(".button_user-type").removeClass("active");
  $("a[user-type = " + userType + "]").addClass("active");
}

function singleAudienceTypeChangeInsight(personLandedUserType, audienceValues) {
  openAudienceModal();
  let parentText = userSelectedText.parentNode;
  parentText.style.display = "block";
  userSelectedText.textContent = personLandedUserType;
  userPageText.textContent = audienceValues;
  modalButtonAudience.textContent = `Proceed as ${capitalizeFirstLetter(
    audienceValues[0]
  )} User`;
  professionText.textContent = `${capitalizeFirstLetter(
    audienceValues[0]
  )} Investor`;

  modalButtonAudience.addEventListener("click", function () {
    cookieset(audienceValues[0]);
    UpdateProfessionOnNav();
    UpdateLocationOnNav();
  });
  simpleButtonAlternateBlock();
}

function singleAudienceTypeChangeInsightTwoChoice(
  personLandedUserType,
  audienceValues
) {
  openAudienceModal();
  let parentText = userSelectedText.parentNode;
  parentText.style.display = "block";
  userSelectedText.textContent = personLandedUserType;
  userPageText.textContent = audienceValues[0];
  modalButtonAudience.textContent = `Proceed as ${capitalizeFirstLetter(
    audienceValues[0]
  )} User`;
  professionText.textContent = `${capitalizeFirstLetter(
    audienceValues[0]
  )} Investor`;

  modalButtonAudience.addEventListener("click", function () {
    cookieset(audienceValues[0]);
    UpdateProfessionOnNav();
    UpdateLocationOnNav();
  });
  simpleButtonAlternateBlock();
}

function buttonInsightsAudinceChnageLogic(audienceValues) {
  $(".button_user-type").on("click", function () {
    let currentUserType = $(this).attr("user-type");

    professionText.textContent = `${capitalizeFirstLetter(
      currentUserType
    )} Investor`;
    $(".button_user-type").removeClass("active");
    modalButtonAudience.textContent = `Proceed as ${capitalizeFirstLetter(
      currentUserType
    )} User`;

    if (currentUserType === `${audienceValues[0]}`) {
      modalButtonAudience.style.display = "block";
    } else {
      modalButtonAudience.style.display = "none";
      buttonGreenAlternate.style.display = "none";
    }

    function audienceClickHandlerInsights() {
      cookieset(currentUserType);
      closeAudienceModal();
      updateProfessionAndURL();
      UpdateLocationOnNav();
      UpdateProfessionOnNav();
    }

    // Attach the new event listener to modalButtonAudience
    modalButtonAudience.addEventListener("click", audienceClickHandlerInsights);
    buttonGreenAlternate.addEventListener(
      "click",
      audienceClickHandlerInsights
    );

    $(this).addClass("active");
  });
}

function simpleInsightsPageFunctionClicks(audienceValues) {
  InsightscheckUser(`${audienceValues[0]}`);
  modalButtonAudience.textContent = `Proceed as ${capitalizeFirstLetter(
    audienceValues[0]
  )} User`;
  simpleButtonAlternateBlock();

  // console.log(personLandedUserType, `${audienceValues[0]}`);

  $(".button_user-type").on("click", function () {
    if (personLandedUserType === `${audienceValues[0]}`) {
    } else {
      modalButtonAudience.style.display = "none";
      buttonGreenAlternate.style.display = "none";
    }
    $(this).addClass("active");
  });
}

function simpleButtonAlternateBlock() {
  buttonAlternate.style.display = "block";
  buttonAlternate.textContent = "View All Insights";
  buttonAlternate.href = "/insights";
}

function updatelinkbasedonQuery(query, button) {
  if (button) {
    if (query === "individual") {
      button.href =
        "/fund-centre?rangename=MarlboroughIndividual&category=MARL&bespokecolumn1=United%20Kingdom";
    } else if (query === "intermediary") {
      button.href =
        "/fund-centre?rangename=MarlboroughIntermediary&category=MARL";
    } else if (query === "institutional") {
      button.href = "/fund-centre?rangename=MarlboroughInst&category=MARL";
    }
  }
}

function updateFundsPageLinkonHomepageOnload() {
  let homeFundsUrl = document.querySelector("[homefunds='url']");
  updatelinkbasedonQuery(personLandedUserType, homeFundsUrl);
}

function updateFundsPageLinkonHomepageOnChange(currentUserType) {
  let homeFundsUrl = document.querySelector("[homefunds='url']");
  updatelinkbasedonQuery(currentUserType, homeFundsUrl);
}

function isHomepage(url) {
  // Create a URL object from the url string
  const urlObject = new URL(url);

  // Check if the pathname is "/" (indicating the homepage) or "" (also indicating the homepage in some server configurations)
  return urlObject.pathname === "/" || urlObject.pathname === "";
}

if (isHomepage(pageUrlMarlborough)) {
  updateFundsPageLinkonHomepageOnload();
}
