# Jest

<details>
<summary>Index</summaary>

## Index

- Introduction

</details>

---

<details>
<summary>Introduction</summary>

## Introduction

- Software testing is the process of identifying bugs in a software product.
- It helps find and fix issues before the product is launched.

</details>

---

<details>
<summary>Documentation</summary>

## Documentation

- Official Documentation : [https://jestjs.io/docs/getting-started]
</details>

---

<details>
<summary>Index</summary>

## Index

- Introduction
- Testing Files & Folders
- TestCase Syntax
- Query
- Assertion
- Events

</details>

---

<details>
<summary>Introduction</summary>

### React Testing Tools

1. jest Framework
2. React Testing library

### What should we test

- Functions which we write
- UI elements that we write
- Props and States
- UI condition testing
- UI state testing
- Event Testing
- API testing
- Component rendering testing

### Avoid testing

- ExternalUI library code
- No need to test default function of JS and react
- sometimes we should mock function rather than testing it in details.

</details>

---

<details>
<summary>Testing Files & Folders</summary>

## Testing Files & Folders

### Testing File Names

Outside of the `__tests__` Folder we can create testing files with extensions`.test.js` or `.spec.js` then only js file will be considered as testing file.

- `App.test.js`
- `App.spec.js`

### Testing Folder Name

Inside of the `__tests__` Folder we can create testing files.  
Inside of the `__tests__` Folder all files are consider as testing files by React Testing Library.

- `__tests__`
  - App.test.js
  - App.spec.js
  - App.js

### Run All test files

`npm run test`

### Run specific test file

`npm run test App.test.js`

</details>

---

<details>
<summary>TestCase Syntax</summary>

## TestCase Syntax

```js
test("description", () => {
	// Render
	// Querying
	// Assertion
});
```

### Writing Testcase Steps

1. Render : Render Component
2. Querying : Find element or Function
3. Assertion : Check validation

### Simple Unit Test

```js App.js
export const sum = (a, b) => {
	return a + b;
};

export const mul = (a, b) => {
	return a * b;
};
```

```js App.test.js
/* ----->  Import External Files <----- */
import { sum, mul } from "./App.js";

/* -----> TestCases <----- */
test("Testing for sum Function", () => {
	let output = sum(2, 3);
	expect(output).toBe(5);
});

it("Testing for mul Function", () => {
	let output = mul(2, 3);
	expect(output).toBe(6);
});
```

### Grouping Testcases

We can Group multiple testcases into single testcase.

```js App.js
export const sum = (a, b) => {
	return a + b;
};

export const mul = (a, b) => {
	return a * b;
};
```

```js App.test.js
/* ----->  Import External Files <----- */
import { sum, mul } from ".App";

/* -----> Testcases <----- */
describe("Testing for maths file", () => {
	test("Testing for sum Function", () => {
		let output = sum(2, 3);
		expect(output).toBe(5);
	});

	it("Testing for mul Function", () => {
		let output = mul(2, 3);
		expect(output).toBe(6);
	});
});
```

</details>

---

<details>
<summary>Query</summary>

## Querying

Querying process of selecting or finding elements within a rendered component or UI for the purpose of making assertions or interacting with them in tests.

- RTL Query : React Testing Library Query

### Find Elements

- getByText
- getByDisplayValue
- getByRole
- getByPlaceholderText
- getByLabelText
- getByAltText
- getByTitle
- getByTestId
- Custom Role

### Find Multiple Same Category Elements

- getAllByText
- getAllByDisplayValue
- getAllByRole
- getAllByPlaceholderText
- getAllByLabelText
- getAllByAltText
- getAllByTitle
- getAllByTestId
- Custom Role
- custom Query => document.getElementById("IdName")
- Querying withIn element

### Priority Order for RTL Queries

1. ByRole
2. ByLabelText
3. ByPlaceholderText
4. ByText
5. ByDisplayValue
6. ByAltText
7. ByTitle
8. ByTestId

### Query Types

- getBy
- queryBy -> conditions
- findBy -> Asynchronous Functions
- getAllBy
- queryAllBy
- findAllBy

#### Example

```js Home.js
import React from "react";

const Home = () => {
	return (
		<div>
			<h1>Heading1</h1>
			<div role='container'>Container</div>

			<label htmlFor='text'>Enter Your Name</label>
			<input
				type='text'
				placeholder='Enter Your Name'
				id='text'
				defaultValue='Ande Praveen'
			/>

			<img src='../Assets/image.jpg' alt='photo' title='photo' />
			<span data-testid='span-element'>Inline</span>

			<label htmlFor='password'>Password</label>
			<input type='password' id='password' />
		</div>
	);
};

export default Home;
```

```js Home.test.js
/* -----> Third Party Packages <----- */
import { render, screen } from "@testing-library/react";

/* -----> Import External Components <----- */
import Home from "./Home";

/* -----> Testcases <----- */
test("Testing Home Component", () => {
	// Render
	render(<Home />);

	// Querying
	const headingElement1 = screen.getByText("Heading1");
	const headingElement2 = screen.getByText(/heading1/i);

	const headingElement3 = screen.getByRole("heading", { level: 1 });

	const container = screen.getByRole("container");

	const textBox1 = screen.getByRole("textbox");
	const textBox2 = screen.getByPlaceholderText("Enter Your Name");
	const textBox3 = screen.getByLabelText("Enter Your Name");
	const textBox4 = screen.getByDisplayValue("Ande Praveen");

	const image1 = screen.getByAltText("photo");
	const image2 = screen.getByTitle("photo");

	const span = screen.getByTestId("span-element");

	const passwordInput = screen.getByRole("textbox", { name: "Password" });

	// Assertion
	expect(headingElement1).toBeInTheDocument();
	expect(headingElement2).toBeInTheDocument();
	expect(headingElement3).toBeInTheDocument();

	expect(container).toBeInTheDocument();

	expect(textBox1).toBeInTheDocument();
	expect(textBox2).toBeInTheDocument();
	expect(textBox3).toBeInTheDocument();
	expect(textBox3).toHaveValue("Ande Praveen");
	expect(textBox4).toBeInTheDocument();

	expect(image1).toBeInTheDocument();
	expect(image2).toBeInTheDocument();

	expect(span).toBeInTheDocument();

	expect(passwordInput).toBeInTheDocument();
});
```

#### Example Multiple Same Elements

```js MultipleSameElements.js
import React from "react";

const MultipleSameElements = () => {
	return (
		<div>
			<div>
				<input type='checkbox' id='checkbox1' defaultChecked={true} />
				<label htmlFor='checkbox1'>Checkbox</label>
			</div>
			<div>
				<input type='checkbox' id='checkbox2' defaultChecked={true} />
				<label htmlFor='checkbox2'>Checkbox</label>
			</div>
			<div>
				<input type='checkbox' id='checkbox3' defaultChecked={true} />
				<label htmlFor='checkbox3'>Checkbox</label>
			</div>
		</div>
	);
};

export default MultipleSameElements;
```

```js MultipleSameElements.test.js
import { render, screen } from "@testing-library/react";
import MultipleSameElements from "./MultipleSameElements";

test("Testing MutipleSameElements Component", () => {
	// Render
	render(<MultipleSameElements />);

	// Querying
	const labels = screen.getAllByLabelText("Checkbox");

	// Assertions
	expect(labels.length).toBe(3);
	for (let i = 0; i < labels.length; i++) {
		expect(labels[i]).toBeChecked();
	}
});
```

</details>

---

<details>
<summary>Assertion</summary>

## Assertion

In Jest, an assertion is a statement that checks whether a condition is true or false and typically indicates whether a test has passed or failed. Jest is a popular JavaScript testing framework commonly used for testing JavaScript code, including React applications.

### Assertion Methods

- toBeInTheDocument()
- toHaveValue("defaultValue")
- toHaveAttribute("attributeName")
- toHaveClass("className")
- toBeEnabled()
- toBeDisabled()

### Negative Assertion Methods

- not.toHaveValue("defaultValue")
- not.toHaveAttribute("class")
- not.toHaveClass("className")
- not.toBeEnabled()
- not.toBeDisabled()

### Matching

```js
// Querying match with Function
const heading = screen.getByText((content, element) => {
	return content.startsWith("Head");
});
```

</details>

---

<details>
<summary>Events</summary>

## Events

- click
- change

</details>

---

<details>
<summary>Debugging In React Testing Library</summary>

## Debugging In React Testing Library

- Automatic debugging
- prettyDOM
- debug
- DEBUG_PRINT_LIMIT=1000 npm test
- logRoles

</details>

---

<details>
<summary>MSW</summary>

## MSW

- MSW stands for Mock Service Worker
- React Testing Library recommend to use MSW
</details>

---

<details>
<summary>watchmode</summary>

## watchmode

- run all testCases
- run only failed testCases

</details>

---

<details>
<summary>hooks</summary>

## hooks

- before
- after
</details>

---
