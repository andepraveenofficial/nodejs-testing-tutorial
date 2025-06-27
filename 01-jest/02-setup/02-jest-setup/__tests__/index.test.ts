import { add } from "../src/index";

describe("I am from __tests__ folder addFunction", () => {
	it("should add two numbers", () => {
		expect(add(1, 2)).toBe(3);
	});
});
