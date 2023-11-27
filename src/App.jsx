import { useState } from 'react'
import ButtonMenu from './components/ButtonMenu'
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Presentation from './components/Presentation'

function App() {
  const [lang, setLang] = useState('en');

  return (
    <div>
      <Navbar
        lang={lang}
        setLang={setLang}
      />
      <Header lang={lang}/>
      <ButtonMenu lang={lang}/>
      <Presentation lang={lang}/>
      <Footer lang={lang}/>
    </div>
  )
}

export default App
