
export default function useHoverReveal() {
  const moveImage = (e: MouseEvent, item: HTMLElement | any) => {
    const itemRect = item.getBoundingClientRect();
    const x = e.clientX - itemRect.left;
    const y = e.clientY - itemRect.top;
    const childElement = item.children[1] as HTMLElement;

    if (childElement) {
      // childElement.style.transform = `translate(${x}px, ${y}px)`;
      childElement.style.left = `${x}px`;
      childElement.style.top = `${y}px`;
    }
  };



  const handleMouseMove = (e: MouseEvent, selector: string) => {
    if (typeof window !== 'undefined') {
      const hoverItems = document.querySelectorAll(selector);

      hoverItems.forEach((item) => {
        moveImage(e, item);
      });
    }
  };

  return {
    handleMouseMove,
  }
}