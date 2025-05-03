import React from 'react';
import { useTranslation } from '@package/i18next';

type LanguageSwitchProps = {
  onLanguageChange?: (lang: string) => void;
};

export const LanguageSwitch: React.FC<LanguageSwitchProps> = ({ 
  onLanguageChange 
}) => {
  const { i18n } = useTranslation();
  
  const switchLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    if (onLanguageChange) {
      onLanguageChange(lng);
    }
  };

  return (
    <div className="flex flex-col gap-4 p-4 border rounded-md">
      <div className="flex flex-row gap-2 items-center">
        <span className="text-sm font-medium">Current language:</span>
        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">
          {i18n.language === 'vi' ? 'Vietnamese' : 'English'}
        </span>
      </div>
      
      <div className="flex gap-2">
        <button
          className={`px-4 py-2 rounded-md text-sm font-medium ${
            i18n.language === 'en' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => switchLanguage('en')}
        >
          English
        </button>
        <button
          className={`px-4 py-2 rounded-md text-sm font-medium ${
            i18n.language === 'vi' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => switchLanguage('vi')}
        >
          Vietnamese
        </button>
      </div>
    </div>
  );
}; 