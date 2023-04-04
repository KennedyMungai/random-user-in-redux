import { useEffect, useState } from "react";
import { useGetUsersQuery } from "./services/users";
import
{
  faEnvelopeOpen,
  FaUser,
  FaCalenderTimes,
  FaMap,
  FaPhone,
  FaLock
} from 'react-icons/fa'

function App()
{
  const [person, setPerson] = useState(null)
  const [value, setValue] = useState("Random Person")
  const [title, setTitle] = useState("name")

  const { data, isLoading, refetch } = useGetUsersQuery()

  useEffect(() =>
  {
    if (data)
    {
      const randomPerson = data.result[0]
    }
  }, [data])


  return (
    <div className="App">
      <h2>Random User</h2>
    </div>
  );
}

export default App;
