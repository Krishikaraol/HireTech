// // import React from 'react';
// // import { FaUser, FaLock, FaPhone, FaGoogle, FaFacebook } from 'react-icons/fa';
// // import { Link, useNavigate } from 'react-router-dom';

// // const RegisterForm = () => {

// //   const navigate = useNavigate();

// //   const handleRegister = () => {
// //     // Assuming registration is successful
// //     // Add logic for registering the user here, then navigate to the OTP verification page
    
// //     // Navigate to the OTP verification page
// //     navigate('/verify-otp');
// //   };

// //   return (
// //     <div className="w-full max-w-sm bg-white rounded-lg shadow-lg p-8">
// //       {/* Navbar */}
// //       <div className="flex justify-between items-center mb-4">
// //         <h1 className="text-2xl font-bold text-blue-600">HireTech</h1>
// //         <div className="text-sm">
// //           <span>Already have an account?</span>
// //           {/* <a href="#" className="ml-2 text-blue-600 hover:underline">Login</a> */}
// //           <Link to="/login" className=" text-blue-500 cursor-pointer">Login</Link>
// //         </div>
// //       </div>

// //       {/* Register Form */}
// //       <div className="border-t pt-4">
// //         <h2 className="text-center text-lg font-semibold mb-4 text-blue-600">Create Your JOB Profile</h2>

// //         <div className="flex items-center mb-4">
// //           <FaUser className="text-2xl text-black" />
// //           <input 
// //             type="email"
// //             placeholder="Email Address"
// //             className="ml-4 p-2 w-full border-b border-gray-400 outline-none"
// //           />
// //         </div>

// //         <div className="flex items-center mb-4">
// //           <FaLock className="text-2xl text-black" />
// //           <input 
// //             type="password"
// //             placeholder="Password"
// //             className="ml-4 p-2 w-full border-b border-gray-400 outline-none"
// //           />
// //         </div>

// //         <div className="flex items-center mb-4">
// //           <FaPhone className="text-2xl text-black" />
// //           <input 
// //             type="tel"
// //             placeholder="Mobile No."
// //             className="ml-4 p-2 w-full border-b border-gray-400 outline-none"
// //           />
// //         </div>

// //         <button className="bg-blue-600 w-full text-white py-2 rounded-md hover:bg-blue-700">
// //           Register now
// //         </button>

// //         <div className="text-center my-4">
// //           <span className="text-sm">or Continue with</span>
// //         </div>

// //         {/* Social Media Icons */}
// //         <div className="flex justify-center gap-8 mb-4">
// //           <FaGoogle className="text-4xl text-black cursor-pointer" />
// //           <FaFacebook className="text-4xl text-black cursor-pointer" />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default RegisterForm;


// import React, { useState } from 'react';
// import { FaUser, FaLock, FaPhone, FaGoogle, FaFacebook } from 'react-icons/fa';
// import { Link, useNavigate } from 'react-router-dom';

// const RegisterForm = () => {
//   const navigate = useNavigate();

//   // States to capture form inputs
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [phone, setPhone] = useState('');

//   const handleRegister = async (e) => {
//     e.preventDefault();
    
//     // Assuming registration is successful
//     // Add logic for registering the user here (like an API call)
//     const userData = {
//       email,
//       password,
//       phone,
//     };

//     try {
//       // Simulate a registration API call
//       console.log('User data submitted:', userData);
      
//       // If registration is successful, navigate to OTP verification page
//       navigate('/verify-otp', { state: { email, phone } }); // Passing email and phone as state for the OTP page
//     } catch (error) {
//       console.error('Registration failed:', error);
//     }
//   };

//   return (
//     <div className="w-full max-w-sm bg-white rounded-lg shadow-lg p-8">
//       {/* Navbar */}
//       <div className="flex justify-between items-center mb-4">
//         <h1 className="text-2xl font-bold text-blue-600">HireTech</h1>
//         <div className="text-sm">
//           <span>Already have an account?</span>
//           <Link to="/login" className=" text-blue-500 cursor-pointer">Login</Link>
//         </div>
//       </div>

//       {/* Register Form */}
//       <div className="border-t pt-4">
//         <h2 className="text-center text-lg font-semibold mb-4 text-blue-600">Create Your JOB Profile</h2>

//         <form onSubmit={handleRegister}>
//           <div className="flex items-center mb-4">
//             <FaUser className="text-2xl text-black" />
//             <input
//               type="email"
//               placeholder="Email Address"
//               className="ml-4 p-2 w-full border-b border-gray-400 outline-none"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>

//           <div className="flex items-center mb-4">
//             <FaLock className="text-2xl text-black" />
//             <input
//               type="password"
//               placeholder="Password"
//               className="ml-4 p-2 w-full border-b border-gray-400 outline-none"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           <div className="flex items-center mb-4">
//             <FaPhone className="text-2xl text-black" />
//             <input
//               type="tel"
//               placeholder="Mobile No."
//               className="ml-4 p-2 w-full border-b border-gray-400 outline-none"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="bg-blue-600 w-full text-white py-2 rounded-md hover:bg-blue-700"
//           >
//             Register now
//           </button>
//         </form>

//         <div className="text-center my-4">
//           <span className="text-sm">or Continue with</span>
//         </div>

//         {/* Social Media Icons */}
//         <div className="flex justify-center gap-8 mb-4">
//           <FaGoogle className="text-4xl text-black cursor-pointer" />
//           <FaFacebook className="text-4xl text-black cursor-pointer" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegisterForm;

import React, { useState } from 'react';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { auth } from '../firebase.js';
import { useNavigate } from 'react-router-dom'; // Use this to navigate to OTP page

const RegisterForm = () => {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // Clear previous errors
    setError('');

    // Setup Recaptcha before sending OTP
    window.recaptchaVerifier = new RecaptchaVerifier(
      'recaptcha-container',
      {
        size: 'invisible',
        callback: (response) => {
          // Recaptcha solved - now send OTP
          sendOTP();
        },
      },
      auth
    );
    window.recaptchaVerifier.render(); // Render recaptcha

    sendOTP(); // Send the OTP when the user clicks register
  };

  const sendOTP = () => {
    const phoneNumber = `+${phone}`; // Make sure phone number includes country code
    const appVerifier = window.recaptchaVerifier;

    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        console.log('OTP sent');
        window.confirmationResult = confirmationResult; // Save this for verifying OTP

        // Navigate to OTP verification page
        navigate('/verify-otp');
      })
      .catch((error) => {
        console.error('Error sending OTP', error);
        setError('Failed to send OTP. Please try again.');
      });
  };

  return (
    <div>
      <form onSubmit={handleRegister}>
        <input
          type="tel"
          placeholder="Enter your phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <div id="recaptcha-container"></div>

        {error && <p className="text-red-500">{error}</p>} {/* Error message if any */}
        
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;


