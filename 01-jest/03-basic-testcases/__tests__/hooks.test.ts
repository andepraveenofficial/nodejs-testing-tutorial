import { sum, mul } from "../src/index";

afterAll(() => {
	console.log("*** After All Hook ***");
});

afterEach(() => {
	console.log("*** After Each Hook ***");
});

test("Testing sum Function", () => {
	const output = sum(2, 3);
	expect(output).toBe(5);
});

test("Testing mul Function", () => {
	const output = mul(2, 3);
	expect(output).toBe(6);
});

beforeAll(() => {
	console.log("*** Before All Hook ***");
});

beforeEach(() => {
	console.log("*** Before Each Hook ***");
});
