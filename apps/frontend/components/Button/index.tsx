import classNames from 'classnames';
import { AnchorHTMLAttributes, DetailedHTMLProps, forwardRef } from 'react';

type ButtonProps = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

const Button = forwardRef<HTMLAnchorElement, ButtonProps>(({ onClick, href, children, className, ...props }, ref) => {
  const hasAction = !!href || !!onClick;

  return (
    <a
      href={href}
      onClick={onClick}
      ref={ref}
      className={classNames(
        'bg-primary',
        { 'hover:bg-primary-dark': hasAction },
        'px-3',
        'select-none',
        'py-2',
        'rounded-sm',
        'transition-colors',
        'ease-in-out',
        { 'cursor-pointer': hasAction },
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
});

Button.displayName = 'Button';

export default Button;
