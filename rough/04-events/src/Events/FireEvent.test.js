import { fireEvent, render, screen } from "@testing-library/react"
import FireEvent from "./FireEvent"

test("Click Event TestCase", () => {
    // Render
    render(<FireEvent/>)

    // Querying
    const btn = screen.getByRole("button")
    let input = screen.getByRole("textbox")

    // Apply Events
    fireEvent.click(btn);
    const updatedText  = screen.getByText("New Data")
    fireEvent.change(input, {target: {value: "a"}})

    // Assertion
    expect(updatedText).toBeInTheDocument()
    expect(input.value).toBe("a")
})
