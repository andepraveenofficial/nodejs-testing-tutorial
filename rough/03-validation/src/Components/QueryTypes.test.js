import { screen, render } from "@testing-library/react"

import QueryTypes from "./QueryTypes"

test("Testing with queryBy", () => {
    // Render
    render(<QueryTypes/>)

    // Querying 
    // const logout = screen.getByText("Logout")
    const logout = screen.queryByText("Logout")

    // Assertion
    expect(logout).not.toBeInTheDocument()
})
