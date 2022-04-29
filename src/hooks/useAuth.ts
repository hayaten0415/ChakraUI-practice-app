
import axios from 'axios';
import { useCallback } from 'react';
import { User } from '../types/api/user';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';



export const useAuth = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const login = useCallback((id: string) => {
    setLoading(true)
    axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => {
      if (res.data) {
        navigate("/home")
      } else {
        alert("User not found")
      }
    })
    .catch(() => alert("Can't Login"))
    .finally(() => setLoading(false))
  }, [navigate])
  return {login, loading}
}