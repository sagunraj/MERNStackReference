import React from 'react';

const samplecomp = (props) => {
    return (
        <div>
            Records
           {props.employeeArr.map((item)=> {
               return item.name;
           })}
        </div>
    )
}

export default samplecomp;