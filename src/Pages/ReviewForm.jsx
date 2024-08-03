import React, { useState } from "react";
import "./ReviewForm.css"; // Make sure to create and style this CSS file
import axios from "axios";

export default function ReviewForm({name}) {
  const [formData,setFormData] = useState({clarity:0,
    fairness:0,
    interesting:0,
    organize:0,
    body:"",});

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && event.target.tagName === "TEXTAREA") {
      event.stopPropagation(); // Prevent Enter from propagating to form submit
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await axios.post();

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log(result); // Handle the result as needed

    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
      <div className="title">
        Review for {name}
        <br />
        <span>Fill the review</span>
      </div>

      {/* Replace email and password inputs with star ratings */}
      <div className="rating-group">
        <div className="rating-selects">
          <div className="rating-row">
            <div className="rating-title">
              Clarity
              <div className="rating-inputs">
                <select onChange={handleChange} className="dropdown" id="dropdownClarity" name="dropdownClarity">
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>
            <div className="rating-title">
              Fairness
              <div className="rating-inputs">
                <select onChange={handleChange} className="dropdown" id="dropdownFairness" name="dropdownFairness">
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>
          </div>
          {/* Repeat for other ratings */}
          <div className="rating-row">
            <div className="rating-title">
              Interesting
              <div className="rating-inputs">
                <select onChange={handleChange} className="dropdown" id="dropdownInteresting" name="dropdownInteresting">
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>
            <div className="rating-title">
              Organize
              <div className="rating-inputs">
                <select onChange={handleChange} className="dropdown" id="dropdownOrganize" name="dropdownOrganize">
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <textarea
          name="body"
          placeholder="Write about the Professor"
          className="review-textarea"
          onKeyDown={handleKeyDown}
          onChange={handleChange}
        ></textarea>
      </div>

      <div className="login-with"></div>
      <button className="button-confirm">Submit →</button>
    </form>
  );
}
