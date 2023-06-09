import { useEffect, useState } from "react";
import { useGetUsersQuery } from "./services/users";
import
{
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock
} from 'react-icons/fa'

function App()
{
  const [person, setPerson] = useState(null)
  const [value, setValue] = useState("Random Person")
  const [title, setTitle] = useState("name")

  const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg'

  const { data, isLoading, refetch } = useGetUsersQuery()

  const handleValue = (e) =>
  {
    if (e.target.classList.contains("icon"))
    {
      const newValue = e.target.dataset.label
      setTitle(newValue)
      setValue(person[newValue])
    }
  }

  useEffect(() =>
  {
    if (data)
    {
      const randomPerson = data.results[0]
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

      setPerson(newPerson)
      setTitle("name")
      setValue(newPerson.name)
    }
  }, [data])


  return (
    <main>
      <div className="block bcg-black"></div>
      <div className="block">
        <div className="container">
          <img
            src={(person && person.image) || defaultImage}
            alt="random user"
            className="user-img"
          />
          <p className="user-title">
            My {title}
          </p>
          <p className="user-value">
            {value}
          </p>
          <div className="values-list">
            <button
              className="icon"
              data-label="name"
              onMouseOver={handleValue}
            >
              <FaUser />
            </button>
            <button
              className="icon"
              data-label="age"
              onMouseOver={handleValue}
            >
              <FaEnvelopeOpen />
            </button>
            <button
              className="icon"
              data-label="email"
              onMouseOver={handleValue}
            >
              <FaCalendarTimes />
            </button>
            <button
              className="icon"
              data-label="street"
              onMouseOver={handleValue}
            >
              <FaMap />
            </button>
            <button
              className="icon"
              data-label="phone"
              onMouseOver={handleValue}
            >
              <FaPhone />
            </button>
            <button
              className="icon"
              data-label="password"
              onMouseOver={handleValue}
            >
              <FaLock />
            </button>
          </div>
          <button
            className="btn"
            onClick={() => refetch()}
          >
            {isLoading ? 'Loading...' : 'Random User'}
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
