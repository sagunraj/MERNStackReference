import React from 'react';
const authorization = false;
function CheckAuthorization(Component){
    return ()=>(authorization?<Component/>:<div>Unauthorized</div>);
}

export default CheckAuthorization;