import React from 'react';

const Name = () => {
    const handleonchange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        console.log("Name changed");
    }
    return (
        <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" onChange={handleonchange} />
        </div>
    )

}

export default Name;