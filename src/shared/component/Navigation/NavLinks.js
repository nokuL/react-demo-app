import React, {use, useContext} from "react";
import { NavLink } from 'react-router-dom';
import './NavLinks.css';
import { AuthContext } from "../../context/authContext";



const NavLinks = props =>{

    const auth = useContext(AuthContext);
    return (
        <ul className="nav-links">
            <li>
                <NavLink to="/" exact>All Users</NavLink>
            </li>
            {auth.isLoggedIn &&  <li>
                <NavLink to="/u1/places">My Places</NavLink>
            </li> }
            {
               auth.isLoggedIn && <li>
                {/* Updated to match route path */}
                <NavLink to="/places/newPlace">Add Place</NavLink>
            </li>

            }
           
            {
               ! auth.isLoggedIn &&
               <li>
                <NavLink to="/auth">Authenticate</NavLink>
            </li>
            }
            {
                auth.isLoggedIn && <li>
                    <button onClick={auth.logout}>Logout</button>
                </li>
            }
            
        </ul>
    )
}

export default NavLinks;