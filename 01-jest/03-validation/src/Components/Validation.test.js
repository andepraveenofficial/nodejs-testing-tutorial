/* -----> Third Party Packages <----- */
import {render, screen} from "@testing-library/react"

/* -----> External Components <----- */
import Validation from "./Validation"

/* -----> Testcases <----- */
test("Testing for validation Component", () => {
    // Render
    render(<Validation/>)

    // Querying
    const username = screen.getByTestId("username")

    // Assertion
    expect(username).toBeInTheDocument()
    expect(username).toHaveValue()
    expect(username).toHaveValue("Ande Praveen")
    expect(username).toHaveAttribute("class")
    expect(username).toHaveClass("text-input")
    expect(username).toHaveAttribute("class", "text-input")
    expect(username).toBeEnabled()
    // expect(username).toBeDisabled()
})


test("Testing for Button Element", () => {
   // Render
   render(<Validation/>)

   // Querying
   const button = screen.getByRole("button")

   // Assertion
   expect(button).toBeInTheDocument()
   expect(button).not.toHaveClass("btn1")
   expect(button).not.toHaveAttribute("id")
   expect(username).not.toBeDisabled()

})

test("Testing Heading Element with Regex", () => {
    // Render
    render(<Validation/>)

    // Querying 
    // const heading = screen.getByText("head", {exact:false})
    const heading = screen.getByText(/head/i)
    // Assertion
    expect(heading).toBeInTheDocument()
})

test("Testing match with Function", () => {
    // Render
    render(<Validation/>)

    // Querying 
    const heading = screen.getByText((content, element) => {
        return content.startsWith("Head")
    })
    // const heading = screen.getByText((content, element) => content.endsWith("ing1")})
    // const heading = screen.getByText((content, element) => content.includes("adin")})
    
    // Assertion
    expect(heading).toBeInTheDocument()
})