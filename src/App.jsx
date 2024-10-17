
import './App.css'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import Recipes from './components/Recipes/Recipes'

function App() {
  

  return (
    <div className='max-w-[1320px] mx-auto'>
      
     <Header></Header>
    <div className=' md:mx-2 mx-1'>
    <Banner></Banner>
    </div>
     <Recipes></Recipes>
      
    </div>
  )
}

export default App
