import { useState } from 'react'
import './App.css'
import Banner from './Banner'
import MainPart from './MainPart'
import Nav from './Nav'
import OurRecipe from './OurRecipe'

function App() {

  const [cooks,setCooks] = useState([]);
  function wantToCook(recipe){
    const all = [...cooks,recipe]
      setCooks(all)
  }
    return (
    <>
     <Nav></Nav>
     <Banner></Banner>
     <OurRecipe></OurRecipe>
     <MainPart cooks={cooks} wantToCook={wantToCook}></MainPart>

    </>
  )
}

export default App
