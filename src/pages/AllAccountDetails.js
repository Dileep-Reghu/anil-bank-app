import { useEffect } from 'react';

import AccountsList from '../components/accounts/AccountsList';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import NoAccountsFound from '../components/accounts/NoAccountsFound';
import useHttp from '../hooks/use-http';
import { getAllQuotes } from '../lib/api';


const AllAccountDetails = () => {
  const { sendRequest, status, data: loadedQuotes, error } = useHttp(
    getAllQuotes,
    true
  );

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === 'pending') {
    return (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className='centered focused'>{error}</p>;
  }

  if (status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <NoAccountsFound />;
  }


  console.log("Accounts Received",loadedQuotes);
  return <AccountsList quotes={loadedQuotes} />;
};

export default AllAccountDetails;
