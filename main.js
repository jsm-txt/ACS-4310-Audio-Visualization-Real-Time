
// Notes 
// https://www.kkhaydarov.com/audio-visualizer/
// https://medium.com/@duraraxbaccano/computer-art-visualize-your-music-in-javascript-with-your-browser-part-2-fa1a3b73fdc6


// Import a renderer 
import circleRenderer from './radialRayMonoRenderer.js'
import circleGridRenderer from './renderCircleGrid.js'
import circleCenterRenderer from './renderCircleCenter.js'
import verticalBarsRenderer from './verticalBarRenderer.js'
import verticalBarsMonoRenderer from './verticalBarsMonoRenderer.js'
import radialRayRenderer from './radialRayRenderer.js'
import renderSquare from './renderSquare.js'
import renderCircle from './renderCircle.js'


// --------------------------------------------------------
// Canvas

// Get reference to the canvas context for use by the 
// renderers below
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')


// ----------------------------------------------------------
// Buttons 
const playButton = document.getElementById('button-play')
const pauseButton = document.getElementById('button-pause')
const rgbButton = document.getElementById('button-rgb')
const shapeButton = document.getElementById('button-shape')
const refRGB = document.querySelector('#button-rgb')
const refShape = document.querySelector('#shape')

playButton.addEventListener('click', (e) => {
	startAudio()
})

pauseButton.addEventListener('click', (e) => {
	audio.pause()
})

rgbButton.addEventListener('click', (e) => {
	toggleRGB()
})

shapeButton.addEventListener('click', (e) => {
	toggleShape()
})

let RGB = false
let shape = 'square'
refShape.style.backgroundColor = 'navy'
refShape.style.borderRadius = '0px'

function toggleRGB() {
	let colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple'];
	let currentIndex = 0;
	//let refreshIntervalId = 0
	if (RGB === false) {
		RGB = true

		var refreshIntervalId = setInterval(function () {
			refRGB.style.backgroundColor = colors[currentIndex]
			if (!colors[currentIndex]) {
				currentIndex = 0;
			} else {
				currentIndex++;
			}
		}, 400);
	} else {
		RGB = false
		// clearInterval(refreshIntervalId);
		// console.log('refresh' + refreshIntervalId)
		refRGB.style.backgroundColor = 'grey'
	}
}
function toggleShape() {
	if (shape === 'square') {
		shape = 'circle'
		refShape.style.backgroundColor = 'yellow'
		refShape.style.borderRadius = '20px'
	} else {
		shape = 'square'
		refShape.style.backgroundColor = 'navy'
		refShape.style.borderRadius = '0px'
	}
}
// --------------------------------------------------------
// Audio setup

// Defime some variables 
let analyser
let frequencyArray
let audio

// Starts playing the audio
function startAudio() {
	// make a new Audio Object
	audio = new Audio()
	// Get a context 
	const audioContext = new (window.AudioContext || window.webkitAudioContext)()
	
	// Define a source sound file 
	// You can replace this with your own file
	audio.src = 'bird-whistling-a.wav'
	// audio.src = 'log-sine-sweep.wav'

	// Make a new analyser
	analyser = audioContext.createAnalyser()
	// Connect the analyser and the audio
	const source = audioContext.createMediaElementSource(audio)
	source.connect(analyser)
	analyser.connect(audioContext.destination)

	// Get an array of audio data from the analyser
	frequencyArray = new Uint8Array(analyser.frequencyBinCount)
	// console.log(frequencyArray.length)
	
	// Start playing the audio
	audio.play()

	requestAnimationFrame(render)
}

// This function renders the audio to the canvas using a renderer
function render() {
	ctx.clearRect(0, 0, 300, 300)
	const centerX = 300 / 2
	const centerY = 300 / 2
	const radius = 300 / 5
	analyser.getByteFrequencyData(frequencyArray)
	
	// Use one of the renderers below 
	// radialRayRenderer(frequencyArray, ctx, centerX, centerY, radius)
	// verticalBarsMonoRenderer(frequencyArray, ctx, 12, 300, 300)
	// verticalBarsRenderer(frequencyArray, ctx, 300, 300)
	//circleCenterRenderer(frequencyArray, ctx, centerX, centerY)
	if (shape === 'square') {
		renderSquare(frequencyArray,ctx, RGB)
	} else {
		 renderCircle(frequencyArray,ctx, RGB)
		//circleGridRenderer(frequencyArray, ctx, 300, 300)
	}
	
	// circleGridRenderer(frequencyArray, ctx, 300, 300)
	//circleRenderer(frequencyArray, ctx, centerX, centerY, radius)
	
	// Set up the next animation frame
	requestAnimationFrame(render)
}

