import {render, screen} from "@testing-library/react"
import NotFound from "../pages/NotFound"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"



describe("<NotFound />", () => {
    it("renders without crashing", () => {
        render(
        <BrowserRouter>
        <NotFound />
        </BrowserRouter>
        )
        const indexLink = screen.getByText(/Error/i)
        expect(indexLink).toBeInTheDocument()
    })
})