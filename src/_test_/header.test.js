import {render, screen} from "@testing-library/react"
import Header from "../components/Header"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"



describe("<Header />", () => {
    it("renders without crashing", () => {
        render(
        <BrowserRouter>
        <Header />
        </BrowserRouter>
        )
        const indexLink = screen.getByText(/I choose You/i)
        expect(indexLink).toBeInTheDocument()
    })
    // it("renders main header on page", () => {
    //     const div = document.createElement("div")
    //     render(
    //         <BrowserRouter>
    //             <Header />
    //         </BrowserRouter>,
    //         div
    //     )
    //     const header = screen.getByText("Pokemon!")
    //     expect(header).toBeInTheDocument()
    // })
    it("has clickable event", () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )
        userEvent.click(screen.getByText("Pokemon!"))
        expect(screen.getByText("Pokemon!", {exact: false})).toBeInTheDocument()
    })
})