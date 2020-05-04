
export class Scroll {
  private element!: HTMLElement;
  private visibility: number = screen.height;
  constructor() {

  }

  add(selector = "[data-scroll-top]", visibility?: number) {
    (visibility) ? this.visibility = visibility : null;
    this.element = document.querySelector(selector) as HTMLElement;
    //calls this function to scroll the page
    window.addEventListener('scroll', () => {
      this.scrollVisibility();
    });

    window.addEventListener('load', () => {
      this.scrollVisibility();
    });

    // this function for scroll to top
    this.element.addEventListener('click', (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      this.scrollToTop(300);
    });
  }

  // grab elements as array, rather than as NodeList
  scrollVisibility() {
    if (window.pageYOffset < this.visibility) {
      this.element.style.visibility = 'hidden';
      this.element.style.display = 'none';
      this.element.style.opacity = '0';
    } else {
      this.element.style.visibility = 'visible';
      this.element.style.display = 'block';
      this.element.style.opacity = '1';
    }
  }


  scrollToTop(scrollDuration: number) {
    const scrollStep = -window.scrollY / (scrollDuration / 15),
      scrollInterval = setInterval(() => {
        if (window.scrollY != 0) {
          window.scrollBy(0, scrollStep);
        }
        else clearInterval(scrollInterval);
      }, 15);
  }
}
