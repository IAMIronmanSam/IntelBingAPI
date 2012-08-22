/// <reference path="../test/code.js" />
describe("will add 5 to number", function () {
    var res = mathLib.add5(10)

    equals(res, 15, "should add 5");
});