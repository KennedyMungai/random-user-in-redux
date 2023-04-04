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
      const randomPerson = data.result
      const { phone, email } = randomPerson
      const { large: image } = randomPerson.picture
      const { password } = randomPerson.login
      const { first, last } = randomPerson.name
      const { dob: { age } } = randomPerson
      const { street: { number, name } } = randomPerson.location

      const newPerson = {
        image,
        phone,
        email,
        password,
        age,
        street: `${number}, ${name}`,
        name: `${first} ${last}`
      }
    }
  }, [data])


  return (
    <div className="App">
      <h2>Random User</h2>
    </div>
  );
}

export default App;
