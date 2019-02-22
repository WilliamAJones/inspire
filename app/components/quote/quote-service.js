import Quotes from "../../models/quote.js";

// @ts-ignore
const _quoteApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/quotes',
	timeout: 3000
});

let _state = {
	quotes: {}
}

let _subscribers = {
	quotes: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn());
}


export default class QuoteService {
	get Quotes() {
		return _state.quotes
	}

	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}

	getQuotes() {
		console.log('Calling the Quoteguy')
		_quoteApi.get().then(res => {
			_setState('quotes', new Quotes(res.data))
		})
	}
}
