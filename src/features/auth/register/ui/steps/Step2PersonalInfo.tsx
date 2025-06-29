import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { FormInput } from '@/shared/ui/FormInput';
import { StepWrapper } from '@/shared/ui/StepWrapper';
import type { StepProps } from '../types';

export const Step2PersonalInfo = memo(({ data, errors, updateField }: StepProps) => {
  const { t } = useTranslation();

  return (
    <StepWrapper title={t('register_form.step2.title')} description={t('register_form.step2.description')}>
      <FormInput label={t('register_form.step2.lastName')} name="lastName" value={data.lastName || ''} onChange={e => updateField('lastName', e.target.value)} error={errors.lastName} autoFocus />
      <FormInput label={t('register_form.step2.firstName')} name="firstName" value={data.firstName || ''} onChange={e => updateField('firstName', e.target.value)} error={errors.firstName} />
      <FormInput label={t('register_form.step2.middleName')} name="middleName" value={data.middleName || ''} onChange={e => updateField('middleName', e.target.value)} error={errors.middleName} />
      <FormInput label={t('register_form.step2.email')} name="email" type="email" value={data.email || ''} onChange={e => updateField('email', e.target.value)} error={errors.email} />
    </StepWrapper>
  );
});