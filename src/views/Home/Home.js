import React from 'react';

import LanguageSelector from 'components/LanguageSelector';
import Version from 'components/Version';

export default function Home() {
  return (
    <div className="">
      <LanguageSelector />
      <Version />
    </div>
  );
}
