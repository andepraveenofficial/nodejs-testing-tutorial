import { prettyDOM, render, screen, logRoles } from "@testing-library/react"
import Debug from "./Debug"

test("Debugging", () => {
    // Render
    const {container, debug} = render(<Debug/>)
    // console.log(container)
    console.log(prettyDOM(container))
    debug()
    logRoles(container)

    // Querying
    // const ele = screen.getByText("Hello World")

    // Assertion
    // expect(ele).toBeInTheDocument()
})