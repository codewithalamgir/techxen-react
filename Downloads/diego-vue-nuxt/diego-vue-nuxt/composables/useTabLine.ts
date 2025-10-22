
export default function useTabLine() {

  const activeRef = ref<HTMLButtonElement | null>(null);
  const marker = ref<HTMLSpanElement | null>(null);
  const activeTab = ref('home');

  function tpTabLine2() {
    const marker = document.querySelector('#lineMarker') as HTMLElement;
    const item = document.querySelectorAll('.tp-marker-tab button') as NodeListOf<HTMLButtonElement>;
  
    // Initialize the marker position and width
    function initializeMarker() {
      const initiallyActive = document.querySelector('.tp-marker-tab .nav-link.active') as HTMLElement;
      if (initiallyActive) {
        updateMarker(initiallyActive);
      }
    }
  
    // Update the marker position and width based on the target element
    function updateMarker(target: HTMLElement) {
      marker.style.left = target.offsetLeft + 'px';
      marker.style.width = target.offsetWidth + 'px';
    }
  
    // Add event listeners to each item to update the marker on click
    function addEventListeners() {
      item.forEach(link => {
        link.addEventListener('click', (e) => {
          updateMarker(e.target as HTMLElement);
        });
      });
    }
    function showMarker() {
      marker.style.display = 'block';
    }
    function calculateAnchorWidths() {
      let anchorWidths = 0;
  
      item.forEach((elem) => {
        const activeTest = elem.classList.contains('active');
  
        if (!activeTest) {
          const parentElement = elem.parentElement as HTMLElement;
          const computedStyle = getComputedStyle(parentElement);
          const aWidth = parentElement.offsetWidth;
          const aPadLeft = parseFloat(computedStyle.paddingLeft);
          const aPadRight = parseFloat(computedStyle.paddingRight);
          const aTotalWidth = aWidth + aPadLeft + aPadRight;
          anchorWidths += aTotalWidth;
        }
      });
      return anchorWidths;
    }
    initializeMarker();
    addEventListeners();
    showMarker();
    return calculateAnchorWidths();
  };
  
  watch(activeTab, () => {
   
  });
  
  const handleActiveTab = (e: MouseEvent, tab: string) => {
    activeTab.value = tab;
    const buttonElement = e.target as HTMLButtonElement;
    if (buttonElement.classList.contains("active") && marker.value) {
      marker.value.style.left = buttonElement.offsetLeft + "px";
      marker.value.style.width = buttonElement.offsetWidth + "px";
    }
  };
  
  onMounted(() => {
    const nav_active = document.getElementById("home-tab");
    const marker = document.getElementById("blog-btn-bg");
    if (nav_active?.classList.contains("active") && marker) {
      marker.style.left = nav_active.offsetLeft + "px";
      marker.style.width = nav_active.offsetWidth + "px";
    }
  });
  
  return {
    tpTabLine2,
    activeRef,
    marker,
    activeTab,
    handleActiveTab,
  }
}