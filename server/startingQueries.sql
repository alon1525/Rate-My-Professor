CREATE TABLE users (
    email VARCHAR(255) PRIMARY KEY,
    CHECK (email LIKE '%@post.bgu.ac.il')
    -- Other user fields if necessary
);

CREATE TABLE professors (
    professor_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    department VARCHAR(255)
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