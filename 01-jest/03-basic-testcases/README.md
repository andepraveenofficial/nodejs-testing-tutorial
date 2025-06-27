# Basic Testcases

## TestCase Syntax

```ts index.test.ts
test("description", () => {
	// Querying: Call the function
	// Assertion: Check the output
});
```

### Writing Testcase Steps

1. Querying: Call the function
2. Assertion: Check the output

```ts index.test.ts
/* ----->  Import External Files <----- */
import { sum } from "./index.ts";

/* -----> TestCases <----- */
test("Testing for sum Function", () => {
	// 01 Querying
	let output = sum(2, 3);

	// 02 Assertion
	expect(output).toBe(5); 
});
```
