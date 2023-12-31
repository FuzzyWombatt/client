// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import React from 'react'

import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div>
      Federated to the gills {React.version}
      <NxWelcome title="client" />
    </div>
  );
}

export default App;
