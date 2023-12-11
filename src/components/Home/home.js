// src/Home.js
import React, { useEffect, useState } from 'react';
import './home.css'

const Home = () => {
	
	const [isVisible, setIsVisible] = useState(false);
	
	  useEffect(() => {
    // After the component mounts, set a timeout to add the 'visible' class
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 1000); // Adjust the delay as needed
	
    // Clear the timeout when the component unmounts to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, []); // The empty dependency array ensures this effect runs once after mounting

	
	
	return (
		<div>
		  <header>
			<a href = "/">
				<img className={`logo ${isVisible ? 'visible' : ''}`} src="/assets/logo.jpg" alt="Company Logo" />
			</a>
		  </header>
		  <nav>
			<ul>
			  <li><a href="#">My Tasks</a></li>
			  <li><a href="#">My Projects</a></li>
			  <li><a href="#">My HRL Cloud</a></li>
			  <li><a href="#">Staff Planner</a></li>
			  <li><a href="#">Timesheets</a></li>
			  <li><a href="#">Company Phonebook</a></li>
			  
			  {/* Add more links as needed */}
			</ul>
		  </nav>
		  <section>
			<h2>Welcome Back!</h2>
				<div>
					<img className= "skyloo" src="/assets/sky.webp" alt="Company Logo" />
				</div>
		  </section>
		</div>
	  );
	};

export default Home;