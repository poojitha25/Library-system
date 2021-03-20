import React, {useState} from 'react';

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    //on click of submit, validate the email & password fields and submit the login page
    const handleSubmit = () => {

        if(email === '' && password === '') {
            setError(true);
        } 
    }
    return (
        <div className="login-modal">
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#login">
                Login
            </button>

            <div className="modal fade" id="login" tabIndex="-1" aria-labelledby="login" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="login">Login</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" id="email" placeholder="Enter the Mail Id" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" id="password" placeholder="Enter Password" required />
                            </div>
                            {error && <p className="alert alert-danger">Please enter all the fields</p>}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;