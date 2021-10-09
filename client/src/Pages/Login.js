import React from 'react';
import LoginImg from '../images/login.png'
import { useHistory, Link } from 'react-router-dom';
// import { login } from '../../api/api.js'
import { toast } from 'react-toastify'
import Button from '@material-ui/core/Button'
export default function LoginForm() {
    let history = useHistory()
    const handleClick = () => {
        localStorage.setItem(
            'auth_user', 'okay'
            // JSON.stringify({
            //     token: res.data.token,
            //     user: res.data.user,
            // })
        )
        history.push('/doctor/dashboard')
        // login(data)
        //     .then((res) => {
        //         // console.log(res);
        //         toast.success(res.data.message, {
        //             position: 'top-right',
        //             autoClose: 5000,
        //             hideProgressBar: false,
        //             closeOnClick: true,
        //             pauseOnHover: true,
        //             draggable: true,
        //             progress: undefined,
        //         })
        //         localStorage.setItem(
        //             'auth_user',
        //             JSON.stringify({
        //                 token: res.data.token,
        //                 user: res.data.user,
        //             })
        //         )
        //         history.push('/restaurant')
        //     })
        //     .catch((err) => {
        //         // console.log(err);
        //         toast.error(err.response.data.message, {
        //             position: 'top-right',
        //             autoClose: 5000,
        //             hideProgressBar: false,
        //             closeOnClick: true,
        //             pauseOnHover: true,
        //             draggable: true,
        //             progress: undefined,
        //         })
        //     })
    }
    return (
        <div className="login-page container">
            <div className="row align-items-center" style={{ height: "100vh" }}>
                <div className="col-md-6 shadow p-5">
                    <div className="form-group">
                        <label htmlFor="">User Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Password</label>
                        <input type="password" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="" className="text-danger">Forgot your password?</label>
                        <Link to="/register" >Not Have an account</Link>
                    </div>
                    <div className="from-group mt-5">
                        <Button onClick={handleClick} className="btn btn-primary btn-block text-capitalize">Sign In</Button>
                    </div>
                </div>
                <div className="col-md-6 d-none d-md-block align-self-end">
                    <img className="img-fluid" src={LoginImg} alt="" />
                </div>
            </div>
        </div>
    )
}

