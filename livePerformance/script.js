// window.onload = function () {
//     "use strict"
//     var paths = document.getElementsByTagName('path')
//     var visualizer = document.getElementById('visualizer')
//     var mask = visualizer.getElementById('mask')
//     var h = document.getElementsByTagName('h1')[0]
//     var path
//     var report = 0
    
//     var soundAllowed = function (stream) {
//         window.persistAudioStream = stream
//         h.innerHTML = "Thanks"
//         h.setAttribute('style', 'opacity: 0;')
//         var audioContent = new AudioContext()
//         var audioStream = audioContent.createMediaStreamSource( stream )
//         var analyser = audioContent.createAnalyser()
//         audioStream.connect(analyser)
//         analyser.fftSize = 1024

//         var frequencyArray = new Uint8Array(analyser.frequencyBinCount)
//         visualizer.setAttribute('viewBox', '0 0 255 255')
      
// 				//Through the frequencyArray has a length longer than 255, there seems to be no
//         //significant data after this point. Not worth visualizing.
//         for (var i = 0 ; i < 255; i++) {
//             path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
//             path.setAttribute('stroke-dasharray', '1')
//             mask.appendChild(path)
//         }
//         var doDraw = function () {
//             requestAnimationFrame(doDraw)
//             analyser.getByteFrequencyData(frequencyArray)
//           	var adjustedLength
//             for (var i = 0 ; i < 255; i++) {
//               	adjustedLength = Math.floor(frequencyArray[i]) - (Math.floor(frequencyArray[i]) % 1)
//                 paths[i].setAttribute('d', 'M '+ (i) +',255 l 0,-' + adjustedLength)
//             }

//         }
//     doDraw()
//     }

//     var soundNotAllowed = function (error) {
//         h.innerHTML = "You must allow your microphone."
//         console.log(error)
//     }   
//         navigator.getUserMedia({audio:true}, soundAllowed, soundNotAllowed)
// }



var video = document.querySelector("#videoElement")

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream
    })
    .catch(function (err0r) {
      console.log("Something went wrong!")
    })
}


