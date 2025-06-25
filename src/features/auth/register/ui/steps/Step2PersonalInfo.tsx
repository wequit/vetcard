import React, { memo } from 'react';
import { FormInput } from '@/shared/ui/FormInput';
import { StepWrapper } from '@/shared/ui/StepWrapper';
import type { StepProps } from '../types'; 

export const Step2PersonalInfo = memo(({ data, errors, updateField }: StepProps) => (
    <StepWrapper title="Личные данные" description="Введите ваши фамилию, имя, отчество и почту для начала.">
        <FormInput
            label="Фамилия"
            name="lastName"
            value={data.lastName || ''}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateField('lastName', e.target.value)}
            error={errors.lastName}
            autoFocus
        />
        <FormInput
            label="Имя"
            name="firstName"
            value={data.firstName || ''}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateField('firstName', e.target.value)}
            error={errors.firstName}
        />
        <FormInput
            label="Отчество"
            name="middleName"
            value={data.middleName || ''}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateField('middleName', e.target.value)}
            error={errors.middleName}
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