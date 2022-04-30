
import axios from 'axios';
import { useCallback } from 'react';
import { User } from '../types/api/user';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useMessage } from './useMessage';
import { useLoginUser } from './useLoginUser';



export const useAuth = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const { showMessage } = useMessage()
  const { setLoginUser } = useLoginUser()

  const login = useCallback((id: string) => {
    setLoading(true)
    axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => {
      if (res.data) {
        setLoginUser(res.data)
        showMessage({title: "Login Complete", status: "success"})
        navigate("/home")
      } else {
        showMessage({ title: "User Not Found", status: "error" })
      }
    })
    .catch(() => showMessage({ title: "Login Failed", status: "error" }))
    .finally(() => setLoading(false))
  }, [navigate, showMessage, setLoginUser])
  return {login, loading}
}