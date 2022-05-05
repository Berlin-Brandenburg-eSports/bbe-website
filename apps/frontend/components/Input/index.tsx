import classNames from 'classnames';
import { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react';

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label?: string;
}

const Input: FC<InputProps> = ({ className, type = 'text', label, ...props }) => {
  return (
    <label className={classNames('block', 'group')}>
      {label && <span className={classNames('text-gray-light', 'group-focus-within:text-primary', 'transition-colors')}>{label}</span>}
      <input
        type={type}
        className={classNames(
          'bg-transparent',
          'border-0',
          'border-b-2',
          'focus:ring-0',
          'border-gray-light',
          'focus:border-primary',
          'block',
          'transition-colors'
        )}
        {...props}
      />
    </label>
  );
};

export default Input;
