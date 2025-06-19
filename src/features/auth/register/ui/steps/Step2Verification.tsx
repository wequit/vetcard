
import React, { memo } from 'react';
import { FormInput } from '@/shared/ui/FormInput';
import { StepWrapper } from '@/shared/ui/StepWrapper';
import type { StepProps } from '../types';

export const Step2Verification = memo(({ data, errors, updateField }: StepProps) => (
    <StepWrapper title="Подтверждение почты" description={`Мы отправили код на ${data.email || 'вашу почту'}. Введите его ниже (используйте 123456).`}>
        <FormInput
            label="Код подтверждения"
            name="verificationCode"
            maxLength={6}
            value={data.verificationCode || ''}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateField('verificationCode', e.target.value)}
            error={errors.verificationCode}
            autoFocus
            className="text-center tracking-widest text-lg"
        />
    </StepWrapper>
));