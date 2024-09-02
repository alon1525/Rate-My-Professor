import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import { useParams } from "react-router-dom";
import ProfessorList from "../Components/ProfessorList";

export default function SearchResultsPage() {
  const [professors, setProfessors] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("הכל");

  const { search } = useParams();

  useEffect(() => {
    async function fetchProfessors(query) {
      if (search !== '') {
        try {
          const response = await axios.get(`http://localhost:4000/api/professors?search=${search}`);
          setProfessors(response.data);
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

  const filteredProfessors = selectedDepartment === "הכל"
    ? professors
    : professors.filter(professor => professor.department === selectedDepartment);

  return (
    <div className="search-results-page">
      <h2 className="found-number" dir="rtl">{`נמצאו ${filteredProfessors.length} תוצאות`}</h2>
      <div className="department-filter">
        <select
          onChange={(e) => setSelectedDepartment(e.target.value)}
          className="department-select"
          id="department"
          name="department"
          value={selectedDepartment}
          dir="rtl"
        >
          <option value="הכל">הכל</option>
          {uniqueDepartments.map((department) => (
            <option key={department} value={department}>
              {department}
            </option>
          ))}
        </select>
        <span dir="rtl">מחלקה:</span>
      </div>
      <ProfessorList professors={filteredProfessors} />
    </div>
  );
}
