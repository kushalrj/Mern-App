import React ,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
  const [credentials, setcredentials] = useState({email:"",password:""})
  let navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch("http://localhost:5000/api/loginuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json();
        if (!json.success) {
            alert(json.error || 'Error in logging in');
        } 
        if(json.success) {
          localStorage.setItem("authToken", json.authToken);
          console.log(localStorage.getItem("authToken"))
            navigate("/");
        }
    } catch (error) {
        console.error(error);
        alert('An error occurred, please try again later');
    }
}


  const onChange=(e)=>{
    setcredentials({...credentials,[e.target.name]:e.target.value})
  }
  return (
    <>
    <div className='container'>
    <form onSubmit={handleSubmit}>

  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={credentials.email} onChange={onChange}/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPasswords1" name='password' value={credentials.password} onChange={onChange}/>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
  <Link to="/creatuser" className='m-3 btn btn-danger'>I'm a new user</Link>
</form>

</div>
    </>
  )
}
