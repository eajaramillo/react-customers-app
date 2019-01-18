import React from 'react';
import PropTypes from 'prop-types';
import CustomersListItem from './CustomersListItem';

const CustomersList = ({customers}) => {
    return (
        <div>
            <div className="customers-list">
            {
                customers.map(c => 
                    <CustomersListItem
                        key={c.dni}
                        name={c.name}
                        editAction={'Editar'}
                        delAction={'Eliminar'
                        urlpath=urlpath}
                    />
                )
            }
            </div>
        </div>
    );
};

CustomersList.propTypes = {
    customers: PropTypes.array.isRequired,
    urlpath: PropTypes.string.isRequired,
};

export default CustomersList;