import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { USER_TYPES } from '@/entities/user/model/constants';
import type { StepProps } from '../types';

export const Step4UserType = memo(({ data, errors, updateField }: StepProps) => {
  const { t } = useTranslation();

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-gray-800">
        {t('register_form.step4.title')}
      </h2>
      <p className="text-gray-500 mb-6">
        {t('register_form.step4.description')}
      </p>
      {errors.userType && (
        <p className="mb-2 text-sm text-red-500">{errors.userType}</p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {Object.values(USER_TYPES).map(({ id, icon }) => {
          const Icon = icon;
          return (
            <div
              key={id}
              onClick={() => updateField('userType', id)}
              className={`p-4 rounded-lg cursor-pointer flex flex-col items-center justify-center text-center border-2 transition-all duration-200 ${
                data.userType === id
                  ? 'border-blue-600 bg-blue-50'
                  : 'border-gray-200 bg-white hover:border-blue-400'
              }`}
            >
              <div
                className={`text-4xl mb-2 ${
                  data.userType === id ? 'text-blue-600' : 'text-gray-400'
                }`}
              >
                <Icon />
              </div>
              <span className="font-semibold text-gray-800">
                {t(`register_form.step4.roles.${id}`)}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
});
