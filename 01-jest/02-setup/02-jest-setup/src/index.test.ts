import { add } from "./index";

describe("I am from src folder addFunction", () => {
	// 01 Testcase
	test("should add two numbers", () => {
		expect(add(1, 2)).toBe(3);
	});
});
