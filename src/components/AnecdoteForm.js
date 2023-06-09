import { useDispatch } from 'react-redux'
import { createNew } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const handleCreate = (event) => {
        event.preventDefault()
        const content = event.target.content.value
        event.target.content.value = ''
        dispatch(createNew(content))
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