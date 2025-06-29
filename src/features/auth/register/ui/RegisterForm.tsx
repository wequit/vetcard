import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { FaCheckCircle, FaChevronLeft, FaUserCircle, FaHome } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

import { INITIAL_REGISTRATION_DATA } from '@/entities/user/model/constants';
import type { UserRegistrationData } from '@/entities/user/model/types';
import { baseSteps, vetStep, partnerStep } from '../model/steps';

import { Step1Credentials } from './steps/Step1Credentials';
import { Step2PersonalInfo } from './steps/Step2PersonalInfo';
import { Step3Verification } from './steps/Step3Verification';
import { Step4UserType } from './steps/Step4UserType';
import { Step5Details } from './steps/Step5Details';

const MobileProgress = ({ steps, currentStep }: { steps: typeof baseSteps, currentStep: number }) => {
  const { t } = useTranslation();
  const progressPercentage = ((currentStep + 1) / steps.length) * 100;
  const currentStepInfo = steps[currentStep];

  return (
    <div className="md:hidden w-full mb-6">
      <div className="text-sm text-gray-600 mb-2">
        {t('register_form.step_titles.step_indicator', { current: currentStep + 1, total: steps.length })}:{' '}
        <span className="font-semibold text-gray-800">{t(`register_form.step_titles.${currentStepInfo.title}`)}</span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2">
        <motion.div
          className="bg-blue-600 h-2 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progressPercentage}%` }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        />
      </div>
    </div>
  );
};

