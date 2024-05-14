import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "./firebase.config";




import { RecaptchaVerifier, signInWithPhoneNumber, Auth } from "firebase/auth"; // Import RecaptchaVerifier and Auth



(window as any).recaptchaVerifier = RecaptchaVerifier;
declare global {
  interface Window {
      recaptchaVerifier?: any
  }
}


const Test: React.FC = () => {
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);

  // Captcha Verity


  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier  = new RecaptchaVerifier(
        "recaptcha-container" as any,
        {
          size : "invisible",
          callback: (response: any) => {
            requestOTP();
          },
          "expired-callback": () => {},
        },
        auth
      );
    }
  }

  // Request OTP
  function requestOTP() {
    setLoading(true);
    onCaptchVerify();
    const appVerifier = window.recaptchaVerifier;
    const formatPh = "+" + ph; // phonenumber with +91999999999
    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  function onOTPVerify() {
    setLoading(true);

    window.confirmationResult
      .confirm(otp)
      .then(async (res:any) => {
        console.log(res);
        setUser(res.user);
        setLoading(false);
      })
      .catch((err:string) => {
        console.log(err);
        setLoading(false);
      });
  }

  return (
    <div>
      <PhoneInput
        country={"in"}
        value={ph}
        onChange={(value) => setPh(value)}
      />
      <button onClick={requestOTP}>Send OTP</button>
      <div id="recaptcha-container"></div> {/* Ensure this container exists */}
      {showOTP && (
        <div>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
          />
          <button onClick={onOTPVerify}>Verify OTP</button>
        </div>
      )}
    </div>
  );
};

export default Test;
