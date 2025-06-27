# Jest Setup

### Setup

- Create Basic **NodeJS+Typescript** Project

### Jest Setup

- Install Jest : `npm install -D jest`
- Install Jest types: `npm install -D @types/jest`
- Install ts-jest : `npm install -D ts-jest`
  1. ts-test compile TypeScript files before running tests
  2. Jest is built to run JavaScript, not TypeScript.
  3. So, you need a compiler to turn TypeScript into JavaScript before running tests.

### Run Testcases

- `npm run test` -> Run all Jest unit testcases
- `npm run test:watch` -> Run Jest in watch mode (automatically reruns on file changes)
- `npm run test:coverage` -> Run all tests and generate a test coverage report.

### tsconfig

```json tsconfig.json
{
	"exclude": ["node_modules", "**/*.test.ts", "**/__tests__/**"]
}
```

### Installation

- production : `npm start`
- development : `npm run dev`

### Start the Application

- Production
  - `npm run build`
  - `npm start`
- Development
  - `npm run dev`
