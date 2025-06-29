import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { FormInput } from '@/shared/ui/FormInput';
import { StepWrapper } from '@/shared/ui/StepWrapper';
import type { StepProps } from '../types';
import { SelectInput } from '@/shared/ui/SelectInput';
import { positions } from '@/entities/register/model/positions';
import { specializations } from '@/entities/register/model/specializations';
import { cities } from '@/entities/register/model/cities';
import { AutocompleteInput } from '@/shared/ui/AutocompleteInput';

type Step5Props = StepProps & {
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Step5Details = memo(({ data, updateField, handleFileChange }: Step5Props) => {
  const { t } = useTranslation();

  if (data.userType === 'veterinarian') {
    return (
      <StepWrapper
        title={t('register_form.step5.vet.title')}
        description={t('register_form.step5.vet.description')}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormInput
            label={t('register_form.step5.vet.clinicName')}
            name="clinicName"
            onChange={e => updateField('clinicName', e.target.value)}
          />
          <SelectInput
            label={t('register_form.step5.vet.position')}
            name="position"
            value={data.position || ''}
            onChange={(val) => updateField('position', val)}
            options={positions}
          />
          <FormInput
            label={t('register_form.step5.vet.experience')}
            name="experience"
            onChange={e => updateField('experience', e.target.value)}
          />
          <SelectInput
            label={t('register_form.step5.vet.specialization')}
            name="specialization"
            value={data.specialization || ''}
            onChange={(val) => updateField('specialization', val)}
            options={specializations}
          />
          <FormInput
            label={t('register_form.step5.vet.licenseNumber')}
            name="licenseNumber"
            onChange={e => updateField('licenseNumber', e.target.value)}
          />
          <AutocompleteInput
            label={t('register_form.step5.vet.city')}
            name="vetCity"
            value={data.vetCity || ''}
            onChange={(val) => updateField('vetCity', val)}
            options={cities}
          />
          <FormInput
            label={t('register_form.step5.vet.address')}
            name="vetAddress"
            className="md:col-span-2"
            onChange={e => updateField('vetAddress', e.target.value)}
          />
        </div>
      </StepWrapper>
    );
  }

  if (data.userType === 'partner') {
    return (
      <StepWrapper
        title={t('register_form.step5.partner.title')}
        description={t('register_form.step5.partner.description_data')}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormInput
            label={t('register_form.step5.partner.name')}
            name="partnerName"
            onChange={e => updateField('partnerName', e.target.value)}
          />
          <FormInput
            label={t('register_form.step5.partner.type')}
            name="partnerType"
            onChange={e => updateField('partnerType', e.target.value)}
          />
          <AutocompleteInput
            label={t('register_form.step5.partner.city')}
            name="vetCity"
            value={data.vetCity || ''}
            onChange={(val) => updateField('vetCity', val)}
            options={cities}
          />
          <FormInput
            label={t('register_form.step5.partner.address')}
            name="partnerAddress"
            onChange={e => updateField('partnerAddress', e.target.value)}
          />
          <FormInput
            label={t('register_form.step5.partner.phone')}
            name="partnerPhone"
            onChange={e => updateField('partnerPhone', e.target.value)}
          />
          <FormInput
            label={t('register_form.step5.partner.website')}
            name="partnerWebsite"
            onChange={e => updateField('partnerWebsite', e.target.value)}
          />
          <FormInput
            label={t('register_form.step5.partner.description')}
            name="partnerDescription"
            isTextArea
            className="md:col-span-2"
            onChange={e => updateField('partnerDescription', e.target.value)}
          />
          <div className="md:col-span-2">
            <label htmlFor="partnerLogo" className="block text-sm font-medium text-gray-700 mb-1">
              {t('register_form.step5.partner.logo')}
            </label>
            <input
              type="file"
              name="partnerLogo"
              id="partnerLogo"
              onChange={handleFileChange}
              className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>
        </div>
      </StepWrapper>
    );
  }

  return null;
});
