
import React, { memo } from 'react';
import { FormInput } from '@/shared/ui/FormInput';
import { StepWrapper } from '@/shared/ui/StepWrapper';
import type { StepProps } from '../types';

type Step3Props = StepProps & { 
    confirmPassword_val: string; 
    setConfirmPassword_val: (val: string) => void; 
};

export const Step3Credentials = memo(({ data, errors, updateField, confirmPassword_val, setConfirmPassword_val }: Step3Props) => (
    <StepWrapper title="Данные для входа" description="Придумайте ваш логин и пароль.">
        <FormInput label="Логин" name="username" value={data.username || ''} onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateField('username', e.target.value)} error={errors.username} />
        <FormInput label="Пароль" name="password" type="password" value={data.password || ''} onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateField('password', e.target.value)} error={errors.password} />
        <FormInput label="Повторите пароль" name="confirmPassword" type="password" value={confirmPassword_val} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword_val(e.target.value)} error={errors.confirmPassword} />
    </StepWrapper>
));