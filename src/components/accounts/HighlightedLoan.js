import classes from './HighlightedLoan.module.css';

const HighlightedLoan = (props) => {
  console.log("Received Props to HighlightedLoan ===>",props);

  return (
    <figure className={classes.quote}>
      <p>Name: {props.name}</p>
      <p>Email: {props.email}</p>
      <p>Loan Type: {props.loanType}</p>      
      <p>Phone Number: {props.phoneNumber}</p>
      <p>Address: {props.Address}</p>
      <figcaption>Loan Amount: ${props.loanAmount}</figcaption>
    </figure>
  );
};

export default HighlightedLoan;
