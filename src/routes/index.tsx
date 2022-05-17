import { Routes, Route } from 'react-router-dom'
import styles from './Routes.module.scss'
import { Header } from 'routes/_shared/Header'
import { Footer } from 'routes/_shared/Footer'
import RecoilSearch from './RecoilSearch'
import ReduxToolkitSearch from './ReduxToolkitSearch'
import UseQuerySearch from './UseQuerySearch'

const App = () => {
  return (
    <div className={styles.appWrapper}>
      <Header />
      <Routes>
        <Route path='/' element={<UseQuerySearch />} />
        <Route path='useQuery' element={<UseQuerySearch />} />
        <Route path='redux' element={<ReduxToolkitSearch />} />
        <Route path='recoil' element={<RecoilSearch />} />
        <Route path='*' element={<div>404</div>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
