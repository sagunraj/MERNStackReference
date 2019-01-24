import React from "react";

const FormComponent = props => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <input type="text" name="name" placeholder="Name" />
        <input type="text" name="age" placeholder="Age" />
        <input type="text" name="roll" placeholder="Roll No." />
        <input type="submit" />
      </form>
    </div>
  );
};

export default FormComponent;
