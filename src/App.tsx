import './styles/global.css'
import Habit from './components/Habit'

function App() {
  return (
    <div className='row-auto'>
      <div className='col-span-2'>
        <Habit completed={4} />
      </div>
      <div className='col-span-6'>
        <Habit completed={4} />
      </div>
    </div>
  )
}

export default App
