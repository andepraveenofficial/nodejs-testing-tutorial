
import {render, screen, act} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import App from "../App"

test("Testing act Function", async () => {

    // Render 
    render(<App/>)

    // Querying
    const input = screen.getByRole("textbox")

        // Apply Events
        userEvent.setup()
        await act(async () => {
            await userEvent.type(input, "Hello World")
})
        

    const text = screen.getByText("Hello World")

    // Assertions
    expect(text).toBeInTheDocument()

})