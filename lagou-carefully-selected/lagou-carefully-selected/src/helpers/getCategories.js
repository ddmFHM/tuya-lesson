import { useState, useEffect } from 'react'
import { API } from '../config'
import axios from 'axios'
import { isAuth } from './auth'

export default function useGetCategories(){

  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function getCategories () {
      let response = await axios.get(`${API}/categories`)
      setCategories(response.data)
    }
    getCategories()
  }, [])

  return categories
}