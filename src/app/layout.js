import './globals.css'
import "tw-elements/dist/css/tw-elements.min.css";
import { Roboto,Noto_Sans_SC } from 'next/font/google'
import Navbar from './components/navbar';
import Footer from './components/footer';
import config from './config';
const roboto = Roboto({weight:"400",subsets:["latin"]});
const nss = Noto_Sans_SC({weight:"400",subsets:["latin"]});

export const metadata = {
  title: 'Bangumi-Go!',
  description: 'Bangumi-Go!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh">
      <body className={`${roboto.className} ${nss.className}`}>
        <Navbar/>
        <div id="body" className="w-3/4 mx-auto my-20">
        { children }
        </div>
        <Footer/>
      </body>
    </html>
  )
}
