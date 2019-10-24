import React from 'react';
import useWindowDimensions from './helpers/useWindowDimensions';
import './App.sass';

import Header from './components/Header/Header';
import CardsList from './components/CardsList/CardsList';
import Info from './components/Info/Info';

import MobileLayout from './components/MobileLayout/MobileLayout';



function App() {

  const { width } = useWindowDimensions();
  return (
    <div className="App">

        {
            width<=500? <MobileLayout/>:

                <React.Fragment>

                    <Header/>

                    <main>
                        <CardsList/>
                        <Info/>
                    </main>

                </React.Fragment>
        }

    </div>
  );
}

export default App;
