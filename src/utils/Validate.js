export const checkValidData = (
  isSignInForm,
  firstName,
  lastName,
  email,
  password
) => {
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}/.test(password);
  if (!isSignInForm) {
    if (!firstName) return "First Name is required";
    if (!lastName) return "Last Name is required";
  }
  if (!isEmailValid) return "Email is not Valid";
  if (!isPasswordValid) return "Password is not Valid";
  return null;
};
