/**
 * Represent animal.
 */
export default class Animal {

	/**
	 * Create animal.
	 * @constructor
	 * @param {string} name - Animal name
	 */
	constructor(name = '') {
		this._name = name.trim();
	}

	/**
	 * Get animal name
	 * @returns {string|*} - Animal name
	 */
	getName() {
		if (!this._name) {
			throw new Error('Animal has no name!');
		}

		return this._name;
	}
}