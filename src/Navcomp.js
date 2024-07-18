import { Link } from "react-router-dom";

function Navcomp (){
    return(
        <> 
           <nav className="navbar navbar-expand-md navbar-light bg-dark ">
          <Link href="/" className="text-decoration-none">
          <strong className="Shop">Shop</strong>

          <strong className="Cart">Cart
          
          </strong>
          </Link>
          
              
        </nav>     
        </>
    )
}
export default Navcomp;
