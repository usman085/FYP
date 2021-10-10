import React from 'react';
import LoginImg from '../images/login.png'
import { useHistory, Link } from 'react-router-dom';
import { login } from '../api/api'
import { toast } from 'react-toastify'
import { useForm, Controller } from 'react-hook-form'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles((theme) => ({
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}))
export default function LoginForm() {
    let history = useHistory()
    const classes = useStyles()
    const [lengthTrue, setLengthTrue] = React.useState({})
    const { control, handleSubmit, errors } = useForm()
    const onSubmit = (data) => {
        console.log(data)
        login(data)
            .then((res) => {
                console.log(res);
                toast.success(res.data.message, {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
                localStorage.setItem(
                    'auth_user',
                    JSON.stringify({
                        token: res.data.data.token,
                        user: res.data.data.user,
                    })
                )
                history.push('/doctor/dashboard')
            })
            .catch((err) => {
                // console.log(err);
                toast.error(err.response.data.message, {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
            })
    }
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={classes.form}
            noValidate>
            <div className="login-page container">
                <div className="row align-items-center" style={{ height: "100vh" }}>
                    <div className="col-md-6 shadow p-5">
                        <Controller
                            name="email"
                            as={
                                <TextField
                                    variant="outlined"
                                    id="email"
                                    margin="normal"
                                    error={errors.email ? true : false}

                                    fullWidth
                                    label='Email'
                                    autoComplete="email"
                                    autoFocus
                                />
                            }
                            control={control}
                            defaultValue=""
                            rules={{
                                required: 'required',
                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            }}
                        />
                        <Controller
                            name="password"
                            as={
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    error={errors.password ? true : false}

                                    fullWidth
                                    label='Password'
                                    type="password"
                                    id="password"

                                    autoComplete="current-password"
                                />
                            }
                            control={control}
                            defaultValue=""
                            rules={{
                                required: 'required',
                            }}
                        />
                        <div className="form-group">
                            <label htmlFor="" className="text-danger">Forgot your password?</label>
                            <Link to="/register" >Not Have an account</Link>
                        </div>
                        <div className="from-group mt-5">
                            <Button type="submit" className="btn btn-primary btn-block text-capitalize">Sign In</Button>
                        </div>
                    </div>
                    <div className="col-md-6 d-none d-md-block align-self-end">
                        <img className="img-fluid" src={LoginImg} alt="" />
                    </div>
                </div>
            </div>
        </form>

    )
}

