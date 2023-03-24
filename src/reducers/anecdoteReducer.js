import { createSlice } from "@reduxjs/toolkit"
import anecdoteService from '../services/anecdotes'
const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    voteOn(state, action) {
      const id = action.payload.id
      const anecdoteToVote = state.find(n => n.id === id)
      const votedAnecdote = { ...anecdoteToVote, votes: anecdoteToVote.votes + 1 }

      return (state.map(anecdote => anecdote.id !== id ? anecdote : votedAnecdote))
    },
    setAnecdotes(state, action) {
      return action.payload
    },
    append(state, action) {
      state.push(action.payload)
    }
  }
})

// const anecdoteReducer = (state = initialState, action) => {
//   // console.log('state now: ', state)
//   // console.log('action', action)

//   switch (action.type) {
//     case 'VOTE': {
//       const id = action.payload.id
//       const anecdoteToVote = state.find(n => n.id === id)
//       const votedAnecdote = { ...anecdoteToVote, votes: anecdoteToVote.votes + 1 }

//       return state.map(anecdote => anecdote.id !== id ? anecdote : votedAnecdote)
//     }
//     case 'NEW_ANECDOTE':
//       return state.concat(action.payload)
//   }

//   return state
// }

// export const vote = (id) => {
//   return {
//     type: 'VOTE',
//     payload: { id }
//   }
// }

// export const createNew = (content) => {
//   return {
//     type: 'NEW_ANECDOTE',
//     payload: {
//       content,
//       votes: 0,
//       id: getId()
//     }
//   }
// }

export const { voteOn, setAnecdotes, append } = anecdoteSlice.actions
export default anecdoteSlice.reducer

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createNew = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(append(newAnecdote))
  }
}

export const vote = (anecdote) => {
  return async dispatch => {
    console.log(anecdote)

    const anecdoteToVote = await anecdoteService.update({ ...anecdote, votes: anecdote.votes + 1 })

    dispatch(voteOn(anecdoteToVote))
  }
}