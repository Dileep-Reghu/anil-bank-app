import { Link } from 'react-router-dom';

import classes from './NoAccountsFound.module.css';

const NoAccountsFound = () => {
  return (
    <div className={classes.noquotes}>
      <p>No accounts found!</p>
      <Link className='btn' to='/new-loan'>
        Apply Loan
      </Link>
    </div>
  );
};

export default NoAccountsFound;
