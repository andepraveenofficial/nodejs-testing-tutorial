module.exports = {
	preset: "ts-jest",
	testEnvironment: "node",
	// testMatch: ["**/*.test.ts"],
	testMatch: [
		"**/src/**/*.test.ts", // tests alongside source files
		"**/__tests__/**/*.test.ts", // tests in the separate tests folder
	],
};
