import Duck from '../src/Duck';
import { expect } from 'chai';

describe('Dog tests', () => {
	it('getName() return correct name', () => {
		let duck = new Duck('Donald');
		expect(duck.getName()).to.equal('Donald');
	});

	it('quack() throw error when duck has no name', () => {
		let duck = new Duck(' ');
		expect(() => duck.quack()).to.throw('Animal has no name');
	});

	it('quack() return "Duck {duckname} is quaking"', () => {
		let duck = new Duck('Donald');
		expect(duck.quack()).to.equal('Duck Donald is quacking');
	});
});