export default class Image{
    constructor(data) {
      console.log('[RAW IMAGE API]', data);
        this.url= data.large_url || data.url
    
     
    }
    getTemplate(){
      return `
     <div style="background-image: url(${this.url})></div>
      `
  }
  }