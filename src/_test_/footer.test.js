import {render, screen} from "@testing-library/react"
import Footer from "../components/Footer"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"



describe("<Footer />", () => {
    it("renders without crashing", () => {
        render(
        <BrowserRouter>
        <Footer />
        </BrowserRouter>
        )
        const indexLink = screen.getByText(/Spencer/i)
        expect(indexLink).toBeInTheDocument()
    })
})