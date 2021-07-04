import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../store/auth-context';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
    // optional: redirect the user
  };
  
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Bank Application</div>
      <nav className={classes.nav}>
        <ul>
        {!isLoggedIn && (
            <li>
             <NavLink to='/auth' activeClassName={classes.active}>
              LogIn
            </NavLink>
            </li>
          )}
         {isLoggedIn && (
          <li>
            <NavLink to='/accounts' activeClassName={classes.active}>
              Account Details
            </NavLink>
          </li>
          )}
          {isLoggedIn && (
          <li>
            <NavLink to='/new-loan' activeClassName={classes.active}>
              Apply Loan
            </NavLink>
          </li>
          )}           
         {isLoggedIn && ( 
           <li>        
            <NavLink  to='/auth'  activeClassName={classes.active} onClick={logoutHandler}>
            Logout
          </NavLink>
          </li>  
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
