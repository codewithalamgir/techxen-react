import {gsap} from "gsap";
import $ from 'jquery';

export function slidePrevTransitionStart() {

	 $('.tp-slider-dot').find('.swiper-pagination-bullet').each(function () {
		if (!$(this).hasClass("swiper-pagination-bullet-active")) {
			$('#trigger-slides .swiper-slide-active').find('div').first().each(function () {
				if (!$(this).hasClass("active")) {
					$(this).trigger('click');
				}
			});

			$('#trigger-slides .swiper-slide-duplicate-active').find('div').first().each(function () {
				if (!$(this).hasClass("active")) {
					$(this).trigger('click');
				}
			});
		}
	});

}

export function slideNextTransitionStart() {

	 $('.tp-slider-dot').find('.swiper-pagination-bullet').each(function () {
		if (!$(this).hasClass("swiper-pagination-bullet-active")) {
			$('#trigger-slides .swiper-slide-active').find('div').first().each(function () {
				if (!$(this).hasClass("active")) {
					$(this).trigger('click');
				}
			});

			$('#trigger-slides .swiper-slide-duplicate-active').find('div').first().each(function () {
				if (!$(this).hasClass("active")) {
					$(this).trigger('click');
				}
			});
		}
	});
}


export function addEvents(webGL) {
	var triggerSlide = Array.from(document.getElementById('trigger-slides').querySelectorAll('.slide-wrap')); webGL.isRunning = false;

	triggerSlide.forEach((el) => {

		el.addEventListener('click', function () {

			if (!webGL.isRunning) {

				webGL.isRunning = true;

				document.getElementById('trigger-slides').querySelectorAll('.active')[0].className = '';
				this.className = 'active';

				var slideId = parseInt(this.dataset.slide, 10);

				webGL.material.uniforms.nextImage.value = webGL.textures[slideId];
				webGL.material.uniforms.nextImage.needsUpdate = true;

				gsap.to(webGL.material.uniforms.dispFactor, {
					duration: 1,
					value: 1,
					ease: 'Sine.easeInOut',
					onComplete: function () {
						webGL.material.uniforms.currentImage.value = webGL.textures[slideId];
						webGL.material.uniforms.currentImage.needsUpdate = true;
						webGL.material.uniforms.dispFactor.value = 0.0;
						webGL.isRunning = false;
					}
				});

			}

		});

	});
}