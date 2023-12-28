class scrollHorizontal {
	constructor() {
		this.wrapper = '#wrapper';
		this.panel = '.panel';
		this.anchor = '.anchor';
		this.init();
	}
	init() {
		const wrapper = document.querySelector(this.wrapper);
		if(wrapper) {
			// gsap.registerPlugin(ScrollTrigger);
			const panels = gsap.utils.toArray(this.panel);
			const wrapperWidth = wrapper.offsetWidth;
			/**
			 * 横スクロール開始
			 */
			gsap.to( panels, {
				xPercent: -100 * (panels.length - 1),
				ease: "none",
                scrollTrigger: {
                    trigger: wrapper,
                    pin: true,
                    scrub: 2,
                    end: () => "+=" + wrapperWidth
                }
			})
		}
	}
}

window.addEventListener('load', () => {
	new scrollHorizontal();
  console.log(document.body.clientWidth);
  console.log(document.querySelector(".headerlist > #article > a").getAttribute('href'));
})

function goTo() {
  gsap.to(window, {
    scrollTo: {
      y: "#panel02",
      autoKill: false
    },
    duration: 1
  });
}