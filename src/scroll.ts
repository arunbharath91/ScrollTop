
class Scroll {
  private element: HTMLElement;
  constructor(selector = "[data-scroll-top]") {
    this.element = document.querySelector(selector) as HTMLElement;
    this.registerEvents();
  }

  registerEvents() {
    //calls this function to scroll the page
    window.addEventListener('scroll', () => {
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
    if (window.pageYOffset < screen.height) {
      this.element.style.visibility = 'hidden';
      this.element.style.opacity = '0';
    } else {
      this.element.style.visibility = 'visible';
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

const newScroll = new Scroll();
