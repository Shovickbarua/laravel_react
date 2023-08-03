import React, { useEffect, useState } from 'react';
//import { useNavigate } from "react-router-dom";
import ReactDOM from 'react-dom/client';

function Update() {
    // const queryString = window.location.search;
    // const urlParams = new URLSearchParams(queryString);
    const url = window.location.href;
    console.log('url', url);
    const v = url.slice(-2);
    console.log(v);
    let id = v;
     const [name, setName] = useState('');
     const [amount, setAmount] = useState('');
     const [email, setEmail] = useState('');
     const [phone, setPhone] = useState('');
    const[data, setData] = useState([]);
    useEffect(()=>{
         axios.get('http://127.0.0.1:8000/api/edit/'+id).then(response => {
            //  setData(response.data);
            // console.log(response.data)
            setName(response.data.name)
            setAmount(response.data.amount)
            setEmail(response.data.email)
            setPhone(response.data.phone)
         });
    }, []);
    
    const handleSubmit = (e) => {
        e.preventDefault();
       // console.log('name', name);
        // console.log('amount', amount);
        // console.log('email', email);
        // console.log('phone', phone);
        //call the api for save
            axios.put("http://127.0.0.1:8000/api/crud/"+id,{
            name: name,
            amount: amount,
            email: email,
            phone: phone
        })
        .then(response => {
            //success redirect to index page
           // return <useNavigate to='\list'/>
           window.location.href = 'http://127.0.0.1:8000/table'
        })
        .catch(err => console.warn(err));

    
    }
    return (
        <div className="container">
            <div className="row justify-content-center">
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="name" value={name} onChange={(e)=>setName(e.target.value)}/>
                    <input type="text" name="amount" placeholder="amount" value={amount} onChange={(e)=>setAmount(e.target.value)} />
                    <input type="text" name="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                    <input type="text" name="phone" placeholder="phone" value={phone} onChange={(e)=>setPhone(e.target.value)} />
                    <button type ='submit'>Submit</button>
                </form>
                
            </div>
        </div>
    );
}

export default Update;

if (document.getElementById('Update')) {
    const Index = ReactDOM.createRoot(document.getElementById("Update"));
    Index.render(
        <React.StrictMode>
            <Update/>
        </React.StrictMode>
    )
}
