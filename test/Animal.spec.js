import Animal from '../src/Animal';
import { expect } from 'chai';

describe('Animal tests', () => {

	it('getName() throw error when animal has no name', () => {
		let animal = new Animal(' ');
		expect(() => animal.getName()).to.throw('Animal has no name!');
	});

	it('getName() return correct name', () => {
		let animal = new Animal('Donald');
		expect(animal.getName()).to.equal('Donald');
	});

});