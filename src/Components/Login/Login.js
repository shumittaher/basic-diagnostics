import React from 'react'
import useAuth from './../../hooks/useAuth';
import { Button, Input, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Typography, Icon } from '@mui/material';
import { Box } from '@mui/system';
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from 'react-router';


const Login = () => {

    const [showLoginType, setShowLoginType] = React.useState('create');

    const location = useLocation()
    const history = useHistory()
    const redirect_url = location.state?.from || '/'

    const handleRadioToggle = (event) => {
        setShowLoginType(event.target.value);
    };

    const { user, signInWithGoogle, setUser, setError, setIsLoading, createUserEmailAndPassword, signInEmailAndPassword, logOut } = useAuth()

    const { register, handleSubmit } = useForm();

    const handleSignInWithGoogle = () => {
        signInWithGoogle().then((result) => {
            setUser(result.user);
        }).catch((error) => {
            setError(error.message);
        }).finally(() => {
            setIsLoading(false)
            history.push(redirect_url)
        });
    }

    const handleEmailCreation = (data) => {
        const { enteredEmail, enteredPassword } = data
        createUserEmailAndPassword(enteredEmail, enteredPassword)
            .then((userCredential) => {
                setUser(userCredential.user)
            })
            .catch((error) => {
                setError(error.message);
            }).finally(() => {
                setIsLoading(false)
                history.push(redirect_url)
            });
    }

    const handleEmailSignIn = (data) => {
        const { enteredEmail, enteredPassword } = data
        signInEmailAndPassword(enteredEmail, enteredPassword)
            .then((userCredential) => {
                setUser(userCredential.user)
            })
            .catch((error) => {
                setError(error.message);
            }).finally(() => {
                setIsLoading(false)
                history.push(redirect_url)
            });
    }

    const unchangedPart = () => {
        return <div><Input sx={{
            display: 'block',
            px: 2,
        }} placeholder="Your Email Please" {...register("enteredEmail")} />
            <Input sx={{
                display: 'block',
                px: 2,
            }} placeholder="Your Password Please"{...register("enteredPassword", { required: true })} />
        </div>
    }

    const showLoginOptions = () => {
        if (showLoginType === 'create') {
            return <div>
                <h4>Create Account</h4>
                <form onSubmit={handleSubmit(handleEmailCreation)}>
                    {unchangedPart()}
                    <Button
                        sx={{
                            m: 5
                        }}
                        type="submit"
                        variant="contained">Create New Account</Button>
                </form>

            </div>
        } else {
            return <div>
                <h4>Login with Existing</h4>
                <form onSubmit={handleSubmit(handleEmailSignIn)}>
                    {unchangedPart()}
                    <Button
                        sx={{
                            m: 5
                        }}
                        type="submit"
                        variant="contained">Sign In Existing</Button>
                </form>

            </div>
        }

    }


    const newLogin = () => {

        return (
            <Box sx={{ mt: 5, mb: 15 }}>
                <Box sx={{
                    justifyContent: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: {
                        xs: 'column',
                        sm: 'row',
                    }
                }}>
                    <Box sx={{
                        justifyContent: 'center',
                        display: 'flex',
                        width: 400,
                        alignItems: 'center',
                    }}>
                        <Button onClick={handleSignInWithGoogle}
                            variant="contained">Google Sign In</Button>
                    </Box>

                    <Box sx={{ my: 5 }}><h1>OR</h1></Box>
                    <Box sx={{
                        justifyContent: 'center',
                        display: 'flex',
                        width: 400,
                    }}>
                        <div>
                            <div>
                                <FormControl component="fieldset">
                                    <FormLabel component="legend">Email / Password</FormLabel>
                                    <RadioGroup row
                                        value={showLoginType}
                                        onChange={handleRadioToggle}
                                    >
                                        <FormControlLabel value="create" control={<Radio />} label="Create New" />
                                        <FormControlLabel value="login" control={<Radio />} label="Log In" />
                                    </RadioGroup>
                                </FormControl>

                                {showLoginOptions()}

                            </div>
                        </div>
                    </Box>

                </Box>

            </Box >

        )
    }
    const handleSignOut = () => {
        logOut()
    }

    const alreadyLogedIn = () => {
        return (<Box sx={{ mt: 15, mb: 15 }}>
            <Typography variant="h3" component="div"> You Are Already Logged In </Typography>
            <Button sx={{ mt: 5, mb: 15 }} onClick={handleSignOut} variant="contained" size="large">Log out ? <Icon style={{ cursor: 'pointer', marginLeft: '3px' }} baseClassName="fas" className="fa-sign-out-alt" /> </Button>
        </Box>)
    }

    const finalReturn = () => {
        return user.email ? alreadyLogedIn() : newLogin()
    }

    return (
        finalReturn()
    )
}

export default Login
