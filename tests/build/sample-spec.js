/// <reference path="../../src/dts/mocha.d.ts" />
/// <reference path="../../src/dts/chai.d.ts" />
/// <reference path="../../src/dts/should.d.ts" />
describe("Sample", function () {
    it("should be true", function () {
        var sample = true;
        console.log(sample);
        console.log("これundefined??=>", sample.should);
        sample.should.equal(true);
    });
});
