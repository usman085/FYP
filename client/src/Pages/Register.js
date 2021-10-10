import React, { useEffect } from 'react';
import LoginImg from '../images/login.png'
import { useHistory, Link } from 'react-router-dom';
import { MenuItem, Select, InputLabel, FormControl } from '@material-ui/core';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useForm, Controller } from 'react-hook-form'
import { makeStyles } from '@material-ui/core/styles'
import { register, roles } from '../api/api'
import { toast } from 'react-toastify'
const useStyles = makeStyles((theme) => ({
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
export default function Register() {
    useEffect(() => {
        getRoles()
    }, [])
    let history = useHistory()
    const classes = useStyles()
    const [role, setRoles] = React.useState([]);
    const { control, handleSubmit, errors } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        register(data)
            .then((res) => {
                console.log(res);
                history.push('/login')
            });
    }

    const getRoles = () => {
        roles()
            .then((res) => {
                setRoles(res.data.data)
                console.log(res);
            })
            .catch((err) => {

            })
    }
    return (

        <div className="login-page container">
            <div className="row align-items-center" style={{ height: "100vh" }}>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className={classes.form}
                    noValidate>
                    <div className="col-md-6 shadow p-5">
                        <Controller
                            name="name"
                            as={
                                <TextField
                                    variant="outlined"
                                    id="name"
                                    margin="normal"
                                    error={errors.name ? true : false}

                                    fullWidth
                                    label='User Name'
                                    autoComplete="name"
                                    autoFocus
                                />
                            }
                            control={control}
                            defaultValue=""
                            rules={{
                                required: 'required',

                            }}
                        />
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
                        <FormControl error={errors.role_id ? true : false} style={{ width: "100%" }} margin="dense" variant="outlined" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Roles</InputLabel>
                            <Controller
                                defaultValue={''}

                                name="role_id"
                                as={<Select
                                    labelId="demo-simple-select-label"
                                    id="role_id"


                                >
                                    {
                                        role.map((item, index) => <MenuItem key={index} value={item._id}>{item.name}</MenuItem>)
                                    }


                                </Select>} control={control}

                                rules={{
                                    required: 'required'
                                }}
                            />

                        </FormControl>

                        <div className="form-group">
                            <label htmlFor="" className="text-danger">Already have account?</label>
                        </div>
                        <div className="from-group mt-5">
                            <Button type="submit" className="btn btn-primary btn-block text-capitalize">Sign Up</Button>

                        </div>
                    </div>
                    <div className="col-md-6 d-none d-md-block align-self-end">
                        <img className="img-fluid" src={LoginImg} alt="" />
                    </div>
                </form>
            </div>
        </div>

    );
};
