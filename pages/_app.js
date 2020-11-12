import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '@/components/shared/Nav'
import Footer from '@/components/shared/Footer'
function MyApp({ Component, pageProps }) {
  return  (
    <div className='myApp'>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
    </div>
  )
}

export default MyApp
