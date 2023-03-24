import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Filter'
import anecdoteService from './services/anecdotes'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { setAnecdotes } from './reducers/anecdoteReducer'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    anecdoteService.getAll().then(anecdotes => dispatch(setAnecdotes(anecdotes)))
  })
  return (
    <div>
      <Notification />
      <AnecdoteList />
      <Filter />
      <AnecdoteForm />
    </div>
  )
}

export default App