var textWrapper = document.querySelector('.sliding-text .letters')
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>")

anime.timeline({ loop: false })
	.add({
		targets: '.sliding-text .line',
		scaleY: [0, 1],
		opacity: [0.5, 1],
		easing: 'easeOutExpo',
		duration: 700,
	})
	.add({
		targets: '.sliding-text .line',
		translateX: [0, document.querySelector('.sliding-text .letters').getBoundingClientRect().width + 10],
		easing: 'easeOutExpo',
		duration: 700,
		delay: 100,
	})
	.add({
		targets: '.sliding-text .letter',
		opacity: [0, 1],
		easing: 'easeOutExpo',
		duration: 600,
		offset: '-=775',
		delay: (el, i) => 34 * (i + 1) - 600,
	})
	.add({
		targets: '.line',
		opacity: 0,
		duration: 1000,
		easing: 'easeOutExpo',
	})

document.body.style.overflow = 'hidden'

setTimeout(function () {
	document.body.style.overflow = 'auto'
}, 6500)
