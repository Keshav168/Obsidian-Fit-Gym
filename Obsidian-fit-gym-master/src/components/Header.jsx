import { useContext } from 'react';
import {Link} from 'react-router-dom';
import { loginContextObj } from '../contexts/LoginContext';


function Header(){

const {userLoginStatus,userLogout}=useContext(loginContextObj)

  return (
    <div className="bg-light py-4 w-100 mt-3 me-2">
      <ul className="nav justify-content-end fs-4">
        <li className="nav-item">
          <Link className="nav-link text-dark" to="" >Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark" to="register" >Register</Link>
        </li>

        {
          userLoginStatus===false ? (
            <li className="nav-item">
            <Link className="nav-link text-dark" to="login" >Login</Link>
          </li>
          ) :
          (
            <li className="nav-item">
            <Link className="nav-link text-dark" to="login" onClick={userLogout}>Logout</Link>
          </li>
          )
        }
        
        <li className="nav-item">
          <Link className="nav-link text-dark" to="technologies" >Categories</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header;