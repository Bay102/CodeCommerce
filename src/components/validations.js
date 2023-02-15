// ?? Does user have to be able to sign in with created account credentials ??

export const onlyTextValidation = (value) => {
  if (value) {
    if (/^[a-zA-Z ]*$/i.test(value)) {
      return undefined;
    } else {
      return " Alphabetical letters only";
    }
  } else {
    return undefined;
  }
};

export const passwordLengthError = (value) =>
  value.length < 7 && value.length >= 1
    ? "Password must be at least 7 characters"
    : undefined;

export const matchingPasswords = (passwordState, confirmState) => {
  console.log(confirmState !== passwordState);
  console.log(confirmState , passwordState);
  return confirmState !== passwordState ?  'Passwords do not match' : undefined 
}

export const emailSymbol = (value) => {
  const regex = /@/;
  if ( regex.test(value)) {
    return undefined
  } else return 'Invalid Email Format'
}