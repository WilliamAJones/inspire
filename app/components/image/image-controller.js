import ImageService from "./image-service.js";

const _is = new ImageService()

function drawImage() {
    let template = ''
       
      template += _is.Image.getTemplate()
  
      document.querySelector('#bg-image').innerHTML = template
      console.log("The image man says:", _is.Image)
  }
  
  export default class ImageController {
  
      constructor() {
          _is.addSubscriber('image', drawImage)
          _is.getImage()
      }
  
  }