import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { setPropsAsInitial } from '../helpers/setPropsAsInitial';

const isRequired = value => (
    !value && "Este campo es requerido"
);

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

const CustomerEdit = ({name, dni, age}) => {
    return (
        <div>
            <div>
                <h2>Edición del cliente</h2>
                <form action="">
                    <Field
                        name="name"
                        component={MyField}
                        validate={isRequired}
                        label="Nombre"></Field>
                    <Field
                        name="dni"
                        component={MyField}
                        validate={[isRequired, isNumber]}
                        label="Dni"></Field>
                    <Field name="age"
                        component="input"
                        type="number"
                        validate={isNumber}
                        label="Edad"></Field>
                </form>
            </div>
        </div>
    );
};

CustomerEdit.propTypes = {
    name: PropTypes.string.isRequired,
    dni: PropTypes.string,
    age: PropTypes.number,
};

const CustomerEditForm = reduxForm({ form: 'CustomerEdit'})(CustomerEdit);

export default setPropsAsInitial(CustomerEditForm);