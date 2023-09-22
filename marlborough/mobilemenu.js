// Mobile menu Javascript
document.addEventListener("DOMContentLoaded", function () {
  let fa = function (triggerMain, targetMain) {
    document.querySelectorAll(triggerMain).forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll(targetMain)
          .forEach((target) => target.classList.add("active"));
      });
    });
  };
  let fr = function (triggerMain, targetMain) {
    document.querySelectorAll(triggerMain).forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll(targetMain)
          .forEach((target) => target.classList.remove("active"));
      });
    });
  };

  // Nav
  // Menu Open
  const navOpenTrigger = '[navm= "trigger-open"]';
  const navCloseTrigger = '[navm= "trigger-close"]';
  const navBottomDrawer = '[navm= "bottom-drawer"]';
  fa(navOpenTrigger, navBottomDrawer);
  fa(navOpenTrigger, navOpenTrigger);
  fa(navOpenTrigger, navCloseTrigger);

  // Menu Close

  fr(navCloseTrigger, navBottomDrawer);
  fr(navCloseTrigger, navOpenTrigger);
  fr(navCloseTrigger, navCloseTrigger);

  // funds
  const fundsOpen = '[navm= "funds-open"]';
  const fundsClose = '[navm= "funds-close"]';
  const fundsDrawer = '[navm= "funds-drawer"]';
  fa(fundsOpen, fundsDrawer);
  fr(fundsClose, fundsDrawer);
  // solutions

  const solutionsOpen = '[navm= "solutions-open"]';
  const solutionsClose = '[navm= "solutions-close"]';
  const solutionsDrawer = '[navm= "solutions-drawer"]';
  fa(solutionsOpen, solutionsDrawer);
  fr(solutionsClose, solutionsDrawer);

  // insights
  const insightsOpen = '[navm= "insights-open"]';
  const insightsClose = '[navm= "insights-close"]';
  const insightsDrawer = '[navm= "insights-drawer"]';
  fa(insightsOpen, insightsDrawer);
  fr(insightsClose, insightsDrawer);
  // why us
  const whyusOpen = '[navm= "whyus-open"]';
  const whyusClose = '[navm= "whyus-close"]';
  const whyusDrawer = '[navm= "whyus-drawer"]';
  fa(whyusOpen, whyusDrawer);
  fr(whyusClose, whyusDrawer);

  // Reset function Mobile

  function resetEverythingMobile(triggerElement, ContainerElement) {
    const trigger = document.querySelector(triggerElement);
    const bottomDrawer = document.querySelector(ContainerElement);

    function removeActiveClass(element) {
      element.classList.remove("active");

      const children = element.children;
      for (let i = 0; i < children.length; i++) {
        removeActiveClass(children[i]);
      }
    }

    trigger.addEventListener("click", function () {
      removeActiveClass(bottomDrawer);
    });
  }
  resetEverythingMobile(navCloseTrigger, navBottomDrawer);

  // Level Two

  // funds

  const fundsInvestment = '[funds-drawer= "funds-drawer-investment"]';
  const fundsInstitutional = '[funds-drawer= "funds-drawer-institutional"]';
  const fundsPersonal = '[funds-drawer="funds-drawer-personal"]';

  const fundsLevelTwoDrawer = '[navm="funds-drawer-level-two"]';
  const closefundsBoxButton = '[close="funds-drawer-level-two"]';

  const closefundsBoxThreeButton = '[close="funds-drawer-level-three"]';

  const fundsPersonalBox = '[funds-drawer="funds-level-three-personal"]';
  const fundsInvestmentBox = '[funds-drawer="funds-level-three-investments"]';
  const fundsInstitutionalBox =
    '[funds-drawer="funds-level-three-insititutional"]';

  fr(closefundsBoxButton, fundsLevelTwoDrawer);

  function openLevelTwoFunds(mainTriggerElement, Subheading, ActiveBox) {
    const mainTrigger = document.querySelector(mainTriggerElement);
    const fundsTextHeading = document.querySelectorAll(
      '[funds="funds-subheading"]'
    );

    mainTrigger.addEventListener("click", function () {
      fundsTextHeading.forEach(function (element) {
        element.textContent = Subheading;
      });

      document.querySelector(fundsLevelTwoDrawer).classList.add("active");
      // document.querySelector(ActiveBox).classList.add("active");
      document.querySelectorAll(ActiveBox).forEach(function (element) {
        element.classList.add("active");
      });
    });
  }

  openLevelTwoFunds(fundsPersonal, "Individual", fundsPersonalBox);
  openLevelTwoFunds(fundsInvestment, "Intermediary", fundsInvestmentBox);
  openLevelTwoFunds(fundsInstitutional, "Institutional", fundsInstitutionalBox);

  function closeFundsDrawerTwo() {
    const fundsLevelTwoDrawerSelector = document.querySelector(
      fundsLevelTwoDrawer
    );
    const closefundsBox = document.querySelector(closefundsBoxButton);

    closefundsBox.addEventListener("click", function () {
      const elementsWithActiveClass = fundsLevelTwoDrawerSelector.querySelectorAll(
        ".active"
      );
      elementsWithActiveClass.forEach((element) => {
        element.classList.remove("active");
      });
    });
  }

  closeFundsDrawerTwo();

  //funds Level Last

  const fundsTextHeadingLast = document.querySelector(
    '[funds="funds-subheading-last"]'
  );

  const fundsThirdWrapper = document.querySelectorAll(
    '[funds="third-parent-links-wrapper"]'
  );

  const fundsLevelThreeDrawer = '[navm="funds-drawer-level-three"]';

  fundsThirdWrapper.forEach((wrapper) => {
    const lastParentLinks = wrapper.querySelectorAll("[funds-trigger]");

    lastParentLinks.forEach((link) => {
      link.addEventListener("click", () => {
        document.querySelector(fundsLevelThreeDrawer).classList.add("active");
      });
    });
  });

  // Get all elements with funds-trigger attribute
  var triggerElementsFunds = document.querySelectorAll("[funds-trigger]");

  triggerElementsFunds.forEach(function (triggerElement) {
    triggerElement.addEventListener("click", function () {
      var targetAttribute = this.getAttribute("funds-trigger");
      var targetElement = document.querySelector(
        '[funds-target="' + targetAttribute + '"]'
      );

      if (targetElement) {
        targetElement.classList.add("active");
        var dataTextValue = this.getAttribute("data-text");
        fundsTextHeadingLast.innerText = dataTextValue;
      }
    });
  });

  function closeFundsDrawerThree() {
    const fundsLevelThreeDrawerSelector = document.querySelector(
      fundsLevelThreeDrawer
    );

    const closefundsBox = document.querySelector(closefundsBoxThreeButton);
    closefundsBox.addEventListener("click", function () {
      fundsLevelThreeDrawerSelector.classList.remove("active");
    });

    closefundsBox.addEventListener("click", function () {
      const elementsWithActiveClass = fundsLevelThreeDrawerSelector.querySelectorAll(
        ".active"
      );
      elementsWithActiveClass.forEach((element) => {
        element.classList.remove("active");
      });
    });
  }

  closeFundsDrawerThree();

  // insights
  const insightsInvestment = '[insights-drawer= "insights-drawer-investment"]';
  const insightsInstitutional =
    '[insights-drawer= "insights-drawer-institutional"]';
  const insightsPersonal = '[insights-drawer="insights-drawer-personal"]';

  const insightsPersonalBox =
    '[insights-drawer="insights-level-three-personal"]';
  const insightsInvestmentBox =
    '[insights-drawer="insights-level-three-investment"]';
  const insightsInstitutionalBox =
    '[insights-drawer="insights-level-three-institutional"]';

  const insightsLevelTwoDrawer = '[navm="insights-drawer-level-two"]';
  const closeinsightsBoxButton = '[close="insights-drawer-level-two"]';

  fr(closeinsightsBoxButton, insightsLevelTwoDrawer);

  function openLevelTwoInsights(mainTriggerElement, Subheading, ActiveBox) {
    const mainTrigger = document.querySelector(mainTriggerElement);
    const fundsTextHeading = document.querySelectorAll(
      '[insights="insights-subheading"]'
    );

    mainTrigger.addEventListener("click", function () {
      fundsTextHeading.forEach(function (element) {
        element.textContent = Subheading;
      });

      document.querySelector(insightsLevelTwoDrawer).classList.add("active");
      document.querySelectorAll(ActiveBox).forEach(function (element) {
        element.classList.add("active");
      });
    });
  }

  openLevelTwoInsights(
    insightsInvestment,
    "Intermediary",
    insightsInvestmentBox
  );
  openLevelTwoInsights(
    insightsInstitutional,
    "Institutional",
    insightsInstitutionalBox
  );
  openLevelTwoInsights(insightsPersonal, "Individual", insightsPersonalBox);

  function closeInsightsDrawerTwo() {
    const fundsLevelTwoDrawerSelector = document.querySelector(
      insightsLevelTwoDrawer
    );
    const closefundsBox = document.querySelector(closeinsightsBoxButton);

    closefundsBox.addEventListener("click", function () {
      const elementsWithActiveClass = fundsLevelTwoDrawerSelector.querySelectorAll(
        ".active"
      );
      elementsWithActiveClass.forEach((element) => {
        element.classList.remove("active");
      });
    });
  }

  closeInsightsDrawerTwo();

  // solutions

  const solutionsInvestment =
    '[solutions-drawer= "solutions-drawer-investment"]';
  const solutionsInstitutional =
    '[solutions-drawer= "solutions-drawer-institutional"]';
  const solutionsPersonal = '[solutions-drawer="solutions-drawer-personal"]';

  const solutionsLevelTwoDrawer = '[navm="solutions-drawer-level-two"]';
  const closesolutionsBoxButton = '[close="solutions-drawer-level-two"]';

  const closesolutionsBoxThreeButton = '[close="solutions-drawer-level-three"]';

  const solutionsPersonalBox =
    '[solutions-drawer="solutions-level-three-personal"]';
  const solutionsInvestmentBox =
    '[solutions-drawer="solutions-level-three-investments"]';
  const solutionsInstitutionalBox =
    '[solutions-drawer="solutions-level-three-insititutional"]';

  fr(closesolutionsBoxButton, solutionsLevelTwoDrawer);

  function openLevelTwosolutions(mainTriggerElement, Subheading, ActiveBox) {
    const mainTrigger = document.querySelector(mainTriggerElement);
    const solutionsTextHeading = document.querySelectorAll(
      '[solutions="solutions-subheading"]'
    );

    mainTrigger.addEventListener("click", function () {
      solutionsTextHeading.forEach(function (element) {
        element.textContent = Subheading;
      });

      document.querySelector(solutionsLevelTwoDrawer).classList.add("active");
      // document.querySelector(ActiveBox).classList.add("active");
      document.querySelectorAll(ActiveBox).forEach(function (element) {
        element.classList.add("active");
      });
    });
  }

  openLevelTwosolutions(solutionsPersonal, "Individual", solutionsPersonalBox);
  openLevelTwosolutions(
    solutionsInvestment,
    "Intermediary",
    solutionsInvestmentBox
  );
  openLevelTwosolutions(
    solutionsInstitutional,
    "Institutional",
    solutionsInstitutionalBox
  );

  function closesolutionsDrawerTwo() {
    const solutionsLevelTwoDrawerSelector = document.querySelector(
      solutionsLevelTwoDrawer
    );
    const closesolutionsBox = document.querySelector(closesolutionsBoxButton);

    closesolutionsBox.addEventListener("click", function () {
      const elementsWithActiveClass = solutionsLevelTwoDrawerSelector.querySelectorAll(
        ".active"
      );
      elementsWithActiveClass.forEach((element) => {
        element.classList.remove("active");
      });
    });
  }

  closesolutionsDrawerTwo();

  const solutionsThirdWrapper = document.querySelectorAll(
    '[solutions="third-parent-links-wrapper"]'
  );

  const solutionsLevelThreeDrawer = '[navm="solutions-drawer-level-three"]';

  // console.log(document.querySelector(solutionsLevelThreeDrawer));

  solutionsThirdWrapper.forEach((wrapper) => {
    const lastParentLinks = wrapper.querySelectorAll("[solutions-trigger]");
    // console.log(lastParentLinks);

    lastParentLinks.forEach((link) => {
      link.addEventListener("click", () => {
        // console.log("Link clicked");
        document
          .querySelector(solutionsLevelThreeDrawer)
          .classList.add("active");
        // console.log("solutionsLevelThreeDrawer element added 'active' class");
      });
    });
  });

  // Get all elements with solutions-trigger attribute
  var triggerElementsSolutions = document.querySelectorAll(
    "[solutions-trigger]"
  );

  // console.log(triggerElementsSolutions);

  triggerElementsSolutions.forEach(function (triggerElement) {
    triggerElement.addEventListener("click", function () {
      // console.log("Trigger element clicked");
      var targetAttribute = this.getAttribute("solutions-trigger");
      // console.log("targetAttribute:", targetAttribute);
      var targetElement = document.querySelector(
        '[solutions-target="' + targetAttribute + '"]'
      );
      // console.log("targetElement:", targetElement);
      document.querySelector(solutionsLevelThreeDrawer).classList.add("active");
      if (targetElement) {
        targetElement.classList.add("active");
        // console.log("targetElement added 'active' class");
      }
    });
  });

  function closesolutionsDrawerThree() {
    const solutionsLevelThreeDrawerSelector = document.querySelector(
      solutionsLevelThreeDrawer
    );

    const closesolutionsBox = document.querySelector(
      closesolutionsBoxThreeButton
    );
    closesolutionsBox.addEventListener("click", function () {
      solutionsLevelThreeDrawerSelector.classList.remove("active");
    });

    closesolutionsBox.addEventListener("click", function () {
      const elementsWithActiveClass = solutionsLevelThreeDrawerSelector.querySelectorAll(
        ".active"
      );
      elementsWithActiveClass.forEach((element) => {
        element.classList.remove("active");
      });
    });
  }

  closesolutionsDrawerThree();
});
