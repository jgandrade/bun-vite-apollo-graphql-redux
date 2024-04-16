import React from 'react';

function Home(): React.ReactNode {
  return (
    <div>
      <header data-testid="page-header">Hello Home</header>
      <button type="button" disabled>Load Greeting</button>
    </div>
  );
}

export default Home;
