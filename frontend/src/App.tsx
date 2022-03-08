import { useState } from 'react';
import { ErrorMessage } from './components/ErrorMessage';
import { TextField } from './components/TextField';
import { Button } from './components/Button';
import { postURL } from './data/postURL';
import GeneratedLink from './features/GeneratedLink/GeneratedLink';
import './app.css';

function App() {
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [generatedLink, setGeneratedLink] = useState<string | null>();
  const [longURL, setLongURL] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    setIsSubmitting(true);

    if (longURL && longURL.length < 5) {
      setErrorMessage('Invalid URL');
      return;
    }

    try {
      const { data, status } = await postURL({ LongURL: longURL });

      if (status !== 201) {
        setErrorMessage('Invalid URL');
      } else {
        setGeneratedLink(data);
      }
    } catch (e) {
      setIsError(true);
      setErrorMessage('Oops, something went wrong!');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='App column'>
      {generatedLink && <GeneratedLink link={generatedLink} />}
      <form id='URLForm' className='column'>
        <label>Enter URL:</label>
        <TextField
          type='url'
          name='LongURL'
          id={'LongURL'}
          onChange={setLongURL}
        />
        {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <div className='wrapper-button'>
          <Button onClick={handleSubmit} disabled={isSubmitting}>
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default App;
