import React from 'react';

type ContainerProps = {
    title: string;
    submain: string;
    children: React.ReactElement;
};



const Container=(props:ContainerProps)=>{   
    return (
        <div style={{backgroundColor: 'lightblue', padding: '20px', borderRadius: '5px'}}>
            <h1>{props.title}</h1>
            <h2>{props.submain}</h2>
            <div className="content">
                {props.children}
            </div>
        </div>
    );
}

const Parent =() => {
    return (
        <Container title="Hello" submain="Welcome to the Container Sample">
            <div>
                <p>This is the content inside the container.</p>
                <div style={{backgroundColor:'#90ee90'}}>
                    <p>main</p>
                </div>
            </div>
        </Container>
    );
}

export default Parent;