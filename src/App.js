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

  return (
    <div className="App">
      <h2>Random User</h2>
    </div>
  );
}

export default App;
