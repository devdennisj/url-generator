import './button.css';

interface IButton {
  children: React.ReactNode;
  onClick: (props?: any) => any;
  disabled?: boolean;
}

export function Button({ children, onClick, disabled }: IButton) {
  return (
    <button
      className='button'
      onClick={onClick}
      type='submit'
      disabled={!!disabled}
    >
      {children}
    </button>
  );
}
