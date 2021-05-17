import React from 'react';

import LanguageSelector from 'components/LanguageSelector';
import Version from 'components/Version';

export default function Dashboard() {
  return (
    <div className="">
      Dashboard
      <LanguageSelector />
      <Version />
    </div>
  );
}
