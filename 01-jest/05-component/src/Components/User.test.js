import{render, screen} from "@testing-library/react"
import User from "./User"

test("Props Testing", () => {
    const name = "Mahesh"
    // Render
    render(<User name={name}/>)

    // Querying
    const user = screen.getByText(name)

    // Assertion
    expect(user).toBeInTheDocument()
})