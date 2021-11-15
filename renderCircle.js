/**
 * 
 * @param {UINT8 0Array} frequencyArray 
 * @param {canvas context} ctx 
*/

let color_count = 0
function render(arr, ctx, rgb) {
  ctx.fillStyle = 'rgba(255, 255, 255, 0.21)'
  let max_val = 0
	// ctx.fillRect(0, 0, 300, 300)
	// ctx.fill()

	const bars = arr.length 
	// const colorStep = 360 / bars
	const pi2 = Math.PI * 2

  arr.forEach((val, i) => {
    max_val = Math.max(val, max_val)
    if (i % 12 === 0) {
      // scale f to 0 - 300
      const radius = (val / 255 * 300) / 8
      // Begin a new path
      ctx.beginPath()
      // Draw a circle of radius
      
      ctx.arc(75, 75, radius, 0, pi2)
      ctx.arc(75, 150, radius, 0, pi2)
      ctx.arc(75, 225, radius, 0, pi2)
      ctx.arc(150, 150, radius, 0, pi2)
      ctx.arc(150, 75, radius, 0, pi2)
      ctx.arc(150, 225, radius, 0, pi2)
      ctx.arc(225, 225, radius, 0, pi2)
      ctx.arc(225, 150, radius, 0, pi2)
      ctx.arc(225, 75, radius, 0, pi2)
      // set stroke color
      //ctx.strokeStyle = `hsla(${colorStep * i}, 100%, 50%, 0.1)`
      // if (rgb === true) {
      //   color_count += .01
      //   ctx.strokeStyle = `hsl(  ${color_count % 360} , 100%,  50%)`
      //  }
      //  else {
      //    ctx.strokeStyle = 'green'
      //  }
      // stroke path
      ctx.closePath
      ctx.stroke()

    }
  })
  if (rgb === true) {
    color_count += 1
    ctx.strokeStyle = `hsl(  ${color_count % 360} , 100%,  50%)`
   }
   else {
     ctx.strokeStyle = 'green'
   }
  // ctx.stroke()
  // ctx.closePath()
}
  
  
  

export default render