import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const CreateBooks = () => {

  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveBook = () => {
    <div className="limiter">
      <div
        className="container-login100"
        style={{ backgroundImage: "url('/images/wallpaper.jpg')" }}
      >
      </div>
    </div>
    const data = {
      username,
      firstName,
      lastName,
      email,
      password,
    };
    setLoading(true);
    axios
      .post('http://localhost:5555/books', data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Account Created successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };

  return (

    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Create Account</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Username</label>
          <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>First Name</label>
          <input
            type='text'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Last Name</label>
          <input
            type='text'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Email</label>
          <input
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Password</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handleSaveBook}>
          Register
        </button>
      </div>
    </div>
  );
}

export default CreateBooks

// import React, { useState } from 'react';

// const Register = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('http://localhost:5000/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });

//       const result = await response.json();

//       if (response.ok) {
//         alert('Registration successful!');
//         window.location.href = '/login'; // Redirect to login page
//       } else {
//         alert(`Error: ${result.error}`);
//       }
//     } catch (error) {
//       alert('Failed to register. Please try again later.');
//       console.error(error);
//     }
//   };

//   return (
//     <div className="limiter">
//       <div
//         className="container-login100"
//         style={{ backgroundImage: "url('images/wallpaper.jpg')" }}
//       >
//         <div className="wrap-login100">
//           <form
//             id="registerForm"
//             className="login100-form validate-form"
//             onSubmit={handleSubmit}
//           >
//             <span className="login100-form-logo">
//               <img src="./images/logo.png" alt="logo" height="200px" />
//             </span>

//             <span className="login100-form-title p-b-34 p-t-27">
//               Create an Account
//             </span>

//             {/* Username Field */}
//             <div className="wrap-input100 validate-input" data-validate="Enter username">
//               <input
//                 className="input100"
//                 type="text"
//                 name="username"
//                 placeholder="Username"
//                 value={formData.username}
//                 onChange={handleChange}
//                 required
//               />
//               <span className="focus-input100" data-placeholder="&#xf207;"></span>
//             </div>

//             {/* First Name Field */}
//             <div className="wrap-input100 validate-input" data-validate="Enter first name">
//               <input
//                 className="input100"
//                 type="text"
//                 name="firstName"
//                 placeholder="First Name"
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 required
//               />
//               <span className="focus-input100" data-placeholder="&#xf207;"></span>
//             </div>

//             {/* Last Name Field */}
//             <div className="wrap-input100 validate-input" data-validate="Enter last name">
//               <input
//                 className="input100"
//                 type="text"
//                 name="lastName"
//                 placeholder="Last Name"
//                 value={formData.lastName}
//                 onChange={handleChange}
//                 required
//               />
//               <span className="focus-input100" data-placeholder="&#xf207;"></span>
//             </div>

//             {/* Email Field */}
//             <div className="wrap-input100 validate-input" data-validate="Enter email">
//               <input
//                 className="input100"
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//               <span className="focus-input100" data-placeholder="&#xf15a;"></span>
//             </div>

//             {/* Password Field */}
//             <div className="wrap-input100 validate-input" data-validate="Enter password">
//               <input
//                 className="input100"
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//               />
//               <span className="focus-input100" data-placeholder="&#xf191;"></span>
//             </div>

//             <div className="container-login100-form-btn">
//               <button type="submit" className="login100-form-btn">
//                 Register
//               </button>
//             </div>

//             <div className="text-center p-t-90">
//               <a className="txt1" href="/login">
//                 Already have an account? Login here!
//               </a>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;
