import { useState } from 'react';
import './App.css';

function App() {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [course, setCourse] = useState('');
const [submitted, setSubmitted] = useState(false);

const handleSubmit = (e) => {
e.preventDefault();
setSubmitted(true);
};

return ( <div className="container"> <h1>Student Registration Form</h1>

  <form onSubmit={handleSubmit}>
    <input
      type="text"
      placeholder="Enter Student Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      required
    />

    <input
      type="email"
      placeholder="Enter Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
    />

    <input
      type="text"
      placeholder="Enter Course"
      value={course}
      onChange={(e) => setCourse(e.target.value)}
      required
    />

    <button type="submit">Submit</button>
  </form>

  {submitted && (
    <div className="details">
      <h2>Student Details</h2>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Course: {course}</p>
    </div>
  )}
</div>


);
}

export default App;
