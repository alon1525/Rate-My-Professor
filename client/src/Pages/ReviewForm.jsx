import React, { useState } from "react";
import "./ReviewForm.css"; // Make sure to create and style this CSS file
import axios from "axios";

export default function ReviewForm({ name }) {

  const [formData, setFormData] = useState({
    rating: 1,
    header: "",
    body: "",
    name: name,
  });


  const handleKeyDown = (event) => {
    if (event.key === "Enter" && event.target.tagName !== "TEXTAREA") {
      event.preventDefault();
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post(`http://localhost:4000/api/submit-review`, formData);
      if (response.status !== 200) {
        throw new Error("Network response was not ok");
      }

      const result = await response.data;
      console.log(result); // Handle the result as needed
      
      // Use navigate after successful form submission

      setTimeout(() => {
        window.location.reload();
      }, 500);

    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
      <div className="title">
        Review for {name}
        <br />
        <span>Fill out the review</span>
      </div>

      <div className="rating-group">
        <div className="rating-row">
          <label className="rating-title">Rating</label>
          <select
            onChange={handleChange}
            className="rating-select"
            id="rating"
            name="rating"
            value={formData.rating}
          >
            {[1, 2, 3, 4, 5].map((val) => (
              <option key={val} value={val}>
                {val}
              </option>
            ))}
          </select>
        </div>

        <div className="header-input-row">
          <input
            type="text"
            name="header"
            placeholder="Review header"
            className="header-input"
            onChange={handleChange}
            value={formData.header}
            maxLength="40"
          />
        </div>

        <textarea
          name="body"
          placeholder="Write about the Professor"
          className="review-textarea"
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          value={formData.body}
          maxLength="300"
        ></textarea>
      </div>

      <button className="button-confirm" type="submit">
        Submit →
      </button>
    </form>
  );
}
