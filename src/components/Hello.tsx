const Hello=()=>{
    const handleclick=()=>{
        alert("Hello, World!");
    }
    const text ='Hello, React';

    return (
        <div>
            <button onClick={handleclick}>{text}</button>
        </div>
    );

}

export default Hello