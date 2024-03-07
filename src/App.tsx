import Collapse from './components/Collapse/Collapse'
import Text from './components/Text.tsx/Text'
import './App.css'

function App() {
  const text = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum optio quaerat atque quos praesentium neque quis facilis';

  return (
    <>
      <Collapse collapsedLabel={'Показать текст'} expandedLabel={'Скрыть текст'} children={<Text text={text}/>} />
    </>
  )
}

export default App
