import React from 'react'
import useAuth from './../../hooks/useAuth';
import { Button, Input, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { Box } from '@mui/system';
import { useForm } from "react-hook-form";


const Login = () => {

    const [showLoginType, setShowLoginType] = React.useState('create');

    const handleRadioToggle = (event) => {
        setShowLoginType(event.target.value);
    };

    const { signInWithGoogle, setUser, setError, setIsLoading, createUserEmailAndPassword, signInEmailAndPassword } = useAuth()
    const { register, handleSubmit } = useForm();

    const handleSignInWithGoogle = () => {
        signInWithGoogle().then((result) => {
            setUser(result.user);
        }).catch((error) => {
            setError(error.message);
        }).finally(() => {
            setIsLoading(false)
            // history.push(redirect_url)
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
                // history.push(redirect_url)
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
                // history.push(redirect_url)
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

    return (
        <Box sx={{mt:5}}>
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

export default Login
