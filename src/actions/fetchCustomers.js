import { FETCH_CUSTOMERS } from './../constants';
import { createAction } from 'redux-actions';

const customers = [
    {   "dni": "27000000",
        "name": "Pepito",
        "age": 37
    },
    {   "dni": "30000000",
        "name": "Fulanito",
        "age": 35
    },
    {   "dni": "33000000",
        "name": "Jesús",
        "age": 32
    }
];

export const fetchCustomers = createAction(FETCH_CUSTOMERS, () => customers );