import { useContext, useEffect, useState } from 'react';
import './App.css';
import AppRouter from './components/AppRouter';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { observer } from 'mobx-react-lite'
import { AuthContext } from './context/context';
import { check } from './http/userAPI';
import MyLoader from './components/UI/loader/MyLoader';


const App = observer(() => {
  const { user } = useContext(AuthContext)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (localStorage.getItem('token')) {
      check().then(data => {
        user.setUser(data)
        user.setIsAuth(true)
        if (data.role === 'ADMIN') {
          user.setIsAdmin(true)
        } else {
          user.setIsAdmin(false)
        }
      }).finally(() => setLoading(false))
    } else {
      setLoading(false)
    }
  }, [])

  if (loading) {
    return <MyLoader />
  }

  return (
    <div className="App">
      <Header />
      <AppRouter />
      <Footer />
    </div>
  );
})

export default App;
