import { useSelector, useDispatch } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { setNotification, removeNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
    const anecdotes = useSelector(({ filter, anecdotes }) => {
        return filter === ''
            ? anecdotes
            : anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter))
    })
    const dispatch = useDispatch()

    const sortedAnecdotes = [...anecdotes]
    sortedAnecdotes.sort((a, b) => b.votes - a.votes)

    const handleVote = (id, content) => {
        console.log(id)
        dispatch(vote(id))
        dispatch(setNotification(`voted for ${content}`))

        setTimeout(() => dispatch(removeNotification('')), 5000)
    }
    return (
        <div>
            <h2>Anecdotes</h2>
            {sortedAnecdotes.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => handleVote(anecdote.id, anecdote.content)}>vote</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AnecdoteList