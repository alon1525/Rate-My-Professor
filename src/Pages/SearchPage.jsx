import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import { useParams } from "react-router-dom";
import ProfessorList from "../Components/ProfessorList";

export default function SearchResultsPage() {
  const [professors, setProfessors] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("All");

  const {search} = useParams();
  console.log(selectedDepartment);

  useEffect(() => {
    async function fetchProfessors(query) {
      if (search !== '') {
        try {
          const response = await axios.get(`http://localhost:4000/api/professors?search=${search}`);
          setProfessors(response.data);
          console.log(response.data);
        } catch (error) {
          console.error("There was an error fetching the professors!", error);
        }
      }
    }
    
    fetchProfessors(search);
  }, [search]);

  const uniqueDepartments = Array.from(
    new Set(professors.map(professor => professor.department).filter(department => department))
  );

  return (
    <div className="search-results-page">
      <h2>{`${professors.length} Professors with "${search}" in their name`}</h2>
      <div className="department-filter">
        <span>Department:</span>
        <select
            onChange={(e)=>{setSelectedDepartment(e.target.value)}}
            className="department-select"
            id="department"
            name="department"
            value={selectedDepartment}
          >
            <option value= "All">All</option>
            {uniqueDepartments.map((department) => (
              <option key={department} value={department}>
                {department}
              </option>
            ))}
          </select>
          <ProfessorList professors={professors}/>
      </div>
    </div>
  );
}
