import React, { memo } from 'react';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
    label: string;
    error?: string;
    isTextArea?: boolean;
}

export const FormInput = memo(({ label, name, error, isTextArea = false, ...rest }: FormInputProps) => {
    const commonClasses = "w-full p-2 border border-gray-300 rounded-md transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500";
    const errorClasses = "border-red-500";
    const Element = isTextArea ? 'textarea' : 'input';

    return (
        <div>
            <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
            <Element
                id={name}
                name={name}
                className={`${commonClasses} ${error ? errorClasses : ''}`}
                {...rest}
            />
            {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
        </div>
    );
});