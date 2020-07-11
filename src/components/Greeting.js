import React from 'react';
let Greeting=(props)=>{
    console.log(props);
    return(
        <div>
<h1>
    this is{props.name}This is my mail{props.mail}
        {props.children}
</h1>
</div>
    );
}
export default Greeting;