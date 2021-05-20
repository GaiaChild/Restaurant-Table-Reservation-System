import React from 'react'
import './App.css'

import Title from './components/Title'
import Table from './components/Table'

function App() {
    return (
        <div className="container">
            <Title/>
            <div className="tables">
                <Table quantity="1"/>
                <Table quantity="2"/>
                <Table quantity="4"/>
            </div>
        </div>
    )
}

export default App
