import React, {useState} from 'react';

function Input(){
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(0);

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
    }

    return (
        <>
            <input type="text" value={name} onChange={handleNameChange} />
            <p>Name: {name}</p>
            <input type="number" value={quantity} onChange={handleQuantityChange} />
            <p>Quantity: {quantity}</p>
        </>
    );
}

export default Input;