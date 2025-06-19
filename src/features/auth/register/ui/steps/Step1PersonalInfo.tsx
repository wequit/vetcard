
import React, { memo } from 'react';
import { FormInput } from '@/shared/ui/FormInput';
import { StepWrapper } from '@/shared/ui/StepWrapper';
import type { StepProps } from '../types'; 

export const Step1PersonalInfo = memo(({ data, errors, updateField }: StepProps) => (
    <StepWrapper title="Личные данные" description="Введите ваше ФИО и почту для начала.">
        <FormInput
            label="ФИО"
            name="fullName"
            value={data.fullName || ''}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateField('fullName', e.target.value)}
            error={errors.fullName}
            autoFocus
        />
        <FormInput
            label="Электронная почта"
            name="email"
            type="email"
            value={data.email || ''}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateField('email', e.target.value)}
            error={errors.email}
        />
    </StepWrapper>
));