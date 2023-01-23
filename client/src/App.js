import { useMutation, useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';
import './App.css';
import { CREATE_USER } from './mutations/user';
import { GET_ALL_USERS, GET_USER } from './query/user';

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
    username: '',
    age: 0,
  });

  const [newUser] = useMutation(CREATE_USER);
  const { data, loading, error, refetch } = useQuery(GET_ALL_USERS, { pollInterval: 1000 });
  const { data: oneUser, loading: loadingOneUser } = useQuery(GET_USER, { variables: { id: 1 } });

  console.log(oneUser);

  const getAll = (e) => {
    e.preventDefault();
    refetch();
  };

  const createUser = () => {
    newUser({
      variables: {
        input: user,
      },
    })
      .then((data) => console.log(data))
      .finally(() => setUser({ username: '', age: 0 }));
  };

  useEffect(() => {
    if (!loading) setUsers(data.getAllUsers);
  }, [data]);

  if (loading) return <h1>Loading...</h1>;
  return (
    <div className="App">
      <form>
        <input
          value={user.username}
          onChange={(e) => setUser((prev) => ({ ...prev, username: e.target.value }))}
          type="text"
        />
        <input
          value={user.age}
          onChange={(e) => setUser((prev) => ({ ...prev, age: parseInt(e.target.value) }))}
          type="number"
        />
        <div className="brns">
          <button
            onClick={(e) => {
              e.preventDefault();
              createUser();
            }}>
            Создать
          </button>
          <button onClick={getAll}>Получить</button>
        </div>
      </form>

      <div>
        {users.map((user, i) => (
          <div key={`${user.id}_${i}`} className="user">
            {user.id}. {user.username}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
