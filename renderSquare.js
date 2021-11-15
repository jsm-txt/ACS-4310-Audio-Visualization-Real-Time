/**
 * 
 * @param {UINT8 0Array} frequencyArray 
 * @param {canvas context} ctx 
 * @param {number} centerX 
 * @param {number} centerY 
 */

 let color_count = 0
 function render(arr, ctx, rgb) {
   
  ctx.beginPath()
  let max_val = 0
  
  arr.forEach((val, i) => {
    max_val = Math.max(val, max_val)
    if (i % 12 === 0) {
      const size = max_val / 255 * 300
      const size2 = size/8
      ctx.rect(60 -size2, 60-size2, 20+size2*2, 20+size2*2)
      
      
      ctx.rect(140 -size2, 60-size2, 20+size2*2, 20+size2*2)
      
      ctx.rect(220 -size2, 60-size2, 20+size2*2, 20+size2*2)
      
      ctx.rect(60 -size2, 140-size2, 20+size2*2, 20+size2*2)
      ctx.rect(140 -size2, 140-size2, 20+size2*2, 20+size2*2)
      ctx.rect(220 -size2, 140-size2, 20+size2*2, 20+size2*2)
      ctx.rect(60 -size2, 220-size2, 20+size2*2, 20+size2*2)
      ctx.rect(140 -size2, 220-size2, 20+size2*2, 20+size2*2)
      ctx.rect(220 -size2, 220-size2, 20+size2*2, 20+size2*2)
      ctx.clearRect(0, 0, 300, 300)
    }
  })
   if (rgb === true) {
     color_count += 1
     ctx.strokeStyle = `hsl(  ${color_count % 360} , 100%,  50%)`
   }
   else {
     ctx.strokeStyle = 'navy'
   }
  ctx.lineWidth = 1
  ctx.stroke()
  ctx.closePath()
  
 }

export default render