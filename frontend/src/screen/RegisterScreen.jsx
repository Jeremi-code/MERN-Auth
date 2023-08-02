import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {Form, Button, Row, Col, Container} from 'react-bootstrap'
import FormContainer from '../component/FormContainer'
import {useDispatch, useSelector} from 'react-redux'
import {toast} from 'react-toastify'
import Loader from '../component/Loader'
import {useRegisterMutation} from '../slices/userApiSlice'
import {setCredentials} from '../slices/authSlice'
import { useNavigate } from 'react-router-dom'

const RegisterScreen = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {userInfo} = useSelector((state)=>state.auth)
    const [register,{isLoading}] = useRegisterMutation()

    useEffect(() => {
        if(userInfo){
            navigate('/')
        }
    }, [navigate,userInfo])

    const submitHandler = async (e) =>{
        e.preventDefault()
        if(password !== confirmPassword){
            toast.error('Password do not match')
        } else {
            try {
                const res = await register({name,email,password}).unwrap()
                dispatch(setCredentials({...res}))
                navigate('/')
            } catch (err) {
                toast.error('Invalid Credentials')
            }
        }
    }

    return (
        <FormContainer>
            <h1>Sign Up</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='name' className='my-2'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type='text' placeholder='Enter name' value={name} onChange={(e)=>setName(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='email' className='my-2'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type='email' placeholder='Enter email' value={email} onChange={(e)=>setEmail(e.target.value)}>

                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='password' className='my-2'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='Enter password' value={password} onChange={(e)=>setPassword(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='confirmPassword' className='my-2'>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type='password' placeholder='Confirm password' value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                { isLoading && <Loader/>}

                <Button type='submit' variant='primary' className='mt-3'>Sign Up</Button>
                <Row className='py-3'>
                    <Col>
                        Already have an account? <Link to='/login'>Login</Link>
                    </Col>
                </Row>
            </Form>
        </FormContainer>


  )
}

export default RegisterScreen