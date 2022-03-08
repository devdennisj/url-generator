import './generated_link.css';
import { Tooltip } from '../../components/Tooltip';
import { useEffect, useState } from 'react';

function GeneratedLink({ link }: { link: string }) {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (isCopied === true) {
      setTimeout(() => setIsCopied(false), 2000);
    }
  }, [isCopied]);

  const handleClick = () => {
    navigator.clipboard.writeText(link);
    setIsCopied(true);
  };

  return (
    <>
      <h2>Click to copy link:</h2>
      <div className='wrapper-generated-link'>
        {isCopied && <Tooltip isVisible={isCopied}>Copied!</Tooltip>}
        <p onClick={handleClick}>{link}</p>
      </div>
    </>
  );
}

export default GeneratedLink;
