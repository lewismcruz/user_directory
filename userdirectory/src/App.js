import React from 'react';
import logo from './logo.svg';
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import employees from "./employees.json";
import './App.css';

function App() {
  return (
    <Wrapper>
      <h1 className="title">Employees List</h1>
      <EmployeeCard
      name={employees[0].name}
      image={employees[0].image}
      occupation={employees[0].occupation}
      location={employees[0].location}
      e-mail={employees[0].e-mail}
      department={employees[0].department}
      startDate={employees[0].startDate}
      />
      <EmployeeCard
      name={employees[1].name}
      image={employees[1].image}
      occupation={employees[1].occupation}
      location={employees[1].location}
      e-mail={employees[1].e-mail}
      department={employees[1].department}
      startDate={employees[1].startDate}
      />
      <EmployeeCard
      name={employees[2].name}
      image={employees[2].image}
      occupation={employees[2].occupation}
      location={employees[2].location}
      e-mail={employees[2].e-mail}
      department={employees[2].department}
      startDate={employees[2].startDate}
      />
      <EmployeeCard
      name={employees[3].name}
      image={employees[3].image}
      occupation={employees[3].occupation}
      location={employees[3].location}
      e-mail={employees[3].e-mail}
      department={employees[3].department}
      startDate={employees[3].startDate}
      />
      <EmployeeCard
      name={employees[4].name}
      image={employees[4].image}
      occupation={employees[4].occupation}
      location={employees[4].location}
      e-mail={employees[4].e-mail}
      department={employees[4].department}
      startDate={employees[4].startDate}
      />
      <EmployeeCard
      name={employees[5].name}
      image={employees[5].image}
      occupation={employees[5].occupation}
      location={employees[5].location}
      e-mail={employees[5].e-mail}
      department={employees[5].department}
      startDate={employees[5].startDate}
      />
    </Wrapper>
    
  );
}

export default App;
