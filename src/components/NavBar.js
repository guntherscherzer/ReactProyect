import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
            <label className="navbar-brand" href="#">PokeShop</label>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <label className="nav-link active" aria-current="page" href="#">Home</label>
                </li>
                <li className="nav-item">
                <label className="nav-link" href="#">products</label>
                </li>
            </ul>
            <span className="navbar-text">
                <CartWidget></CartWidget>
            </span>
            </div>
        </div>
    </nav>
  );
}

export default NavBar;
