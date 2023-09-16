import React, { useEffect, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { BsApple } from 'react-icons/bs';
import {
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth, provider } from '../../Firebase/firebase-config.js';
import {
  TwitterOutlined,
  InstagramOutlined,
  FacebookOutlined,
  GithubOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

import './LoginPage.css';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import UseAuth from '../../Custom-Hooks/useAuth.js';

const LoginPage = () => {
  const navigate = useNavigate();
  const currentUser = UseAuth();
  // console.log(currentUser);

  useEffect(() => {
    if (currentUser?.email) {
      toast.success('Login Successfull');
      navigate('/dashboard');
    }
  }, [navigate, currentUser?.email]);

  const [showLogin, setShowLogin] = useState(true);

  const [emailSign, setEmailSign] = useState('');
  const [passwordSign, setPasswordSign] = useState('');

  const Signup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        emailSign,
        passwordSign
      );
      const user = userCredential.user;
      console.log('user: ', user);
      setEmailSign('');
      setPasswordSign('');
      toast.success('Sign Up Successfull');
    } catch (error) {
      console.log('error: ', error.message);
      toast.error(error.message);
    }
  };

  const Signin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        emailSign,
        passwordSign
      );
      const user = userCredential.user;
      console.log('user: ', user);
      setEmailSign('');
      setPasswordSign('');
      navigate('/dashboard');
      toast.success('Sign In Successfull');
    } catch (error) {
      console.log('error: ', error);
      toast.error(error.message);
    }
  };

  const signInWithGoogle = async () => {
    try {
      const userCredential = await signInWithPopup(auth, provider);
      const user = userCredential.user;
      const name = user.displayName;
      const email = user.email;
      const photoUrl = user.photoURL;
      // console.log('userCredential: ', userCredential);
      navigate('/dashboard');
      toast.success('Login Successfull');
    } catch (error) {
      toast.error('Error Occured');
      console.log('error: ', error);
    }
  };

  return (
    <div className='login-container'>
      <div className='board-container'>
      <h2 className='logo'>LOGO</h2>
        <h1 className='board'>Board.</h1><br/><br/><br/><br/><br/><br/><br/><br/>
        <span className="icons"style={{marginLeft:"180px",color:"white",fontSize:32}}>
            <TwitterOutlined />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <FacebookOutlined />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <GithubOutlined />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <LinkedinOutlined />
            &nbsp;
          </span>
      </div>
      <div className='login-form'>
        <div className='my-form'>
          <h1 className='page-title'>Sign {showLogin ? 'In' : 'Up'}</h1>
          <h4 className='page-text'>
            Sign {showLogin ? 'in' : 'up'} to your account
          </h4>
          <div className='login-btns-main'>
            <button
              className='login-btns google-btn'
              onClick={signInWithGoogle}
            >
              <div className='google-icon'>
                <FcGoogle size={20} />
              </div>
              <div className='btn-text'>
                Sign {showLogin ? 'in' : 'up'} with Google
              </div>
            </button>
            <button className='login-btns apple-btn'>
              <div className='apple-icon'>
                <BsApple color='#999999' size={20} />
              </div>
              <div className='btn-text'>
                Sign {showLogin ? 'in' : 'up'} with Apple
              </div>
            </button>
          </div>
          <div className='input-form'>
            <div className='input-div'>
              <label className='input-div-label'>Email address</label>
              <input
                className='input-form-input'
                type='text'
                placeholder='johndoe@gmail.com'
                value={emailSign}
                onChange={(e) => setEmailSign(e.target.value)}
              />
            </div>
            <div className='input-div'>
              <label className='input-div-label'>Password</label>
              <input
                className='input-form-input'
                type='password'
                placeholder='password1234'
                value={passwordSign}
                onChange={(e) => setPasswordSign(e.target.value)}
              />
            </div>
            <a href='/' className='forgot-text'>
              Forgot password?
            </a>
            <button
              type='submit'
              className='submit-btn'
              style={{ backgroundColor: 'black' }}
              onClick={() => {
                if (showLogin) {
                  Signin();
                } else {
                  Signup();
                }
              }}
            >
              {showLogin ? 'Sign In' : 'Sign Up'}
            </button>
          </div>

          <div className='register-link-div'>
            <div className='register-ask'>
              {showLogin
                ? `Don't have an account?`
                : `Already have an account?`}
            </div>
            <button
              className='register-link'
              onClick={() => setShowLogin(!showLogin)}
            >
              {' '}
              &nbsp;{showLogin ? `Register here` : `Login here`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
