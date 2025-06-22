/* -----> Third Party Packages <----- */
import { render, screen } from "@testing-library/react"

/* -----> Import External Components <----- */
import Home from "./Home"


/* -----> Testcases <----- */ 
test("Testing Home Component", () => {
    // Render
    render(<Home/>)

    // Querying
    const headingElement1 = screen.getByText("Heading1")
    const headingElement2 = screen.getByText(/heading1/i)

    const headingElement3 = screen.getByRole('heading', {level: 1})

    const container = screen.getByRole("container")

    const textBox1 = screen.getByRole("textbox")
    const textBox2 = screen.getByPlaceholderText("Enter Your Name")
    const textBox3 = screen.getByLabelText("Enter Your Name")
    const textBox4 = screen.getByDisplayValue("Ande Praveen")

    const image1 = screen.getByAltText("photo")
    const image2 = screen.getByTitle("photo")

    const span = screen.getByTestId("span-element")

    const passwordInput = screen.getByRole('textbox', { name: "Password" });
 
    
    // Assertion
    expect(headingElement1).toBeInTheDocument()
    expect(headingElement2).toBeInTheDocument()
    expect(headingElement3).toBeInTheDocument()

    expect(container).toBeInTheDocument()

    expect(textBox1).toBeInTheDocument()
    expect(textBox2).toBeInTheDocument()
    expect(textBox3).toBeInTheDocument()
    expect(textBox3).toHaveValue("Ande Praveen")
    expect(textBox4).toBeInTheDocument()


    expect(image1).toBeInTheDocument()
    expect(image2).toBeInTheDocument()

    expect(span).toBeInTheDocument()

    expect(passwordInput).toBeInTheDocument()
})


    