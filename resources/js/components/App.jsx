import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Create from "./Create";
// import Example from "./Example";

function App() {
    const[data, setData] = useState([]);
    useEffect(()=>{
        //fetch data with api 
       getData();
    }, []);

    const getData = () => {
        axios.get('http://127.0.0.1:8000/api/list').then(response => {
            setData(response.data);
        });
    }
    const handleDelete = (id) => {

        axios.delete('http://127.0.0.1:8000/api/crud/'+id)
        .then(response => {
            //success redirect to index page
            getData();
        })
        .catch(err => console.warn(err));
    };
    return (
       /* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter> */
        <div className="container">
            <div className="row justify-content-center">
                <table class="table">
                    <thead>
                  
                        <tr>
                            <th>Serial</th>
                            <th>Name</th>
                            <th>email</th>
                            <th>Phone</th>
                            <th>Amount</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {data.map((data) => (
                  <tr key={data}>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td> {data.email}</td>
                    <td> {data.phone}</td>
                    <td> {data.amount}</td>
                    <td> 
                        <a  href={`/crud/${data.id}`} >Edit</a>
                        <button type='button' onClick={()=>handleDelete(data.id)}>Delete</button>
                    </td>
                  </tr>
                ))};
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default App;

if (document.getElementById('App')) {
    const Index = ReactDOM.createRoot(document.getElementById("App"));
    Index.render(
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    )
}