export const RegisterForm = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng: string) => i18n.changeLanguage(lng);

  const [data, setData] = useState<UserRegistrationData>(INITIAL_REGISTRATION_DATA);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [currentStep, setCurrentStep] = useState(0);
  const [isRegistered, setIsRegistered] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof UserRegistrationData | 'confirmPassword', string>>>({});
  const [steps, setSteps] = useState(baseSteps);
  const navigate = useNavigate();

  useEffect(() => {
    if (data.userType === 'veterinarian') setSteps([...baseSteps, vetStep]);
    else if (data.userType === 'partner') setSteps([...baseSteps, partnerStep]);
    else setSteps(baseSteps);
  }, [data.userType]);

  useEffect(() => {
    if (isRegistered) {
      const timer = setTimeout(() => navigate('/dashboard'), 2000);
      return () => clearTimeout(timer);
    }
  }, [isRegistered, navigate]);

  const updateField = useCallback((field: keyof UserRegistrationData, value: any) => {
    setData(prev => ({ ...prev, [field]: value }));
    if (errors[field as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  }, [errors]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      updateField('partnerLogo', e.target.files[0]);
    }
  };

  const handleFinalSubmit = () => {
    console.log('Final Registration Data:', data);
    setIsRegistered(true);
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) setCurrentStep(p => p + 1);
    else handleFinalSubmit();
  };

  const handlePrev = () => {
    if (currentStep > 0) setCurrentStep(p => p - 1);
  };

  const validateAndProceed = () => {
    const { t } = useTranslation();
    const newErrors: Partial<typeof errors> = {};
    let isValid = true;
    switch (currentStep) {
      case 0:
        if (data.username.length < 4) { newErrors.username = t('register_form.errors.username_short'); isValid = false; }
        if (data.password.length < 6) { newErrors.password = t('register_form.errors.password_short'); isValid = false; }
        if (data.password !== confirmPassword) { newErrors.confirmPassword = t('register_form.errors.password_mismatch'); isValid = false; }
        break;
      case 1:
        if (!data.lastName.trim()) { newErrors.lastName = t('register_form.errors.lastName_required'); isValid = false; }
        if (!data.firstName.trim()) { newErrors.firstName = t('register_form.errors.firstName_required'); isValid = false; }
        if (!data.middleName.trim()) { newErrors.middleName = t('register_form.errors.middleName_required'); isValid = false; }
        if (!data.email.trim() || !/\S+@\S+\.\S+/.test(data.email)) { newErrors.email = t('register_form.errors.email_invalid'); isValid = false; }
        break;
      case 2:
        if (data.verificationCode !== '123456') { newErrors.verificationCode = t('register_form.errors.code_invalid'); isValid = false; }
        break;
      case 3:
        if (!data.userType) { newErrors.userType = t('register_form.errors.userType_required'); isValid = false; }
        break;
    }
    setErrors(newErrors);
    if (isValid) {
      if (currentStep === 3 && data.userType === 'petOwner') handleFinalSubmit();
      else handleNext();
    }
  };

  const stepComponents = [
    <Step1Credentials data={data} errors={errors} updateField={updateField} confirmPassword_val={confirmPassword} setConfirmPassword_val={setConfirmPassword} />,
    <Step2PersonalInfo data={data} errors={errors} updateField={updateField} />,
    <Step3Verification data={data} errors={errors} updateField={updateField} />,
    <Step4UserType data={data} errors={errors} updateField={updateField} />,
    <Step5Details data={data} errors={errors} updateField={updateField} handleFileChange={handleFileChange} />
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-lg flex flex-col md:flex-row">
        <aside className="hidden md:block w-full md:w-1/3 bg-blue-50 p-8 rounded-l-xl">
          <h1 className="text-2xl font-bold text-gray-800 mb-12">Vet.Card</h1>
          <nav>
            <ul>
              <AnimatePresence>
                {steps.map((step, index) => (
                  <motion.li key={step.number + step.title} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.1 }} className="flex items-start mb-6">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 ${currentStep === index ? 'bg-blue-600 text-white' : currentStep > index ? 'bg-green-400 text-white' : 'bg-gray-200 text-gray-500'}`}>
                      {currentStep > index ? <FaCheckCircle /> : step.number}
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{t("register_form.step_titles.step")} {step.number}</p>
                      <p className={`font-semibold ${currentStep === index ? 'text-gray-800' : 'text-gray-600'}`}>{t(`register_form.step_titles.${step.title}`)}</p>
                    </div>
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>
          </nav>
        </aside>

        <main className="w-full md:w-2/3 p-6 flex flex-col">
          {isRegistered ? (
            <div className="flex-grow flex items-center justify-center text-center">
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 260, damping: 20 }} className="text-green-500 mb-6">
                <FaCheckCircle className="text-8xl mx-auto" />
              </motion.div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">{t('register_form.messages.registration_complete')}</h2>
              <p className="text-lg text-gray-600">{t('register_form.messages.redirecting')}</p>
            </div>
          ) : (
            <>
              <MobileProgress steps={steps} currentStep={currentStep} />
              <header className="flex justify-between items-center mb-8">
                {currentStep > 0 ? (
                  <button onClick={handlePrev} className="flex items-center text-sm font-semibold text-gray-600 hover:text-gray-900">
                    <FaChevronLeft className="mr-2" />{t('register_form.buttons.back')}
                  </button>
                ) : (
                  <Link to="/" className="flex items-center text-sm font-semibold text-gray-600 hover:text-gray-900">
                    <FaHome className="mr-2" />{t('register_form.buttons.home')}
                  </Link>
                )}
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center text-sm">
                    <FaUserCircle className="w-6 h-6 mr-2 text-gray-400" />
                    <span className="font-semibold text-gray-700">{t('register_form.messages.new_user')}</span>
                  </div>
                  <div className="border-l pl-4 flex items-center gap-2">
                    <button onClick={() => changeLanguage('ru')} className={`text-sm font-medium ${i18n.language === 'ru' ? 'text-blue-600 font-semibold' : 'text-gray-500'}`}>RU</button>
                    <span className="text-gray-400">|</span>
                    <button onClick={() => changeLanguage('kg')} className={`text-sm font-medium ${i18n.language === 'kg' ? 'text-blue-600 font-semibold' : 'text-gray-500'}`}>KG</button>
                  </div>
                </div>
              </header>

              <AnimatePresence mode="wait">
                <motion.div key={currentStep} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.4 }} className="flex-grow">
                  {stepComponents[currentStep]}
                </motion.div>
              </AnimatePresence>

              <footer className="mt-8 border-t pt-6 flex justify-end">
                <button onClick={validateAndProceed} className="w-full sm:w-auto px-8 py-3 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-900">
                  {(currentStep === 3 && data.userType === 'petOwner') || currentStep === steps.length - 1 ? t('register_form.buttons.submit') : t('register_form.buttons.next')}
                </button>
              </footer>
            </>
          )}
        </main>
      </div>
    </div>
  );
};
