import React, {useState} from 'react'

const About = () => {
    const [query, setQuery] = useState('');
    const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Fig', 'Grape'];
  
    const handleSearchChange = (event) => {
      setQuery(event.target.value.toLowerCase());
    };
  
    const filteredItems = items.filter(item =>
      item.toLowerCase().includes(query)
    );
  
  return (
    <div className='top-section'>
      <h1>About</h1>
      <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleSearchChange}
        value={query}
      />
      <ul className='item-list'>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default About;
