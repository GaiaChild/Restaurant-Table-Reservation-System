import React from 'react'
import './Customer.css'

export default function Customer({customer, itemKey, remove}) {
    return (
        <div className="customer" key={itemKey} onClick={() => remove(customer.id)}>
            {customer.text}
        </div>
    )
}
