CREATE TABLE users (
    email VARCHAR(255) PRIMARY KEY,
    CHECK (email LIKE '%@post.bgu.ac.il')
    -- Other user fields if necessary
);

CREATE TABLE professors (
    professor_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    department VARCHAR(255),
    clarity_avg INT CHECK (clarity_avg BETWEEN 1 AND 5),
    interesting_avg INT CHECK (interesting_avg BETWEEN 1 AND 5),
    organize_avg INT CHECK (organize_avg BETWEEN 1 AND 5),
    fairness_avg INT CHECK (fairness_avg BETWEEN 1 AND 5)
    -- Other professor fields
);

CREATE TABLE reviews (
    review_id INT AUTO_INCREMENT PRIMARY KEY,
    user_email VARCHAR(255),
    professor_id INT,
    clarity INT CHECK (clarity BETWEEN 1 AND 5),
    interesting INT CHECK (interesting BETWEEN 1 AND 5),
    organized INT CHECK (organized BETWEEN 1 AND 5),
    difficulty INT CHECK (difficulty BETWEEN 1 AND 5),
    comment TEXT,
    review_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_email) REFERENCES users(email),
    FOREIGN KEY (professor_id) REFERENCES professors(professor_id),
    UNIQUE (user_email, professor_id)  -- Ensures a user can't review the same professor more than once
);

INSERT INTO professors (name, department, clarity_avg, interesting_avg, organize_avg, fairness_avg) VALUES
('Dr. John Doe', 'Computer Science', 4, 4, 4, 3),
('Dr. Jane Smith', 'Mathematics', 4, 4, 4, 4),
('Dr. Emily Johnson', 'Physics', 4, 5, 4, 4),
('Dr. Michael Brown', 'Chemistry', 3, 3, 4, 3),
('Dr. Linda Davis', 'Biology', 4, 4, 4, 4);