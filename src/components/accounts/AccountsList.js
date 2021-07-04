import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import AccountItem from './AccountItem';
import classes from './AccountsList.module.css';

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const AccountsList = (props) => {
  console.log("Received Props to Account List ===>",props);
  const history = useHistory();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const isSortingAscending = queryParams.get('sort') === 'asc';

  const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);

  // const changeSortingHandler = () => {
  //   history.push({
  //     pathname: location.pathname,
  //     search: `?sort=${(isSortingAscending ? 'desc' : 'asc')}`
  //   });
  // };

  return (
    <Fragment>
      <div className={classes.sorting}>        
        <label htmlFor='heading'>List of Accounts</label>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <AccountItem
            key={quote.id}
            id={quote.id}
            name={quote.name}
            email={quote.email}
            loanAmount={quote.loanAmount}
            loanType={quote.loanType}
            phoneNumber={quote.phoneNumber}
            Address={quote.Address}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default AccountsList;
