import { render, screen } from "@testing-library/react"
import App from "../App"

test("Testing findBy Query", async ()=>{
    // Render
    render(<App/>)

    // Querying
    const element = await screen.findByText("Data Found", {}, {timeout:3000})

    // Assertions
    expect(element).toBeInTheDocument()
})