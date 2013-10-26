/// <reference path="../../test-prefix.ts" />
/// <reference path="../../../src/prefix.ts" />

describe("Backbone", () => {
    it("v1.1.0 exists.", () => {
        Backbone["VERSION"].should.eql("1.1.0");
    });
});
