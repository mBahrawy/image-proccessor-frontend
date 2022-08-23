import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <main className="min-vh-100 d-flex flex-column">
    <div className="container py-5 flex-grow-1 d-flex flex-column">
      <div className="row justify-content-center">
        <div className="col-10">
          <h6>Hello to images proccessor API, Please choose an action to do:</h6>
          <ul>
            <li>go to <b> <NavLink  to="create">create</NavLink></b> to create an image placeholder</li>
            <li>go to <b> <NavLink  to="edit">edit</NavLink></b> to edit an image</li>
          </ul>
        </div>
      </div>
    </div>
  </main>
  )
}

export default Home