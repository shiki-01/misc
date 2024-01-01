class scrollHorizontal {
	constructor() {
		this.wrapper = '#wrapper';
		this.panel = '.contents';
		this.anchor = '.anchor';
		this.init();
		this.anchorScroll();
	}
	init() {
		const wrapper = document.querySelector(this.wrapper);
		if(wrapper) {
			const panels = gsap.utils.toArray(this.panel);
			const wrapperWidth = wrapper.offsetWidth;
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
	anchorScroll() {
		const wrapper = document.querySelector(this.wrapper);
		if(wrapper) {
			const anchors = document.querySelectorAll(this.anchor);
			let index = '';
			anchors.forEach( (anchor) => {
				anchor.addEventListener( 'click', (e) => {
					e.preventDefault();
					index = [].slice.call(anchors).indexOf(anchor);
					gsap.to(window, {
						scrollTo: {
							y: (document.documentElement.scrollHeight - document.documentElement.clientHeight) / 2 * (index + 1),
							autoKill: false
						},
						duration: 1
					});
				});
			});
		}
	}
}

window.addEventListener('load', () => {
	new scrollHorizontal();
})