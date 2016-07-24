import Animal from './Animal';

/**
 * Represent duck.
 */
export default class Duck extends Animal {

	/**
	 * Create duck.
	 * @constructor
	 * @param {string} name - Duck name
	 */
	constructor(name) {
		super(name);
	}

	/**
	 * Duck quacking
	 * @returns {string} - Duck {duckname} is quacking
	 */
	quack() {
		let duckname = this.getName();
		return `Duck ${duckname} is quacking`;
	}
}