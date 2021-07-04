import { Link } from 'react-router-dom';

import classes from './AccountItem.module.css';

const AccountItem = (props) => {
  console.log("Received Props to AccountItem ===>",props);

  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.loanType}</p>
        </blockquote>
        <figcaption>$ {props.loanAmount}</figcaption>
      </figure>
      <Link className='btn' to={`/accounts/${props.id}`}>
        View Details
      </Link>
    </li>
  );
};

export default AccountItem;
