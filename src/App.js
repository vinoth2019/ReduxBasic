import { useSelector } from 'react-redux';
import Auth from './components/Auth';
import Counter from './components/Counter';
import Header from './components/Header';
import UserProfile from './components/UserProfile';

function App() {
  const auth = useSelector((state) => state.auth.isAuth); 

  return (
    <>
    <Header />
    {!auth &&<Auth />}
    {auth && <UserProfile />}
     {auth && <Counter />}
    </>   
  );
}

export default App;
