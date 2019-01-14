import React from 'react';

const ToggleForm = (props) => {
        return(<div>
            <br/>
                <h3>Add a new employee</h3>
                <hr/>
                <form className="form-group" onSubmit = {props.addEmployee}>
                    <input className="form-control" type="text" name="name" placeholder="Name of the employee"/><br/>
                    <input className="form-control" type="text" name="address" placeholder="Address of the employee"/><br/>
                    <input className="form-control" type="text" name="salary" placeholder="Salary of the employee"/><br/>
                    <input type="submit" className="btn btn-primary"/>
                </form>
        </div>)
    }

export default ToggleForm;