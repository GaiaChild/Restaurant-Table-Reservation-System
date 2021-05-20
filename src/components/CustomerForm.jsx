import React from 'react'
import './CustomerForm.css'

export default function CustomerForm({addCustomer, listFull}) {
    let input = {value: ''}

    function alertUser(message){
        window.alert(message)
    }

    function resetValue(){
        addCustomer(input.value);
        input.value = '';
    }
  
    return (
        <div className="form">
            <input ref={node => {
                input = node;
            }}/>
            <button onClick={(event) => {
                
                if(input.value === ''){
                    alertUser("Enter customer's name before adding to the list!");
                } else if (listFull){
                    alertUser("No more tables left!")
                } else {
                    resetValue()
                }
            }}>
            <b>+</b>
            </button>
        </div>
    );
}