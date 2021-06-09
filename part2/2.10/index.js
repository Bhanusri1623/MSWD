import ReactDOM from 'react-dom'
import App from './App.js'

const persons = [
  {
    id: 1,
    name: 'sowmya',
    number: 9864330723
  },
  {
    id: 2,
    name: 'Bhanu',
    number: 8074151531
  },
  {
    id: 3,
    name: 'vysh',
    number: 9701205593
  }
]

ReactDOM.render(
  <App persons={persons} />,
  document.getElementById('root')
)
