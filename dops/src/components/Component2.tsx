import React, { useState } from 'react';
import Component3 from './Component3';

interface Component2Props {
    onCallback: () => void;
  }

const Component2: React.FC<Component2Props> = ({ onCallback }) => {
    const [isGreen, setIsGreen] = useState(false);

    const onClickHandler = () => {
        setIsGreen(!isGreen)
        onCallback()
    }

    return (
        <div className="container">
            <div className={`circle ${isGreen ? 'green' : 'red'}`}></div>
            <Component3 onCallback={onClickHandler}  />
        </div>
    );
};

export default Component2;