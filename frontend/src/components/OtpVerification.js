import React, { useState } from 'react';

const OtpVerification = () => {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');

  const handleVerifyOtp = (e) => {
    e.preventDefault();

    const confirmationResult = window.confirmationResult; // Get the stored confirmation result

    if (!confirmationResult) {
      setError('OTP not sent. Please go back and register again.');
      return;
    }

    confirmationResult
      .confirm(otp)
      .then((result) => {
        console.log('OTP Verified, User signed in', result.user);
        // Handle successful login here
      })
      .catch((error) => {
        console.error('Error verifying OTP', error);
        setError('Invalid OTP. Please try again.');
      });
  };

  return (
    <div>
      <form onSubmit={handleVerifyOtp}>
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
        {error && <p className="text-red-500">{error}</p>} {/* Error message */}
        
        <button type="submit">Verify OTP</button>
      </form>
    </div>
  );
};

export default OtpVerification;
