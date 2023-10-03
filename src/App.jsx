import CakeContainer from './components/CakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';

function App () {
  return (
    <Provider store={ store }>
      <div className='max-w-full flex flex-col p-4'>
        {/* <HooksCakeContainer />
        <CakeContainer />
        <IceCreamContainer />
        <NewCakeContainer />
        <ItemContainer cake />
        <ItemContainer /> */}
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
