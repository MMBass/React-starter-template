import { useState } from 'react';
import MetaTags from 'react-meta-tags';

function HeadTags() {
  const [themeColor, setColor] = useState();  // todo use context?

  return (
    <div className='wrapper'>
      <MetaTags>
        <meta name="theme-color" content={themeColor} />
      </MetaTags>
    </div>
  );
}

export default HeadTags;
