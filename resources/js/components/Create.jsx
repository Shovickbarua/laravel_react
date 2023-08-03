import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function Add() {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
       // console.log('name', name);
        console.log('amount', amount);
        console.log('email', email);
        console.log('phone', phone);
        //call the api for save
            axios.post("http://127.0.0.1:8000/api/cruds",{
            name: name,
            amount: amount,
            email: email,
            phone: phone
        })
        .then(response => {
            //success redirect to index page
            console.log(response.data)
           
        })
        .catch(err => console.warn(err));

    
    }
    return (
        <div className="container">
            <div className="row justify-content-center">
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="name" onChange={(e)=>setName(e.target.value)}/>
                    <input type="text" name="amount" placeholder="amount" onChange={(e)=>setAmount(e.target.value)} />
                    <input type="text" name="email" placeholder="email" onChange={(e)=>setEmail(e.target.value)} />
                    <input type="text" name="phone" placeholder="phone" onChange={(e)=>setPhone(e.target.value)} />
                    <button type ='submit'>Submit</button>
                </form>
                
            </div>
        </div>
    );
}

export default Add;

if (document.getElementById('Add')) {
    const Index = ReactDOM.createRoot(document.getElementById("Add"));
    Index.render(
        <React.StrictMode>
            <Add/>
        </React.StrictMode>
    )
}
