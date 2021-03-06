export const SET_ERROR = 'setError';

// Error definitions

// Login (class 1)
export const ERROR_LOGIN_NOT_FOUND = 101;
export const ERROR_LOGIN_FETCH_FAILED = 102;
export const ERROR_LOGIN_FAILED = 103;

// Transfer (class 2)
export const ERROR_TRANSFER_FAILED = 201;
export const ERROR_NEW_TRANSFER_ACCOUNTS_FETCH_FAILED = 202;

// Accounts (class 3)
export const ERROR_ACCOUNTS_FETCH_FAILED = 301;

// Balance (class 4)
export const ERROR_BALANCE_FETCH_FAILED = 401;
export const ERROR_BALANCE_ACCOUNTS_FETCH_FAILED = 402;

// Contacts (class 5)
export const ERROR_CONTACTS_FETCH_FAILED = 501;
export const ERROR_ADD_CONTACT_FAILED = 502;
export const ERROR_IMPORT_CONTACT_FAILED = 503;


export const setError = (code) => ({
  type: SET_ERROR,
  code,
  time: new Date().getTime()
});
