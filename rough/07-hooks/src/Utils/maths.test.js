import { mul, sum } from "./maths";

afterAll(()=>{
    console.log("*** After All Hook ***")
})

afterEach(()=>{
    console.log("*** After Each Hook ***")
})

test("Testing sum Function", () => {
    expect(sum(1, 2)).toBe(3);
})

test("Testing mul Function", () => {
    expect(mul(1, 2)).toBe(2);
})

beforeAll(()=>{
    console.log("*** Before All Hook ***")
})

beforeEach(()=>{
    console.log("*** Before Each Hook ***")
})


