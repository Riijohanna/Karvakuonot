import React, { useState, useEffect } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Button from './Button';

  const App = () => {
  const [pets, setPets] = useState([])
  const [index, setIndex] = useState(0)
  const fetchPets = async () => {
  const apiUrl = 'https://koira-api.herokuapp.com/api/v1/dogs';
  const response = await fetch(apiUrl);
  const data = await response.json();
  setPets(data)
}

  useEffect(() => {
 fetchPets()
  }, [])

  const handleClick = () => {
    setIndex(index+1);
    console.log('clicked!');
}

  return (
    <div className="App">
    <Header title='Tinder for pets'/>
  <Content imageUrl={pets[index] && pets[index].imageUrl} title={pets[index] && pets[index].title} />
  <Footer>
  <Button onClick={handleClick} icon="heart-broken" />
  <Button onClick={handleClick} icon="heart" />
</Footer>
    </div>
  );
}

export default App;
