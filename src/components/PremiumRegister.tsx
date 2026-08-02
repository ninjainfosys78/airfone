import React, { useState } from 'react';
import { Eye, EyeOff, ArrowRight, Check, Smartphone } from 'lucide-react';
import './PremiumRegister.css';

interface PremiumRegisterProps {
  locale?: string;
}

const PremiumRegister: React.FC<PremiumRegisterProps> = ({ locale = 'ne' }) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreeAuthenticity, setAgreeAuthenticity] = useState(false);
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Touched state — errors only shown after user interacts or submits
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);

  const isNepali = locale === 'ne';

  const touch = (field: string) => setTouched(prev => ({ ...prev, [field]: true }));

  // ── Validation helpers ──────────────────────────────────────────────────────
  const nameError = (): string => {
    if (!fullName.trim()) return isNepali ? 'कृपया पूरा नाम प्रविष्ट गर्नुहोस्' : 'Please enter your full name';
    return '';
  };

  const phoneOrEmailError = (): string => {
    if (!phone && !email) {
      return isNepali
        ? 'कृपया मोबाइल नम्बर वा इमेल मध्ये कम्तिमा एउटा प्रविष्ट गर्नुहोस्'
        : 'Please enter at least a mobile number or email address';
    }
    return '';
  };

  const phoneError = (): string => {
    if (!phone && !email) return isNepali ? 'मोबाइल नम्बर वा इमेल अनिवार्य छ' : 'Phone or email is required';
    if (phone && !/^[0-9+\-\s]{7,15}$/.test(phone.trim())) {
      return isNepali ? 'अमान्य मोबाइल नम्बर' : 'Invalid phone number';
    }
    return '';
  };

  const emailError = (): string => {
    if (!phone && !email) return isNepali ? 'मोबाइल नम्बर वा इमेल अनिवार्य छ' : 'Phone or email is required';
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return isNepali ? 'अमान्य इमेल ठेगाना' : 'Invalid email address';
    }
    return '';
  };

  const passwordError = (): string => {
    if (!password) return isNepali ? 'कृपया पासवर्ड प्रविष्ट गर्नुहोस्' : 'Please enter a password';
    if (password.length < 8) return isNepali ? 'पासवर्ड कम्तिमा ८ अक्षरको हुनुपर्छ' : 'Password must be at least 8 characters';
    return '';
  };

  const confirmPasswordError = (): string => {
    if (!confirmPassword) return isNepali ? 'कृपया पासवर्ड पुनः प्रविष्ट गर्नुहोस्' : 'Please confirm your password';
    if (confirmPassword !== password) return isNepali ? 'पासवर्ड मिलेन' : 'Passwords do not match';
    return '';
  };

  const termsError = (): string => {
    if (!agreeTerms) return isNepali ? 'कृपया शर्तहरू स्वीकार गर्नुहोस्' : 'Please accept the terms';
    return '';
  };

  const authenticityError = (): string => {
    if (!agreeAuthenticity) return isNepali ? 'कृपया घोषणा स्वीकार गर्नुहोस्' : 'Please accept the declaration';
    return '';
  };

  const captchaError = (): string => {
    if (!isCaptchaVerified) return isNepali ? 'कृपया क्याप्चा प्रमाणित गर्नुहोस्' : 'Please complete the captcha';
    return '';
  };

  const showError = (field: string, error: string) =>
    error && (touched[field] || submitted) ? error : '';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check fields in order — show only the FIRST failing one
    const checks: Array<{ field: string; error: () => string }> = [
      { field: 'fullName',        error: nameError },
      { field: 'phone',           error: phoneError },
      { field: 'email',           error: emailError },
      { field: 'password',        error: passwordError },
      { field: 'confirmPassword', error: confirmPasswordError },
      { field: 'terms',           error: termsError },
      { field: 'authenticity',    error: authenticityError },
      { field: 'captcha',         error: captchaError },
    ];

    for (const { field, error } of checks) {
      if (error()) {
        // Touch only this one field so only its error shows
        setTouched({ [field]: true });
        setSubmitted(false);
        return;
      }
    }

    // All valid — proceed
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert(
        isNepali
          ? `दर्ता सफल भयो! (नाम: ${fullName})`
          : `Registration successful! (Name: ${fullName})`
      );
    }, 2000);
  };

  return (
    <div className="premium-login-container premium-register-container">
      {/* Animated background orbs */}
      <div className="background-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      <div className="login-wrapper register-wrapper">
        <div className="login-card register-card">
          {/* Header */}
          <div className="login-header register-header">
            <div className="logo-circle center-logo">
              <Smartphone size={30} color="#3DB551" />
            </div>
            <h1 className="register-title">
              {isNepali ? 'नयाँ दर्ता' : 'New Registration'}
            </h1>
            <p className="register-subtitle">
              {isNepali
                ? 'सेवाग्राहीहरूले आफ्नो विवरण भर्र्नुहोस्'
                : 'Citizens, please fill in your details'}
            </p>
          </div>

          {/* Form */}
          <form className="login-form" onSubmit={handleSubmit} noValidate>
            {/* Notice Callout */}
            <div className="register-notice-box">
              <p>
                {isNepali
                  ? 'मोबाइल नम्बर वा इमेल — कम्तिमा एउटा अनिवार्य छ'
                  : 'Mobile number or email — At least one is required'}
              </p>
            </div>

            {/* Full Name */}
            <div className="form-group">
              <label className="form-label">
                {isNepali ? 'पुरा नाम' : 'Full Name'}{' '}
                <span className="required-star">*</span>
              </label>
              <div className="input-wrapper">
                <input
                  type="text"
                  className={`form-input text-input${showError('fullName', nameError()) ? ' input-error' : ''}`}
                  placeholder={
                    isNepali
                      ? 'उदा: हरि बहादुर श्रेष्ठ / Hari Bahadur Shrestha'
                      : 'e.g. Hari Bahadur Shrestha'
                  }
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  onBlur={() => touch('fullName')}
                />
              </div>
              {showError('fullName', nameError()) && (
                <span className="field-error">{showError('fullName', nameError())}</span>
              )}
            </div>

            {/* Phone & Email Row */}
            <div className="form-row">
              <div className="form-group col-half">
                <label className="form-label">
                  {isNepali ? 'मोबाइल नम्बर' : 'Mobile Number'}
                </label>
                <div className="input-wrapper">
                  <input
                    type="tel"
                    className={`form-input text-input${showError('phone', phoneError()) ? ' input-error' : ''}`}
                    placeholder={isNepali ? '९८००००००००' : '9800000000'}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    onBlur={() => touch('phone')}
                  />
                </div>
                {showError('phone', phoneError()) && (
                  <span className="field-error">{showError('phone', phoneError())}</span>
                )}
              </div>

              <div className="form-group col-half">
                <label className="form-label">
                  {isNepali ? 'इमेल' : 'Email'}
                </label>
                <div className="input-wrapper">
                  <input
                    type="email"
                    className={`form-input text-input${showError('email', emailError()) ? ' input-error' : ''}`}
                    placeholder="email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={() => touch('email')}
                  />
                </div>
                {showError('email', emailError()) && (
                  <span className="field-error">{showError('email', emailError())}</span>
                )}
              </div>
            </div>

            {/* Password */}
            <div className="form-group">
              <label className="form-label">
                {isNepali ? 'पासवर्ड' : 'Password'}{' '}
                <span className="required-star">*</span>
              </label>
              <div className="input-wrapper">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className={`form-input text-input${showError('password', passwordError()) ? ' input-error' : ''}`}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onBlur={() => touch('password')}
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {showError('password', passwordError()) && (
                <span className="field-error">{showError('password', passwordError())}</span>
              )}
            </div>

            {/* Confirm Password */}
            <div className="form-group">
              <label className="form-label">
                {isNepali ? 'पासवर्ड पुनः प्रविष्ट गर्नुहोस्' : 'Confirm Password'}{' '}
                <span className="required-star">*</span>
              </label>
              <div className="input-wrapper">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  className={`form-input text-input${showError('confirmPassword', confirmPasswordError()) ? ' input-error' : ''}`}
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  onBlur={() => touch('confirmPassword')}
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {showError('confirmPassword', confirmPasswordError()) && (
                <span className="field-error">{showError('confirmPassword', confirmPasswordError())}</span>
              )}
            </div>

            {/* Terms Checkbox 1 */}
            <div className="checkbox-group">
              <label className="custom-checkbox-label">
                <input
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={(e) => { setAgreeTerms(e.target.checked); touch('terms'); }}
                />
                <span className="checkbox-text">
                  {isNepali
                    ? 'मैले निम्न शर्तहरू पढेको छु र यी शर्तहरू संग सहमत छु। यी शर्तहरूको पालना नगरेको खण्डमा कानुन बमोजिम कारवाही बेहोर्न तयार छु।'
                    : 'I have read and agree to the terms below. I am prepared to face legal action in case of non-compliance.'}
                </span>
              </label>
              {showError('terms', termsError()) && (
                <span className="field-error">{showError('terms', termsError())}</span>
              )}
            </div>

            {/* Declaration Checkbox 2 */}
            <div className="checkbox-group">
              <label className="custom-checkbox-label">
                <input
                  type="checkbox"
                  checked={agreeAuthenticity}
                  onChange={(e) => { setAgreeAuthenticity(e.target.checked); touch('authenticity'); }}
                />
                <span className="checkbox-text">
                  {isNepali
                    ? 'मैले आफ्नो वास्तविक पहिचान र सत्य विवरण मात्र प्रदान गरेको छु; नक्कली पहिचान वा झुटा विवरण पेश गर्ने कार्य दण्डनीय हुन्छ भन्ने कुरामा सचेत छु।'
                    : 'I have provided only authentic identity and true information; I am aware that submitting fake identity or false details is punishable.'}
                </span>
              </label>
              {showError('authenticity', authenticityError()) && (
                <span className="field-error">{showError('authenticity', authenticityError())}</span>
              )}
            </div>

            {/* Captcha Card */}
            <div className="captcha-card">
              <span className="captcha-question">
                {isNepali ? 'के तपाईं मान्छे नै हो?' : 'Are you human?'}
              </span>
              <button
                type="button"
                className={`captcha-button ${isCaptchaVerified ? 'verified' : ''}`}
                onClick={() => { setIsCaptchaVerified(!isCaptchaVerified); touch('captcha'); }}
              >
                {isCaptchaVerified ? (
                  <>
                    <Check size={16} />
                    <span>{isNepali ? 'प्रमाणित' : 'Verified'}</span>
                  </>
                ) : (
                  <span>{isNepali ? 'नेपक्याप्चा' : 'NepCaptcha'}</span>
                )}
              </button>
            </div>
            {showError('captcha', captchaError()) && (
              <span className="field-error captcha-error">{showError('captcha', captchaError())}</span>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="register-submit-button"
              disabled={isLoading}
            >
              <span>
                {isLoading
                  ? isNepali
                    ? 'प्रक्रियामा छ...'
                    : 'Processing...'
                  : isNepali
                    ? 'दर्ता गर्नुहोस्'
                    : 'Register'}
              </span>
              {!isLoading && <ArrowRight size={20} />}
            </button>
          </form>

          {/* Login Footer Link */}
          <div className="login-link-footer">
            <p>
              {isNepali ? 'पहिले नै खाता छ?' : 'Already have an account?'}
              <a href={`/${locale}/login/`}>
                {isNepali ? 'लगइन गर्नुहोस्' : 'Login'}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumRegister;
