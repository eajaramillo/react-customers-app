import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { setPropsAsInitial } from '../helpers/setPropsAsInitial';
import CustomersActions from './CustomersActions';
/* const isRequired = value => (
    !value && "Este campo es requerido"
); */

const MyField = ({input, meta, type, label, name}) => (
    <div>
        <label htmlFor={name}>{label}</label>
        <input {...input} type={!type ? "text" : type}/>
        {
            meta.touched && meta.error && <span>{meta.error}</span>
        }
    </div>
);

const isNumber = value => (
    isNaN(Number(value)) && "El campo debe ser número"
);

const validate = values => {
    const error = {};

    if(!values.name) {
        error.name = "El campo nombre es requerido";
    }

    if(!values.dni) {
        error.dni = "El campo Dni es requerido";
    }

    return error;
};

const toNumber = value => value && Number(value);
const toUpper = value => value && value.ToUpperCase(value);
const toLower = value => value && value.toLowerCase(value);
const onlyGrow = (value, previousValue, values) => 
    value && previousValue && (value > previousValue ? value : previousValue);

const CustomerEdit = ({name, dni, age, handleSubmit, submiting, onBack}) => {
    return (
        <div>
            <div>
                <h2>Edición del cliente</h2>
                <form onSubmit={handleSubmit}>
                    <Field
                        name="name"
                        component={MyField}
                        label="Nombre"
                        parse={toUpper}
                        format={toLower}></Field>
                    <Field
                        name="dni"
                        component={MyField}
                        label="Dni"></Field>
                    <Field name="age"
                        component="input"
                        type="number"
                        validate={isNumber}
                        label="Edad"
                        parse={toNumber}
                        normalize={onlyGrow}></Field>
                    <CustomersActions>
                        <button type="submit" disabled={submiting}>Aceptar</button>
                        <button onClick={onBack}>Cancelar</button>
                    </CustomersActions>
                </form>
            </div>
        </div>
    );
};

CustomerEdit.propTypes = {
    name: PropTypes.string.isRequired,
    dni: PropTypes.string,
    age: PropTypes.number,
    onBack: PropTypes.func.isRequired,
};

const CustomerEditForm = reduxForm(
    {
        form: 'CustomerEdit',
        validate
    })(CustomerEdit);

export default setPropsAsInitial(CustomerEditForm);