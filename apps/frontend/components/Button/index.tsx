import classNames from 'classnames';
import { AnchorHTMLAttributes, DetailedHTMLProps, forwardRef } from 'react';

type ButtonProps = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

const Button = forwardRef<HTMLAnchorElement, ButtonProps>(({ onClick, href, ...props }, ref) => {
  return (
    <a
      href={href}
      onClick={onClick}
      ref={ref}
      className={classNames(
        'bg-primary',
        { 'hover:bg-primary-dark': !!href || !!onClick },
        'px-3',
        'select-none',
        'py-2',
        'rounded-sm',
        'transition-colors',
        'ease-in-out'
      )}
      {...props}
    >
      Button
    </a>
  );
});

Button.displayName = 'Button';

export default Button;
