import React, { useState } from 'react';
import { User, Lock, Eye, EyeOff, Smartphone } from 'lucide-react';
import './PremiumLogin.css';

interface PremiumLoginProps {
  locale?: string;
}

const PremiumLogin: React.FC<PremiumLoginProps> = ({ locale = 'ne' }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      alert(`Login attempt: ${username}`);
    }, 2000);
  };

  const isNepali = locale === 'ne';

  return (
    <div className="premium-login-container">
      {/* Animated background elements */}
      <div className="background-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      <div className="login-wrapper">
        <div className="login-card">
          {/* Header */}
          <div className="login-header">
            <div className="logo-circle">
              <Smartphone size={30} color="#3DB551" />
            </div>
            <h1 className="login-title">
              {isNepali ? 'लग्इन गर्नुहोस्' : 'Login'}
            </h1>
            <p className="login-subtitle">
              {isNepali
                ? 'स्मार्ट IVR AI डिजिटल सेवा'
                : 'SmartIVRAI Digital Services'}
            </p>
          </div>

          {/* Form */}
          <form className="login-form" onSubmit={handleSubmit}>
            {/* Username Field */}
            <div className="form-group">
              <label className="form-label">
                {isNepali ? 'प्रयोगकर्ता नाम' : 'Username'}
              </label>
              <div className="input-wrapper">
                <span className="input-icon"><User size={18} /></span>
                <input
                  type="text"
                  className="form-input"
                  placeholder={isNepali ? 'आपनोे नाम वा ईमेल' : 'Enter username or email'}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="form-group">
              <label className="form-label">
                {isNepali ? 'पासवर्ड' : 'Password'}
              </label>
              <div className="input-wrapper">
                <span className="input-icon"><Lock size={18} /></span>
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="form-input"
                  placeholder={isNepali ? 'पासवर्ड प्रविष्ट गर्नुहोस्' : 'Enter your password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="form-footer">
              <label className="remember-me">
                <input type="checkbox" />
                <span>{isNepali ? 'मलाई याद राख्नुहोस्' : 'Remember me'}</span>
              </label>
              <a href="#" className="forgot-password">
                {isNepali ? 'पासवर्ड भुलेर गएको?' : 'Forgot password?'}
              </a>
            </div>

            {/* Submit Button */}
            <button type="submit" className="login-button" disabled={isLoading}>
              <span className={isLoading ? 'hidden' : ''}>
                {isNepali ? 'लग्इन गर्नुहोस्' : 'Login'}
              </span>
              {isLoading && (
                <div className="button-loader">
                  <div className="spinner"></div>
                </div>
              )}
            </button>
          </form>

          {/* Sign Up Link */}
          <div className="signup-link">
            <p>
              {isNepali ? 'खाता छैन?' : "Don't have an account?"}
              <a href={`/${locale}/register/`}>{isNepali ? 'यहाँ दर्ता गर्नुहोस्' : 'Register here'}</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumLogin;
