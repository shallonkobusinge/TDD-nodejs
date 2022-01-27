const { expect } = require("chai")
const helloExample = require('../src/app/service/helloWorld');

describe('sayHello ', () => {
    it("should be a function", () => {
        expect(typeof helloExample.sayHello).to.equal('function')
    })
    it("should return hello", () => {
        expect(helloExample.sayHello()).eql("Hello World");
    })
})