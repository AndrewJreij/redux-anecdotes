import { useDispatch } from 'react-redux'
import { createNew } from '../reducers/anecdoteReducer'
import { removeNotification, setNotification } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const handleCreate = async (event) => {
        event.preventDefault()
        const content = event.target.content.value
        event.target.content.value = ''
        const newAnecdote = await anecdoteService.createNew(content)
        dispatch(createNew(newAnecdote))

        dispatch(setNotification(`created anecdote '${content}'`))

        setTimeout(() => dispatch(removeNotification('')), 5000)
    }


    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={handleCreate}>
                <div><input name="content" /></div>
                <button type="submit">create</button>
            </form>
        </div>
    )

}

export default AnecdoteForm