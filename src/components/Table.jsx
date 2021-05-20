import React from 'react'
import './Table.css'

import SubTitle from './SubTitle'
import CustomerList from './CustomerList'
import CustomerForm from './CustomerForm'


window.id = 0;

class Table extends React.Component{
    constructor(props){
        // Pass props to parent class
        super(props);
        // Set initial state
        this.state = {
            data: []
        }
        this.handleRemove = this.handleRemove.bind(this)
        this.addCustomer = this.addCustomer.bind(this)
    }
    // Add Customer handler
    addCustomer(val){
        // Assemble data
        const Customer = {text: val, id: window.id++}
        // Update data
        // Update state
        this.setState(() => {
            console.log(this.state.data)
            return {data: [...this.state.data, Customer]}
        });
        
    }
    // Handle remove
    handleRemove(id){
        // Filter all Customers except the one to be removed
        const remainder = this.state.data.filter((Customer) => Customer.id !== id);
        // Update state with filter
        this.setState({data: remainder});
    }

    render(){
        // Render JSX
        return (
            <div className="table">
                <SubTitle className="table_subtitle" text={"Table - for - " + this.props.quantity}/>
                <CustomerForm addCustomer={this.addCustomer} listFull={this.state.data.length === 6}/>
                <CustomerList 
                    customers={this.state.data} 
                    remove={this.handleRemove}
                />
            </div>
        );
    }
}

export default Table