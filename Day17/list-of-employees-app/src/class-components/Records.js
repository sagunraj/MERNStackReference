import React from 'react';

class Records extends React.Component {

    render(){
        return(
            <div>
                <h3>Records</h3>
                <hr/>
                <table className="table table-responsive table-hover table-striped">
                <thead>
                    <tr>
                    <th>S.N.</th>
                    <th>Employee Name</th>
                    <th>Address</th>
                    <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{this.props.employeeArr}</td>
                        <td>1.</td>
                        <td>1.</td>
                        <td>1.</td>

                    </tr>
                    </tbody>
            </table>
          </div>
        )
    }
}

export default Records;