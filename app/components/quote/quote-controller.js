import QuoteService from "./quote-service.js";

let _qs = new QuoteService()

function drawQuote() {
    let template = ''
       
      template += _qs.Quotes.getTemplate()
  
      document.querySelector('#quote').innerHTML = template
      console.log("The Quote Man Says:", _qs.Quotes)
  }
export default class QuoteController {
    constructor() {
    _qs.addSubscriber('quotes', drawQuote)
    _qs.getQuotes()
    }
}
