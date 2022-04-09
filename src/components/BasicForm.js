import useInput from '../hooks/use-input';

 const isNotEmpty = (value)=> value.trim() !== '';
 const isEmail = (value)=> value.includes('@');
 
const BasicForm = (props) => {
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError :firstNameHasError,
    valueChangeHandler : firstNameChangedHandler,
    inputBlurHandler : firstNameBlurHandler,
    reset : firstNameReset
  } = useInput(isNotEmpty)
  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError :lastNameHasError,
    valueChangeHandler : lastNameChangedHandler,
    inputBlurHandler : lastNameBlurHandler,
    reset : lastNameReset
  } = useInput(isNotEmpty)
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError :emailHasError,
    valueChangeHandler : emailChangedHandler,
    inputBlurHandler : emailBlurHandler,
    reset : emailReset
  } = useInput(isEmail)

  let formIsValid = false;
  if(firstNameIsValid && lastNameIsValid && emailIsValid){
    formIsValid = true;

  }

  const firstNameClasses = firstNameHasError
    ? 'form-control invalid'
    : 'form-control';
  const lastNameClasses = lastNameHasError
    ? 'form-control invalid'
    : 'form-control';

  const emailClasses = emailHasError
    ? 'form-control invalid'
    : 'form-control';


   const submitHandler = (e)=>{
     e.preventDefault()

     if(!formIsValid){
       return;
     }


    firstNameReset()
    lastNameReset()
    emailReset()
   }

  return (
    <form onSubmit={submitHandler}>
      <div className={firstNameClasses}>
        <div className='form-control'>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name'
          onChange={firstNameChangedHandler}
          onBlur={firstNameBlurHandler}
          value={firstNameValue} />
           {firstNameHasError && <p className='error-text'>FirstName must not be empty.</p>}
          </div>
          <div className={lastNameClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name'
           onChange={lastNameChangedHandler}
           onBlur={lastNameBlurHandler}
           value={lastNameValue} />
           {lastNameHasError && <p className='error-text'>lastName must not be empty.</p>}
          </div>
          </div>
          <div className={emailClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name'
         onChange={emailChangedHandler}
         onBlur={emailBlurHandler}
         value={emailValue} />
        {emailHasError && <p className='error-text'>email must not be empty.</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
