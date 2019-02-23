import ImageService from "./image-service.js";

const _is = new ImageService()

function drawImage() {
    let template = ''
       
      template += _is.Image.getTemplate()
  
      document.getElementById('bg-image').style.backgroundImage=`url(${_is.Image.url})`
      console.log("The image man says:", _is.Image)
  }
  
  export default class ImageController {
  
      constructor() {
          _is.addSubscriber('images', drawImage)
          _is.getImage()
      }
  
  }

  