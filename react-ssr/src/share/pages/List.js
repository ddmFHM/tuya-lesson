import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../store/actions/user.actions'

function List({ user, dispatch }) {
  
  useEffect(() => {
    dispatch(fetchUser())
  }, [])
  
  return (
    <div>
      <h3>List</h3>
      <ul>
        {
          user.map(item => (
            <li key={item.id} >{item.name}</li>
          ))
        }
      </ul>
    </div>
  )
}

function loadData (store) {
  return store.dispatch(fetchUser())
}

const mapStateToProps = (state) => ({
  user: state.user
})

export default {
  component: connect(mapStateToProps)(List),
  loadData
}