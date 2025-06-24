import {render, screen} from  "@testing-library/react"
import App from "../App"
import userEvent from "@testing-library/user-event"

test("Testing Click Event", async () => {
    // Render
    render(<App/>)

    // Querying
    const btn = screen.getByText("Change Data")

    // Apply Events
    userEvent.setup()
    await userEvent.click(btn)

    const updatedText = screen.getByText("New Data")

    // Assertion
    expect(updatedText).toBeInTheDocument()

})
