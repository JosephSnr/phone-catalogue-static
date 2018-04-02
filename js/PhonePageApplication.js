'use strict'

class PhonePageApplication {
	constructor(options) {
		this._el = options.element;

		this._search = new Search({
			element: this._el.querySelector('[data-component = "search"]');
		});

		this._sort = new Sort({
			element: this._el.querySelector('[data-component = "sort"]');
		});

		this._phoneCatalogue = new PhoneCatalogue({
			element: this._el.querySelector('[data-component = "phoneCatalogue"]');
		});

		this._phoneDetails = new PhoneDetails({
			element: this._el.querySelector('[data-component = "phoneDetails"]');
		});
	}
}