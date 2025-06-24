/* ----->  Import External Files <----- */ 
import {sum, mul} from "../Utils/maths"


/* -----> Testcases <----- */ 
describe("Testing for maths file", () => {

test("Testing for sum Function", () => {
    let output = sum(2,3)
    expect(output).toBe(5)
})

it("Testing for mul Function", () => {
    let output = mul(2,3)
    expect(output).toBe(6)
})
})


// Skip the Testcases
describe.skip("Testing for maths file", () => {

    test("Testing for sum Function", () => {
        let output = sum(2,3)
        expect(output).toBe(5)
    })
    
    it("Testing for mul Function", () => {
        let output = mul(2,3)
        expect(output).toBe(6)
    })
    })
