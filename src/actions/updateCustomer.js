import { createAction } from 'redux-actions';
import { UPDATE_CUSTMOMER } from '../constants';
import { apiPut } from '../api';
import { urlCustomers } from '../api/urls';

export const updateCustomer = createAction(UPDATE_CUSTMOMER,
    (id, customer) => apiPut(urlCustomers, id, customer)() );