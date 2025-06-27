import { sum, mul } from "../src/index";

describe("I am from __tests__ folder addFunction", () => {
	// 01 Testcase
	test("should add two numbers", () => {
		const output = sum(2, 3);
		expect(output).toBe(5);
	});

	// 02 Testcase
	test("should multiply two numbers", () => {
		const output = mul(2, 3);
		expect(output).toBe(6);
	});
});
