import { Fragment, useRef, useState } from 'react';
import { Prompt } from 'react-router-dom';

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './LoanForm.module.css';

const LoanForm = (props) => {
  const [isEntering, setIsEntering] = useState(false);
  
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const loanTypeInputRef = useRef();
  const loanAmountInputRef = useRef();
  const phoneNumberInputRef = useRef();
  const addressInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;

    const enteredLoanType = loanTypeInputRef.current.value;
    const enteredLoanAmount = loanAmountInputRef.current.value;

    const enteredPhoneNumber = phoneNumberInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;

    // optional: Could validate here
   // if (!enteredName && enteredName.length !== 0) {
      //props.onAddQuote({ author: enteredAuthor, text: enteredText });
     props.onAddQuote({ name: enteredName, email: enteredEmail, loanType:enteredLoanType ,loanAmount: enteredLoanAmount,phoneNumber : enteredPhoneNumber,Address : enteredAddress});
    // } else{
    //   alert("Loan form details are empty!");
    // }    
  }

  const finishEnteringHandler = () => {
    setIsEntering(false);
  };  

  const formFocusedHandler = () => {
    setIsEntering(true);
  };

  return (
    <Fragment>
      <Prompt
        when={isEntering}
        message={(location) =>
          'Are you sure you want to leave? All your entered data will be lost!'
        }
      />
      <Card>
        <form
          onFocus={formFocusedHandler}
          className={classes.form}
          onSubmit={submitFormHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor='name'>Applicant Name</label>
            <input type='text' id='name' ref={nameInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='email'>Applicant Email Address</label>
            <input type='text' id='email' ref={emailInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='loan'>Loan Type</label>
            <input type='text' id='loan' ref={loanTypeInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='amount'>Loan Amount</label>
            <input type='text' id='amount' ref={loanAmountInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='phone'>Phone Number</label>
            <input type='text' id='phone' ref={phoneNumberInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='address'>Address</label>
            <textarea id='text' rows='5' ref={addressInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button onClick={finishEnteringHandler} className='btn'>Apply Loan</button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default LoanForm;
