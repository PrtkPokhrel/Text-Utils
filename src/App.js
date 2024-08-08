import './App.css';
import Navbar from './Component/Navbar';
import Text from './Component/Text';


function App() {
  return (
    <>

      <Navbar logo='TextUtils' home='Home' about='About' />
      <div className="container">
        <Text heading='Text Utils App' />
      </div>


    </>
  );
}

export default App;
