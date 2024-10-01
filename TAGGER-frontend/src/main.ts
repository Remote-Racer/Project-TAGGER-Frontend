import './style.css'

var aspectRatioScaled = document.querySelectorAll<HTMLElement>('.aspect-ratio')

var aspectRatioFactor = Math.min( Math.floor( window.innerWidth / 16), Math.floor( window.innerHeight ) )

aspectRatioScaled.forEach((element: HTMLElement) => {
	
	element.style.width = `${16 * aspectRatioFactor}`
	element.style.height = `${9 * aspectRatioFactor}`

	console.log( element.id )
});
