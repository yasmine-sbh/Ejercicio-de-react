const { useState } = React;

// Liste d'utilisateurs
const users = [
  {
    name: 'Hedy Lamarr',
    imageUrl: 'https://media.kasperskydaily.com/wp-content/uploads/sites/92/2015/11/06023739/hedy-lamarr-FB.jpg',
    imageSize: 90,
  },
  {
    name: 'Ada Lovelace',
    imageUrl: 'https://resh.com.br/wp-content/uploads/2023/03/Ada-Lovelace.jpg',
    imageSize: 90,
  },
  {
    name: 'Grace Hopper',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTc0MTcxMDAxN15BMl5BanBnXkFtZTgwMjMxODIzNTE@._V1_.jpg',
    imageSize: 90,
  }
];

// Composants
function MyButton1() {
  return <button>I'm a button</button>;
}

function MyButton2() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}


function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </>
  );
}

function Profile({ user }) {
  return (
    <div className="profile">
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{ width: user.imageSize, height: user.imageSize }}
      />
    </div>
  );
}

function AdminPanel() {
  return (
    <div>
      <h2>Bienvenue Admin</h2>
      <p>Voici le panneau d'administration.</p>
    </div>
  );
}

function UserDashboard() {
  return (
    <div>
      <h2>Bienvenue Utilisateur</h2>
      <p>Voici votre tableau de bord.</p>
    </div>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState(null); // 'admin' ou 'user'
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin(e) {
    e.preventDefault();
    if (username === 'admin' && password === 'adminpass') {
      setRole('admin');
      setIsLoggedIn(true);
    } else if (username && password) {
      setRole('user');
      setIsLoggedIn(true);
    } else {
      alert('Identifiants invalides');
    }
  }

  function handleLogout() {
    setIsLoggedIn(false);
    setRole(null);
    setUsername('');
    setPassword('');
  }

  if (!isLoggedIn) {
    return (
      <form onSubmit={handleLogin}>
        <h2>Connexion</h2>
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
        <br />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit">Se connecter</button>
      </form>
    );
  }

  return (
    <div>
      <button onClick={handleLogout}>Se déconnecter</button>

      {role === 'admin' ? <AdminPanel /> : <UserDashboard />}

      <h1>Welcome to my app</h1>
      <MyButton1 />
      <MyButton2 />

      <div>
        {users.map((user, index) => (
          <Profile key={index} user={user} />
        ))}
      </div>

      <AboutPage />

       <h2>Shopping List</h2>
       <ShoppingList />
    </div>
  );
}

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}

