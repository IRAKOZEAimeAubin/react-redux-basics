import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store';

function App () {
  return (
    <Provider store={ store }>
      <div className='max-w-full flex flex-col p-4'>
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
