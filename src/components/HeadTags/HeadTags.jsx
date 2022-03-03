import { useState } from 'react';
import MetaTags from 'react-meta-tags';

import { theme } from '@/theme';

function HeadTags() {
  const [themeColor, setColor] = useState(theme.palette.primary.light);

  return (
    <div className='wrapper'>
      <MetaTags>
        <meta name="theme-color" content={themeColor} />
      </MetaTags>
    </div>
  );
}

export default HeadTags;
