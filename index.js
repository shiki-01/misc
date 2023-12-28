class scrollHorizontal {
	constructor() {
		this.wrapper = '#wrapper';
		this.panel = '.panel';
		this.anchor = '.anchor';
		this.init();
		this.anchorScroll();
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
	anchorScroll() {
		const wrapper = document.querySelector(this.wrapper);
    const page = document.querySelector(".l-hero-wrapper");
		if(wrapper) {
			// gsap.registerPlugin(ScrollToPlugin, ScrollTrigger); // npm/yarnの際に必要
			const anchors = document.querySelectorAll(this.anchor);
			let index = '';
			anchors.forEach( (anchor) => {
				anchor.addEventListener( 'click', (e) => {
					e.preventDefault();
					index = [].slice.call(anchors).indexOf(anchor); // 何番目のアンカーリンクをクリックしたか取得
					const target = document.querySelector(e.currentTarget.querySelector('a').getAttribute('href')); // クリックしたアンカーリンクに紐づくpanelを取得
					const scrollbarWidth = window.innerWidth - document.body.clientWidth; // スクロールバーの長さを取得
					//const wrapperOffset = target.offsetLeft * ( wrapper.clientWidth / ( wrapper.clientWidth - window.innerWidth ) ) + scrollbarWidth * index; // 移動位置を取得
          const wrapperOffset = (1975) * (index + 1);
					gsap.to(window, {
						scrollTo: {
							y: document.querySelector(".headerlist > #article > a").getAttribute('href'),
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
  console.log(document.body.clientWidth);
  console.log(document.querySelector(".headerlist > #article > a").getAttribute('href'));
})

function goTo() {
  new scrollHorizontal();
  gsap.to(window, {
    scrollTo: {
      y: "#panel02",
      autoKill: false
    },
    duration: 1
  });
}