const { expect } = require('chai');
const { sum } = require('./helpers');


describe('Урок 3.3', () => {
    it('Функция sum возвращает сумму аргументов', () => {
        expect(sum(1, 2, 3, 4)).to.equal(10);
    })
})