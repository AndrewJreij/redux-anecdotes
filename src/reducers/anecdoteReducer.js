import { createSlice } from "@reduxjs/toolkit"

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    createNew(state, action) {
      state.push(action.payload)
    },
    vote(state, action) {
      const id = action.payload

      const anecdoteToVote = state.find(n => n.id === id)
      const votedAnecdote = { ...anecdoteToVote, votes: anecdoteToVote.votes + 1 }

      return state.map(anecdote => anecdote.id !== id ? anecdote : votedAnecdote)
    },
    setAnecdotes(state, action) {
      return action.payload
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

export const { createNew, vote, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer