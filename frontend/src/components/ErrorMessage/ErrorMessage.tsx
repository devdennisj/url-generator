import './errormessage.css';

interface IErrorMessage {
  children: React.ReactNode;
}

export function ErrorMessage({ children }: IErrorMessage) {
  return <p className='error-message'>{children}</p>;
}
