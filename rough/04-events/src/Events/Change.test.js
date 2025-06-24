import userEvent from "@testing-library/user-event"
import App from "../App"
import {screen, render} from "@testing-library/react"

test("Testing Change Event", async () => {

    // Render
    render(<App/>)

    // Querying 
    const input = screen.getByRole("textbox")

        // Apply Events
        userEvent.setup()
        await userEvent.type(input, "Apple")

    const label = screen.getByText("Apple")

    // Assertion
    expect(label).toBeInTheDocument()
})