/// <reference path="../../src/dts/mocha.d.ts" />
/// <reference path="../../src/dts/chai.d.ts" />
/// <reference path="../../src/dts/should.d.ts" />

describe("Sample", () => {
  it("should be true", () => {
    true.should.be.true;
    "hoge".should.eql("hoge");
  });
});
