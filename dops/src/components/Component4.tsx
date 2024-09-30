import React, { useState } from 'react';
import Component5 from './Component5';

interface Component4Props {
    onCallback: () => void;
  }

const Component4: React.FC<Component4Props> = ({ onCallback }) => {
    const [isGreen, setIsGreen] = useState(false);

    const onClickHandler = () => {
        setIsGreen(!isGreen)
        onCallback()
    }

    return (
        <div className="container">
            <div className={`circle ${isGreen ? 'green' : 'red'}`}></div>
            <Component5
               // onCallback={onClickHandler}
                onCallback={onClickHandler}
            />
        </div>
    );
};

export default Component4;