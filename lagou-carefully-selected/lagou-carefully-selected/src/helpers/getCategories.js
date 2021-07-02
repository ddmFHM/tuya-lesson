import { useState, useEffect } from 'react'
import { API } from '../config'
import axios from 'axios'

export default function useGetCategories(){
  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function getCategories () {
      let response = await axios.get(`${API}/category`) 
      setCategories(response.data)
    }
    getCategories()
  }, [])

  return categories
}