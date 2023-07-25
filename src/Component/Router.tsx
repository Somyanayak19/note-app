import { Suspense } from "react"
import { Routes, Route } from "react-router"
import CreateNote from "./CreateNote"
import ViewNotes from "./ViewNotes"

const Router = () => {
    return <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path='/' element={<CreateNote />}></Route>
            <Route path='/notes' element={<ViewNotes />}></Route>
        </Routes>

    </Suspense>
}

export default Router;