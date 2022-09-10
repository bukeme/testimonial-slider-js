const indicator = document.querySelectorAll('img')
const slide = document.querySelectorAll('.slide')

indicator.forEach(slideFunc)

function slideFunc(element, index) {
	element.addEventListener('click', function() {
		indicator.forEach(function(element) {
			element.classList.remove('active')
		})
		element.classList.add('active')
		slide.forEach(function(element) {
			element.classList.remove('active')
		})
		slide[index].classList.add('active')

	})
}