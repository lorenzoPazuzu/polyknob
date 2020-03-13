import React from "react"
import { render } from "@testing-library/react"
import { RootComponent } from "../root.component"

test("renders learn react link", () => {
    const { getByText } = render(<RootComponent />)
    const linkElement = getByText(/learn react/i)
    expect(linkElement).toBeInTheDocument()
})
