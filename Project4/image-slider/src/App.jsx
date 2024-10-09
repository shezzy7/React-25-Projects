
import './App.css'
import Index from './components/Index'

function App() {
    


  return (
    <div>
      <h2>Image Slider</h2>
      <Index url={"https://picsum.photos/v2/list"} page={7} limit={10}/>

    </div>
  )
}

export default App
