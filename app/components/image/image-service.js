import Image from "../../models/image.js";
// @ts-ignore
const imgApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/images',
	timeout: 3000
});
let _state = {
	images: {}
}

let _subscribers = {
	images: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn());
}

export default class ImageService {
	get Image() {
		return _state.images
	}

	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}

	getImage() {
		console.log('Calling the Image Guy')
		imgApi.get().then(res => {
			_setState('images', new Image(res.data))
		})
	}
}
