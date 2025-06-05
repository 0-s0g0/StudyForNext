import React,{useState, useCallback} from "react";


type Buttonprops = {
    onClick: () => void;
}
//通常の書き方
const DecrementButton = (props: Buttonprops) => {
    const { onClick } = props; //props.onClick
    console.log('decrementButton');
    return (
        <button onClick={props.onClick}>-</button>
    );
}

//useCallbackを使った書き方
const IncrementButon = React.memo((props: Buttonprops) => {
    const { onClick } = props; //props.onClick
    console.log('incrementButon');
    return (
        <button onClick={onClick}>-</button>
    );
})
const DubbleButton = React.memo((props: Buttonprops) => {
    const { onClick } = props; //props.onClick
    console.log('dubbleButton');
    return (
        <button onClick={onClick}>*2</button>
    );
})

export const CounterCall = () => {
    const [count, setCount] = useState(0);

    const decrement = ()=> {
        setCount((c) => c - 1);
    }
    const increment = ()=> {
        setCount((c) => c - 1);
    }
    const dubble = ()=> {
        setCount((c) => c * 2);
    }
    return (
        <div>
            <p>Count: {count}</p>
            <IncrementButon onClick={increment} />
            <DecrementButton onClick={decrement} />
            <DubbleButton onClick={dubble} />
        </div>
    );
}

export default CounterCall;
