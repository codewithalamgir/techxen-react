export function useVideoPopup() {

  const videoUrl = ref<string>('https://www.youtube.com/embed/_RpLvsA1SNM')
  const isVideoOpen: Ref<boolean> = ref(false);
  let iframeElement: HTMLIFrameElement | null = null;

  const playVideo = (videoId: string) => {
    if (typeof window !== 'undefined') {
      const videoOverlay = document.querySelector("#video-overlay");
      videoUrl.value = `https://www.youtube.com/embed/${videoId}`;
      if (!iframeElement) {
        iframeElement = document.createElement("iframe");
        iframeElement.setAttribute("src", videoUrl.value);
        iframeElement.style.width = "60%";
        iframeElement.style.height = "80%";
      }

      isVideoOpen.value = true;
      videoOverlay?.classList.add("open");
      videoOverlay?.appendChild(iframeElement);
    }
  };
  // close modal video
  const closeVideo = () => {
    if (typeof window !== 'undefined') {
      const videoOverlay = document.querySelector("#video-overlay");

      const iframeToRemove = videoOverlay?.querySelector("iframe");
      if (iframeToRemove) {
        iframeToRemove.remove();
      }

      isVideoOpen.value = false;
      videoOverlay?.classList.remove("open");
    }
  };



  return {
    isVideoOpen,
    playVideo,
    closeVideo
  }

}
