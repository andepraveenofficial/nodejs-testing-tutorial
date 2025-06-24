import { render, screen } from "@testing-library/react"
import MultipleSameElements from "./MultipleSameElements"

test("Testing MutipleSameElements Component", () => {
    // Render 
    render(<MultipleSameElements/>)

    // Querying 
    const labels = screen.getAllByLabelText("Checkbox")

    // Assertions
    expect(labels.length).toBe(3)
    for (let i=0; i<labels.length; i++){
        expect(labels[i]).toBeChecked()
    }
})
