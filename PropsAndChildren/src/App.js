import React from 'react';
import Card from './Card'; 

function App() {
  return (
    <div>
      <Card title= "Carte 1">
        <p>There is the first card</p>
      </Card>

      <Card title="Carte 2">
        <p>There is the second card</p>
        <button>click here !</button>
      </Card>
    </div>
  );
}

export default App;