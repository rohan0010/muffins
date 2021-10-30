import PropTypes from 'prop-types';
import React, { Fragment, useState, useEffect } from 'react';
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';
import MetaTags from 'react-meta-tags';
import { useDispatch } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import LayoutOne from '../../layouts/LayoutOne';
import SuccessModal from "./SuccessModal";

import Breadcrumb from '../../wrappers/breadcrumb/Breadcrumb';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './style.css';

const LoginRegister = ({ location }) => {
  // console.log("user_string", user_string);
  const [successOpen, setSuccessOpen]=useState(false);

  useEffect(() => {
    document.oncontextmenu = function (e) {
      if (e.button == 2) {
        e.preventDefault();
        return false;
      }

    }
  }, [])
  const { addToast } = useToasts();
  const dispatch = useDispatch();
  const[seconds,setseconds]=useState(0)
  
  useEffect(() => {
    if(seconds===0)
    {
      return
    }
    const intervalId = setInterval(() => {
      setseconds(seconds - 1);
    }, 1000);
    return () => clearInterval(intervalId);
    }, [seconds]);
  const { pathname } = location;
  const [signin, setSignin] = useState({
    loginId: '',
    loginPassword: '',
    rememberMe: '',
    loading: false,
    redirectToReferrer: false,
  });
  const [signup, setSignup] = useState({
    userEmail: '',
    mobile: '',
    password: '',
    role: '',
    firstName: '',
    lastName: '',
    referCode: '',
    yourfirstName: '',
    yourlastName: '',
    youruserEmail: '',
    yourmobile: '',
  });
  const {
    loginId,
    loginPassword,
    rememberMe,
    loading,
    redirectToReferrer,
  } = signin;
  const { userEmail, mobile, password, firstName, lastName, yourfirstName,
  yourlastName,
  youruserEmail,
  yourmobile, referCode } = signup;
  const [error, setError] = useState('');
  const [error1, setError1] = useState('');
  const [session, setsession] = useState('');
  const [show, setShow] = useState(false);
  const [otp, setOtp] = useState(false);
  const [send, setSend] = useState(false);
  const [redirectToHome, setRedirectToHome] = useState(false);
  const [timeCount, setTimeCount] = useState(false);
  const [otpWrong, setOtpWrong] = useState('')
  const [passwordHide, setPasswordHide] = useState(true);

  const passwordShow = () => {
    setPasswordHide(false);
  }
  const passwordShowHide = () => {
    setPasswordHide(true);
  }
 const[usethis,setusethis]=useState("")
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const referral = urlParams.get('referCode');
  const [mobileError, setMobileError] = useState('');

  useEffect(() => {
    setSignup({ ...signup, referCode: referral });
  }, []);


  const [mobileSignup, setMonileSignup] = useState({
    MobileNumber: '',
    CountryCode: '+91',
  });

  const {
    MobileNumber,
    CountryCode,
  } = mobileSignup;


  const [otpSignup, setOtpSignup] = useState({
    otpCode: '',
  });
  const {
    otpCode
  } = otpSignup;

  const getCountTimeout = () => {
    setTimeout(() => {
      setTimeCount(true);
    }, 25000);
  };

  const handleMobileUpdateChange = (name) => (event) => {
    setMonileSignup({ ...mobileSignup, error: false, [name]: event.target.value });
  };

  const handleOtpChange = (name) => (event) => {
    setOtpSignup({ ...otpSignup, error: false, [name]: event.target.value });
  };


  const mobileUpdateSubmit = (event) => {
    event.preventDefault();
   
  };

  const handleOtpSubmit = (event) => {
    event.preventDefault();
    setOtpSignup({ ...otpSignup, error: false, loading: true });
    // if (otpSignup.otpCode.length < 6) {
    //   setError('otp should be equal to 6');
    // } else {
      let obj = {
        mobile:signup.mobile,
        code: otpSignup.otpCode
      };
      
    
      // return fetchApi('/profile/verifyOTP2', obj, {}, false, 'post')
      //   .then((response) => {
      //     console.log("response-->", response);
      //     console.log("Response", response.data.message);
      //     if (response.data.message === 'success') {
      //       addToast('Login Successfull', {
      //         appearance: 'success',
      //         autoDismiss: true,
      //       });
      //       setOtp(true);
      //       console.log("verify otp");
      // localStorage.setItem(
      //           'access_token',
      //           response.data.userData.sessionId
      //         );
      //         localStorage.setItem('userId', response.data.userData.userId);
      //         localStorage.setItem('useremail', response.data.userData.userEmail);
      //         localStorage.setItem('username', response.data.userData.username);
      //         localStorage.setItem(
      //           'fullname',
      //           response.data.userData.userInfo.firstName.concat(
      //             response.data.userData.userInfo.lastName
      //           )
      //         );
      //         authenticate(response.data.userData.sessionId, () => {
      //           setSignin({
      //             ...signin,
      //             redirectToReferrer: true,
      //           });
      //           // setShow(true);
      //         });
      //       setRedirectToHome(true);

      //     } else {
      //       console.log('rjah', response.data.message);
      //       // setRedirectToHome(true);
      //       setOtpWrong('Please Enter Valid OTP.')
      //     }
      //   })
      //   .catch((err) => console.log('error ->', err));
   
  };


  // -----------------------------------------------------

  const handleClose = () => {
    setShow(false);
  };
  // const handleShow = () => setShow(true);

  const responseFacebook = (response) => {
    // console.log(response);
    //anything else you want to do(save to localStorage)...
  };
  const handleSubmit22 = event => {
    
  };
  const handleChange = (name) => (event) => {
    setSignin({ ...signin, error: false, [name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  
  };

  const handleChange1 = (name) => (event) => {
    setSignup({ ...signup, error: false, [name]: event.target.value });
  };
  const handleSubmit1 = (event) => {
    event.preventDefault();
    setSuccessOpen(true)
  
  };
  const redirectUser = () => {
    if (redirectToHome) {
      return <Redirect to={'/'} />;
    }
  };
  const openSuccess=()=>{
      setSuccessOpen(false)
      setSignup({ userEmail: '',
      mobile: '',
      password: '',
      role: '',
      firstName: '',
      lastName: '',
      referCode: '',
      yourfirstName: '',
    yourlastName: '',
    youruserEmail: '',
    yourmobile: '',})
  }

  const maxLengthCheck = (object) => {
    if (object.target.value.length > object.target.maxLength) {
      object.target.value = object.target.value.slice(0, object.target.maxLength)
    }
  }



  return (
    <Fragment>
      <MetaTags>
        <title>Muffin Shield</title>
        <meta
          name='description'
          content='Muffin Shield'
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + '/'}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
     Registration for Others
      </BreadcrumbsItem>
      <LayoutOne >
        {/* breadcrumb */}
        <Breadcrumb />
        {successOpen ? <SuccessModal onClick={openSuccess} message="Thank You! Your Info Recorded!" /> :null}

        <div className='login-register-area pt-100 pb-100'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-7 col-md-12 ml-auto mr-auto'>
                <div className='login-register-wrapper'>
                  <div className='login-form-container'>
                    <div className='login-register-form'>
                      <form                                         autoComplete={'' + Math.random()}
 onSubmit={handleSubmit1}>
      <input
                          type='text'
                          name='your-first-name'
                          placeholder='Your First Name'
                          onChange={handleChange1('yourfirstName')}
                                                                  autoComplete={'' + Math.random()}

                          value={yourfirstName}
                          required={true}
                        />
                          <input
                          type='text'
                          name='your-last-name'
                          placeholder='Your Last Name'
                                                                  autoComplete={'' + Math.random()}

                          onChange={handleChange1('yourlastName')}
                          value={yourlastName}
                        />
                          <input
                          type='email'
                          name='user-email'
                          placeholder='Your Email'
                                                                  autoComplete={'' + Math.random()}

                          onChange={handleChange1('youruserEmail')}
                          value={youruserEmail}
                        />
                        <input
                          type='number'
                          name='user-mobile'
                          placeholder='Your Mobile number'
                          onChange={handleChange1('yourmobile')}
                                                                  autoComplete={'' + Math.random()}

                          value={yourmobile}
                          required={true}
                          maxLength="10"
                          onInput={maxLengthCheck}
                          onKeyDown={e => /[\+\-\.\,]$/.test(e.key) && e.preventDefault()}
                        />
                        <input
                          type='text'
                          name='first-name'
                          placeholder='Candidate First Name'
                          onChange={handleChange1('firstName')}
                                                                  autoComplete={'' + Math.random()}

                          value={firstName}
                          required={true}
                        />
                        <input
                          type='text'
                          name='last-name'
                          placeholder='Candidate Last Name'
                                                                  autoComplete={'' + Math.random()}

                          onChange={handleChange1('lastName')}
                          value={lastName}
                        />
                        <input
                          type='email'
                          name='user-email'
                          placeholder='Candidate Email'
                                                                  autoComplete={'' + Math.random()}

                          onChange={handleChange1('userEmail')}
                          value={userEmail}
                        />
                        <input
                          type='number'
                          name='user-mobile'
                          placeholder='Candidate Mobile number'
                          onChange={handleChange1('mobile')}
                                                                  autoComplete={'' + Math.random()}

                          value={mobile}
                          required={true}
                          maxLength="10"
                          onInput={maxLengthCheck}
                          onKeyDown={e => /[\+\-\.\,]$/.test(e.key) && e.preventDefault()}
                        />

                       
                       
                        <h6 style={{ color: 'red' }}>{mobileError}</h6>
                        <h6 style={{ color: 'red' }}>{error1}</h6>
                        <div className='button-box'>
                          <button style={{ backgroundColor: 'rgb(0, 41, 95)', color: 'white' }} type='submit'>
                            <span>Register</span>
                          </button>
                        </div>
                      
                      </form>
                    </div>
                  </div>

                </div>
              </div>

            </div>

            <Modal show={show} className="register-mobile-popup" onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Verify Mobile Number with OTP</Modal.Title>
              </Modal.Header>
              <Modal.Body>

                <div className="row">

                  <form                                         autoComplete={'' + Math.random()}
 onSubmit={handleOtpSubmit}>

                    <div className="col">
                      <input
                        type='text'
                        name='last-name'
                        placeholder='Enter OTP'
                        className="mt-3"
                        required={true}
                                                                autoComplete={'' + Math.random()}

                        onChange={handleOtpChange('otpCode')}
                        value={otpCode}
                      />
                    </div>
                    <span className="text-center ml-3 text-danger">{otpWrong}</span>
                    <div className="col">
                      <div className='button-box'>
                        <button style={{ backgroundColor: 'rgb(0, 41, 95)', color: 'white', border: '1px solid rgb(0, 41, 95)', marginTop: 20, marginLeft: 10 }} type='submit'>
                          <span>verify OTP</span>
                        </button>
                      </div>
                    </div>

                  </form>

                  <form onClick={(event)=>event.preventDefault()}>
                            <div className="button-box">
                            <button style={{ backgroundColor: 'rgb(0, 41, 95)', color: 'white', border: '1px solid rgb(0, 41, 95)', marginTop: 106, marginLeft: -10 }} >
                         
                           {  seconds === 0
                    ? <span onClick={handleSubmit22}> Resend OTP</span>
                    :  <span>Resend OTP After: {seconds < 10 ? `0${seconds}` : seconds} </span>
                }
                       
                                 
                                </button>
                                </div>
                            </form>
                  <div className="col">
                    {timeCount ? (

                      <form                                         autoComplete={'' + Math.random()}
                      onSubmit={mobileUpdateSubmit}>
                        <input
                          type='hidden'
                          name='last-name'
                          placeholder='Verify Phone'
                                                                  autoComplete={'' + Math.random()}

                          onChange={handleMobileUpdateChange('MobileNumber')}
                          value={MobileNumber}
                        />
                        <div className='button-box'>
                          <button style={{ backgroundColor: 'rgb(0, 41, 95)', color: 'white', border: '1px solid rgb(0, 41, 95)', marginTop: 20, marginLeft: 10 }} type='submit'>
                            <span>Resend OTP</span>
                          </button>
                        </div>
                      </form>
                    ) : ""}
                  </div>

                </div>

              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>

              </Modal.Footer>
            </Modal>


            {/* 
            <Modal show={show} className="register-mobile-popup" onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Verify Mobile Number with OTP</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {!send ? (
                  <form onSubmit={mobileUpdateSubmit}>
                    <input
                      type='text'
                      name='last-name'
                      placeholder='Verify Phone'
                      required={true}
                      onChange={handleMobileUpdateChange('MobileNumber')}
                      value={MobileNumber}
                    />
                    <br />
                    <div className='button-box'>
                      <button style={{ backgroundColor: '#A1C51D', color: 'white', border: '1px solid #A1C51D', marginTop: 20, marginLeft: 10 }} type='submit'>
                        <span>Send OTP</span>
                      </button>
                    </div>
                  </form>)
                  : (

                    <div className="row">
                     
                      <form onSubmit={handleOtpSubmit}>

                        <div className="col">
                          <input
                            type='text'
                            name='last-name'
                            placeholder='Enter OTP'
                            className="mt-3"
                            required={true}
                            onChange={handleOtpChange('otpCode')}
                            value={otpCode}
                          />
                        </div>
                        <div className="col">
                          <div className='button-box'>
                            <button style={{ backgroundColor: '#A1C51D', color: 'white', border: '1px solid #A1C51D', marginTop: 20, marginLeft: 10 }} type='submit'>
                              <span>verify OTP</span>
                            </button>
                          </div>
                        </div>
                      </form>

                   
                      <div className="col">
                        {timeCount ? (

                          <form onSubmit={mobileUpdateSubmit}>
                            <input
                              type='hidden'
                              name='last-name'
                              placeholder='Verify Phone'
                              onChange={handleMobileUpdateChange('MobileNumber')}
                              value={MobileNumber}
                            />
                            <div className='button-box'>
                              <button style={{ backgroundColor: '#A1C51D', color: 'white', border: '1px solid #A1C51D', marginTop: 20, marginLeft: 10 }} type='submit'>
                                <span>Resend OTP</span>
                              </button>
                            </div>
                          </form>
                        ) : ""}
                      </div>
                    
                    </div>

                  )
                }

              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>

              </Modal.Footer>
            </Modal> */}




            {redirectUser()}
          </div>
        </div>
      </LayoutOne>
    </Fragment >
  );
};
LoginRegister.propTypes = {
  location: PropTypes.object,
};
export default LoginRegister;
