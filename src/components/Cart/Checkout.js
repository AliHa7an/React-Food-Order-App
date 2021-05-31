
import { useForm } from "react-hook-form";
import classes from './Checkout.module.css';



const Checkout = (props) => {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm({ mode: 'onChange' });




  const confirmHandler = (data) => {
    if (!isValid) {
      return;
    }

    props.onConfirm({
      name: data.name,
      street: data.street,
      city: data.city,
      postalCode: data.postalCode
    });

  };

  const nameControlClasses = `${classes.control} ${!errors.name ? '' : classes.invalid}`;
  const streetControlClasses = `${classes.control} ${!errors.street ? '' : classes.invalid}`;
  const postalCodeControlClasses = `${classes.control} ${!errors.postalCode ? '' : classes.invalid}`;
  const cityControlClasses = `${classes.control} ${!errors.city ? '' : classes.invalid}`;

  return (
    <form className={classes.form} onSubmit={handleSubmit(confirmHandler)}>
      <div className={nameControlClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name'  {...register("name", { minLength: { value: 3, message: 'Please enter a valid username!' }, required: 'Name is required!' })} />
        {errors.name && <p>{errors.name.message}</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' {...register("street", { minLength: { value: 3, message: 'Please enter a valid street!' }, required: 'Street is required!' })} />
        {errors.street && <p>{errors.street.message}</p>}
      </div>
      <div className={postalCodeControlClasses}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' {...register("postalCode", { minLength: { value: 5, message: 'Please enter a valid postal code (5 characters long)!' }, maxLength: { value: 5, message: 'Please enter a valid postal code (5 characters long)!' } })} />
        {errors.postalCode && <p>{errors.postalCode.message}</p>}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city'   {...register("city", { required: 'Please enter your city name!' })} />
        {errors.city && <p>{errors.city.message}</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit} disabled={!isValid}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
