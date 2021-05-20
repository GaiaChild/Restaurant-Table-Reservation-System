import React from 'react'
import './CustomerList.css'

import Customer from './Customer'

export default function CustomerList({customers, remove}) {
    return (
        <div className="list">
            {customers.map((customer) => {
                return (
                    <Customer customer={customer} itemKey={customer.id} remove={remove}/>
                )
            })}
        </div>
    )
}