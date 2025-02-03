import React, { useState } from 'react';

// Composant principal
function App() {
  // State pour gérer la liste des utilisateurs
  const [users, setUsers] = useState([
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Alice', age: 30 },
  ]);

  // State pour gérer les inputs du formulaire
  const [newUser, setNewUser] = useState({ name: '', age: '' });

  // Fonction pour ajouter un nouvel utilisateur
  const addUser = (e) => {
    e.preventDefault(); // Empêcher le rechargement de la page
    if (newUser.name && newUser.age) {
      const user = {
        id: users.length + 1, // Générer un ID unique
        name: newUser.name,
        age: parseInt(newUser.age), // Convertir l'âge en nombre
      };
      setUsers([...users, user]); // Ajouter le nouvel utilisateur à la liste
      setNewUser({ name: '', age: '' }); // Réinitialiser le formulaire
    }
  };

  // Fonction pour mettre à jour les champs du formulaire
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  return (
    <div>
      <h1>Liste des utilisateurs</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age} ans
          </li>
        ))}
      </ul>

      <h2>Ajouter un utilisateur</h2>
      <form onSubmit={addUser}>
        <div>
          <label>Nom :</label>
          <input
            type="text"
            name="name"
            value={newUser.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Âge :</label>
          <input
            type="number"
            name="age"
            value={newUser.age}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}

export default App;
