import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import FunctionProps from "./FunctionProps"

test("Testing FunctionProp", async () => {
    const testFunction = jest.fn()

    // Render
    render(<FunctionProps testFunction={testFunction}/>)

    // Querying
    const btn = screen.getByRole("button")

    // Apply Events
     await userEvent.click(btn)

    // Assertion
    expect(testFunction).toBeCalled()
})
