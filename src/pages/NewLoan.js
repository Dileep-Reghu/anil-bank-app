import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import LoanForm from '../components/accounts/LoanForm';
import useHttp from '../hooks/use-http';
import { addQuote } from '../lib/api';

const NewLoan = () => {
  const { sendRequest, status } = useHttp(addQuote);
  const history = useHistory();

  useEffect(() => {
    if (status === 'completed') {
      history.push('/accounts');
    }
  }, [status, history]);

  const addLoanHandler = (quoteData) => {
    console.log(quoteData);
    sendRequest(quoteData);
  };

  return <LoanForm isLoading={status === 'pending'} onAddQuote={addLoanHandler} />;
};

export default NewLoan;
