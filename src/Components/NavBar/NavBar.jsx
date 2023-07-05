
import CartWidget from "./CartWidget/CartWidget"
const NavBar = () => {
    return(
<header>
<h3>Tienda</h3>
<nav>
  <div>
    <button>Camisetas</button>
    <button>Pelotas</button>
    <button>Accesorios</button>
  </div>
</nav>
<CartWidget/>

</header>
    )
}
export default NavBar