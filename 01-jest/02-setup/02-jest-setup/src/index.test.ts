import { add } from "./index";

describe("I am from src folder addFunction", () => {
	it("should add two numbers", () => {
		expect(add(1, 2)).toBe(3);
	});
});
