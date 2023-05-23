import { Link, Outlet } from "react-router-dom"
import { actions } from '../features/todos/todosSlice';
import { useDispatch, useSelector } from "react-redux";

const Layout = () => {
    const userInput = useSelector(state => state.todos.userInput);
    const dispatch = useDispatch();

    const handleCreateTodo = (e) => {
        e.preventDefault();
        dispatch(actions.createTodo())
    }

    const handleSetUserInput = (userInput) => {
        dispatch(actions.setUserInput({ userInput }))
    }

    return (
        <div>
            <h1 className="flex gap-2 p-2" class="text-center font-bold text-2xl">What's the plan for today?</h1>
            <form className="flex gap-2 p-2" onSubmit={handleCreateTodo}>
                <input 
                    type="text"
                    value={userInput}
                    onChange={(e) => handleSetUserInput(e.target.value)}
                    placeholder="What to do"
                    className="p-2 w-full border-cyan-400 border-solid border-2 rounded"
                />
                <input type="submit" className="btn" value="Add" />
            </form>
            <nav >
                <ul className="flex gap-2 p-2">
                    <li >
                        <Link to={"/"}>ALL</Link>
                    </li>
                    <li>
                        <Link to={"/active"}>ACTIVE</Link>
                    </li>
                    <li>
                        <Link to={"/completed"}>COMPLETED</Link>
                    </li>
                </ul>
            </nav>
            <section className="p-2">
                <Outlet />
            </section>
        </div>
    )
}

export default Layout