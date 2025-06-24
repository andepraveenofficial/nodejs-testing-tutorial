import { render, within } from "@testing-library/react"
import App from "../App"

test("Testing Custom Query", () => {
    // Render
    render(<App/>)

    // Querying 
    const customElement = document.getElementById("testId")
    const container = document.querySelector("#grand")
    const para = within(container).getByText("I am Paragraph")

    // Assertion
    expect(customElement).toBeInTheDocument()
    expect(customElement).toHaveClass("test")

    expect(para).toBeInTheDocument()
})