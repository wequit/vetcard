import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { FaCheckCircle, FaChevronLeft, FaUserCircle, FaHome } from 'react-icons/fa';

import {  INITIAL_REGISTRATION_DATA } from '@/entities/user/model/constants';
import type { UserRegistrationData } from '@/entities/user/model/types';
import { baseSteps, vetStep, partnerStep } from '../model/steps';

import { Step1PersonalInfo } from './steps/Step1PersonalInfo';
import { Step2Verification } from './steps/Step2Verification';
import { Step3Credentials } from './steps/Step3Credentials';
import { Step4UserType } from './steps/Step4UserType';
import { Step5Details } from './steps/Step5Details';

export const RegisterForm = () => {
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
            const timer = setTimeout(() => navigate('/mypets'), 2000);
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
    }
    
    const handleFinalSubmit = () => {
        console.log('Final Registration Data:', data);
        setIsRegistered(true);
    };

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(p => p + 1);
        } else {
            handleFinalSubmit();
        }
    };

    const handlePrev = () => {
        if (currentStep > 0) {
            setCurrentStep(p => p - 1);
        }
    };
    
    const validateAndProceed = () => {
        const newErrors: Partial<typeof errors> = {};
        let isValid = true;
        switch (currentStep) {
            case 0:
                if (!data.lastName.trim()) { newErrors.lastName = 'Пожалуйста, введите вашу фамилию.'; isValid = false; }
                if (!data.firstName.trim()) { newErrors.firstName = 'Пожалуйста, введите ваше имя.'; isValid = false; }
                if (!data.middleName.trim()) { newErrors.middleName = 'Пожалуйста, введите ваше отчество.'; isValid = false; }
                if (!data.email.trim() || !/\S+@\S+\.\S+/.test(data.email)) { newErrors.email = 'Введите корректный email.'; isValid = false; }
                break;
            case 1:
                if (data.verificationCode !== '123456') { newErrors.verificationCode = 'Неверный код подтверждения.'; isValid = false; }
                break;
            case 2:
                if (data.username.length < 4) { newErrors.username = 'Логин должен быть не менее 4 символов.'; isValid = false; }
                if (data.password.length < 6) { newErrors.password = 'Пароль должен быть не менее 6 символов.'; isValid = false; }
                if (data.password !== confirmPassword) { newErrors.confirmPassword = 'Пароли не совпадают.'; isValid = false; }
                break;
            case 3:
                if (!data.userType) { newErrors.userType = 'Пожалуйста, выберите тип регистрации.'; isValid = false; }
                break;
            case 4:
                break;
        }
        setErrors(newErrors);
        if (isValid) {
            if (currentStep === 3 && data.userType === 'petOwner') {
                handleFinalSubmit();
            } else {
                handleNext();
            }
        }
    };

    const stepComponents = [
        <Step1PersonalInfo data={data} errors={errors} updateField={updateField} />,
        <Step2Verification data={data} errors={errors} updateField={updateField} />,
        <Step3Credentials data={data} errors={errors} updateField={updateField} confirmPassword_val={confirmPassword} setConfirmPassword_val={setConfirmPassword} />,
        <Step4UserType data={data} errors={errors} updateField={updateField} />,
        <Step5Details data={data} errors={errors} updateField={updateField} handleFileChange={handleFileChange} />
    ];
    
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-sans">
            <div className="w-full min-h-[550px] max-w-4xl mx-auto bg-white rounded-xl shadow-lg flex flex-col md:flex-row">
                <aside className="w-full md:w-1/3 bg-blue-50 p-8 rounded-t-xl md:rounded-l-xl md:rounded-t-none">
                    <h1 className="text-2xl font-bold text-gray-800 mb-12">Vet.Card</h1>
                    <nav>
                        <ul>
                            <AnimatePresence>
                                {steps.map((step, index) => (
                                    <motion.li key={step.number + step.title} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.1 }} className="flex items-start mb-6">
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0 ${currentStep === index ? 'bg-blue-600 text-white' : currentStep > index ? 'bg-green-400 text-white' : 'bg-gray-200 text-gray-500'}`}>
                                            {currentStep > index ? <FaCheckCircle/> : step.number}
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Шаг {step.number}</p>
                                            <p className={`font-semibold ${currentStep === index ? 'text-gray-800' : 'text-gray-600'}`}>{step.title}</p>
                                        </div>
                                    </motion.li>
                                ))}
                            </AnimatePresence>
                        </ul>
                    </nav>
                </aside>
                <main className="w-full md:w-2/3 p-8 flex flex-col">
                    {isRegistered ? (
                         <div className="flex-grow flex items-center justify-center">
                            <div className="text-center">
                                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 260, damping: 20 }} className="text-green-500 mb-6"><FaCheckCircle className="text-8xl mx-auto" /></motion.div>
                                <h2 className="text-3xl font-bold text-gray-800 mb-2">Регистрация завершена!</h2>
                                <p className="text-lg text-gray-600">Сейчас вы будете перенаправлены...</p>
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className="flex-grow">
                                <header className="flex justify-between items-center mb-8 h-8">
                                    <div>
                                        {currentStep > 0 ? (
                                            <button onClick={handlePrev} className="flex items-center text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors"><FaChevronLeft className="mr-2" /> Назад</button>
                                        ) : (
                                            <Link to="/" className="flex items-center text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors"><FaHome className="mr-2" /> На главную</Link>
                                        )}
                                    </div>
                                    <div className="flex items-center text-sm">
                                        <FaUserCircle className="w-6 h-6 mr-2 text-gray-400" />
                                        <span className="font-semibold text-gray-700">Новый пользователь</span>
                                    </div>
                                </header>
                                <AnimatePresence mode="wait">
                                    <motion.div key={currentStep} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.4, type: "tween" }}>
                                        {stepComponents[currentStep]}
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                            <footer className="mt-10 pt-5 border-t border-gray-200 flex justify-end">
                                <button onClick={validateAndProceed} className="px-8 py-2 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 transition-colors">
                                    { (currentStep === 3 && data.userType === 'petOwner') || currentStep === steps.length - 1 ? 'Зарегистрироваться' : 'Далее' }
                                </button>
                            </footer>
                        </>
                    )}
                </main>
            </div>
        </div>
    );
};