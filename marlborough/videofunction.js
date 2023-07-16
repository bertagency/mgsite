// JavaScript for video player that we have in website.
function pauseOtherVideos(currentVideo) {
  const allVideos = document.querySelectorAll("[video='element']");
  allVideos.forEach((video) => {
    if (video !== currentVideo && !video.paused) {
      video.pause();
      const videoComponent = video.closest("[video='component']");
      const playIcon = videoComponent.querySelector("[video='play']");
      const pauseIcon = videoComponent.querySelector("[video='pause']");
      const text = videoComponent.querySelector("[video='text']");
      text.textContent = "Play"; // Update the text to "Play" when video is paused
      playIcon.style.opacity = "1"; // Show the play icon when video is paused
      pauseIcon.style.opacity = "0"; // Hide the pause icon when video is paused
    }
  });
}

function videoPlayPauseToggler(videoComponent) {
  const videoElement = videoComponent.querySelector("[video='element']");
  const playIcon = videoComponent.querySelector("[video='play']");
  const pauseIcon = videoComponent.querySelector("[video='pause']");
  const text = videoComponent.querySelector("[video='text']");

  videoComponent.addEventListener("click", () => {
    if (videoElement.paused) {
      pauseOtherVideos(videoElement);
      videoElement.play();
    } else {
      videoElement.pause();
    }
  });

  videoElement.addEventListener("play", () => {
    text.textContent = "Pause"; // Update the text to "Pause" when video is playing
    playIcon.style.opacity = "0"; // Hide the play icon when video is playing
    pauseIcon.style.opacity = "1"; // Show the pause icon when video is playing
  });

  videoElement.addEventListener("pause", () => {
    text.textContent = "Play"; // Update the text to "Play" when video is paused
    playIcon.style.opacity = "1"; // Show the play icon when video is paused
    pauseIcon.style.opacity = "0"; // Hide the pause icon when video is paused
  });
}

// Get all video components
const videoComponents = document.querySelectorAll("[video='component']");

// Loop through each video component and apply the function
videoComponents.forEach(videoPlayPauseToggler);
