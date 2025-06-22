import App from "../App"
import {render, screen} from "@testing-library/react"

test("Testing Mock API", async () => {
    // Render
    render(<App/>);

    // Querying
    const element = await screen.findAllByRole("listitem");
   
    // Assertion
    expect(element).toHaveLength(2)
})