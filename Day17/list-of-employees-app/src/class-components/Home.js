import React from "react";
import ToggleForm from "./ToggleForm";
import Records from "./Records";
import Samplecomp from "./samplecomp";
let employeeArr = [];
class Home extends React.Component {
  state = {
    addButtonToggle: false,
  };

  showAddButton() {
    this.setState({
      addButtonToggle: !this.state.addButtonToggle
    });
  }

  addEmployee(e) {
    e.preventDefault();
    const emp = {
      name: e.target.name.value,
      address: e.target.address.value,
      salary: e.target.salary.value
    };

    employeeArr = [...employeeArr, emp];
  }

  render() {
    return (
      <div className="container">
        <h1>Employee Records System</h1>
        <hr />
        <button
          className="btn btn-info"
          onClick={this.showAddButton.bind(this)}
        >
          Add Employee
        </button>
        <button className="btn btn-danger" style={{ marginLeft: "5px" }}>
          Delete Employee
        </button>

        <div className="row">
          <div className="col-md-6">
              <Samplecomp employeeArr = {employeeArr}/>
              </div>
            <div className="col-md-6">
              {this.state.addButtonToggle ? (
                <ToggleForm
                  addEmployee={this.addEmployee.bind(this)}
                  showAddButton={this.showAddButton.bind(this)}
                />
              ) : (
                ""
              )}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
