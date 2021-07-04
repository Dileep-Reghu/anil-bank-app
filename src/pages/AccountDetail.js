import { Fragment, useEffect } from 'react';
import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';

import HighlightedLoan from '../components/accounts/HighlightedLoan';
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';
import LoadingSpinner from '../components/UI/LoadingSpinner';

const AccountDetail = () => {
  const match = useRouteMatch();
  const params = useParams();

  const { quoteId } = params;

  const { sendRequest, status, data: loadedQuote, error } = useHttp(
    getSingleQuote,
    true
  );

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === 'pending') {
    return (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    );
  }
  console.log("Received Props to selected AccountDetail error===>",error);
  if (error) {
    return <p className='centered'>{error}</p>;
  }
  console.log("Received Props to selected AccountDetail list===>",loadedQuote);
  if (!loadedQuote.loanAmount) {
    return <p>No account found!</p>;
  }
  console.log("Received Props to selected AccountDetail list data ===>",loadedQuote);
  return (
    <Fragment>
      <HighlightedLoan name={loadedQuote.name} email={loadedQuote.email} loanType={loadedQuote.loanType} loanAmount={loadedQuote.loanAmount} phoneNumber={loadedQuote.phoneNumber} Address={loadedQuote.Address}/>      
    </Fragment>
  );
};

export default AccountDetail;
