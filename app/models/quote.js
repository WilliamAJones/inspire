export default class Quotes {
    constructor(data) {
      console.log('[RAW QUOTES]', data);
        this.author= data.quote.author
        this.quote=data.quote.body
    
    }
    getTemplate(){
      return `
      <h5>${this.author}</h5>
      <h6><i>--"${this.quote}"</i> </h6>
      `
  }
  }