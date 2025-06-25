import React, { memo, useState } from 'react';
import { FormInput } from '@/shared/ui/FormInput';
import { StepWrapper } from '@/shared/ui/StepWrapper';
import { Button } from '@/shared/ui/Button';
import type { StepProps } from '../types';

export const Step3Verification = memo(({ data, errors, updateField }: StepProps) => {
  const [message, setMessage] = useState('');

  const handleSendCode = () => {
    // Пока нет API
    setMessage(`Код "123456" отправлен (заглушка).`);
  };

  return (
    <StepWrapper
      title="Подтверждение почты"
      description={`Мы отправили код на ${data.email || 'вашу почту'}. Введите его ниже.`}
    >
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

      <div className="flex flex-col gap-2 mt-4">
        <Button type="button" onClick={handleSendCode}>
          Отправить код повторно
        </Button>
        {message && <p className="text-sm text-muted">{message}</p>}
      </div>
    </StepWrapper>
  );
});
