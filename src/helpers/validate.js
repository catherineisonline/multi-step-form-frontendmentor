import { isPossiblePhoneNumber } from "react-phone-number-input";

export const validate = (target, targetIndex) => {
  let errors = {};
  const isEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const hasNumber = /\d/;
  if (targetIndex === 0) {
    let { name, email, number } = target;
    if (name.length === 0) {
      errors.name = "This field is required";
    } else if (name.length < 3) {
      errors.name = "Name should be min. 3 characters";
    } else if (hasNumber.test(name)) {
      errors.name = "Name shouldn't contain numbers";
    }
    if (email.length === 0) {
      errors.email = "This field is required";
    } else if (!isEmail.test(email)) {
      errors.email = "Invalid email format";
    }
    if (number.length === 0) {
      errors.number = "This field is required";
    } else if (!isPossiblePhoneNumber(number)) {
      errors.number = "Phone number is invalid";
    }
  } else if (targetIndex === 1) {
    let { plan } = target;
    if (plan.length === 0) {
      errors.plan = "Please, select your plan";
    }
  }
  return errors;
};
