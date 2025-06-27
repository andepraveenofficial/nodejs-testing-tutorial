# Jest

<details>
<summary>Index</summaary>

## Index

- Introduction
- TestCase Syntax
- Hooks
- Documentation

</details>

---

<details>
<summary>Introduction</summary>

## Introduction

- Software testing is the process of identifying bugs in a software product.
- It helps find and fix issues before the product is launched.
- We can test our functions to make sure they work correctly in different situations.
- Ex : jest testing framework

</details>

---

<details>
<summary>TestCase Syntax</summary>

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

### Example

1. Single Testcase
2. Group Testcases

#### 1. Single Testcase

```ts index.ts
export const sum = (a, b) => {
	return a + b;
};
```

```ts index.test.ts
/* ----->  Import External Files <----- */
import { sum } from "./index.ts";

/* -----> TestCases <----- */
test("Testing for sum Function", () => {
	let output = sum(2, 3);
	expect(output).toBe(5);
});
```

### 2. Group Testcases

```ts index.ts
export const sum = (a, b) => {
	return a + b;
};

export const mul = (a, b) => {
	return a * b;
};
```

```ts index.test.ts
/* ----->  Import External Files <----- */
import { sum, mul } from "./index.ts";

/* -----> TestCases <----- */

describe("Testing for maths operations", () => {
	test("Testing for sum Function", () => {
		let output = sum(2, 3);
		expect(output).toBe(5);
	});

	test("Testing for sum Function", () => {
		let output = mul(2, 3);
		expect(output).toBe(6);
	});
});

/* -----> Skip TestCases <----- */

describe.skip("Testing for maths operations", () => {
	test("Testing for sum Function", () => {
		let output = sum(2, 3);
		expect(output).toBe(5);
	});

	test("Testing for sum Function", () => {
		let output = mul(2, 3);
		expect(output).toBe(6);
	});
});
```

</details>

---

<details>
<summary>Hooks</summary>

## Hooks

```ts index.test.ts
import { mul, sum } from "./maths";

afterAll(() => {
	console.log("*** After All Hook ***");
});

afterEach(() => {
	console.log("*** After Each Hook ***");
});

test("Testing sum Function", () => {
	expect(sum(1, 2)).toBe(3);
});

test("Testing mul Function", () => {
	expect(mul(1, 2)).toBe(2);
});

beforeAll(() => {
	console.log("*** Before All Hook ***");
});

beforeEach(() => {
	console.log("*** Before Each Hook ***");
});
```

</details>

<details>
<summary>Documentation</summary>

## Documentation

- Official Documentation : [https://jestjs.io/docs/getting-started]
- Matchers : [https://jestjs.io/docs/using-matchers]
</details>
