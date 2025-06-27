import { add } from "../src/index";

describe("I am from __tests__ folder addFunction", () => {
	// 01 Testcase
	test("should add two numbers", () => {
		expect(add(1, 2)).toBe(3);
	});
});
