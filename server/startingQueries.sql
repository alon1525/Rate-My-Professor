-- Create the database
DROP DATABASE IF EXISTS rate_my_professor;
CREATE DATABASE rate_my_professor;
USE rate_my_professor;

-- Create the users table
CREATE TABLE users (
    email VARCHAR(255) PRIMARY KEY,
    CHECK (email LIKE '%@post.bgu.ac.il')
    -- Other user fields if necessary
);

-- Create the professors table with unique name field
CREATE TABLE professors (
    professor_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    department VARCHAR(255),
    total_avg FLOAT(5,2) -- Only total_avg field
    -- Other professor fields
);

-- Create the reviews table with professor_name as a foreign key
CREATE TABLE reviews (
    review_id INT AUTO_INCREMENT PRIMARY KEY,
    user_email VARCHAR(255),
    professor_name VARCHAR(255),
    rating INT CHECK (rating BETWEEN 1 AND 5),
    header TEXT,
    comment TEXT,
    review_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_email) REFERENCES users(email),
    FOREIGN KEY (professor_name) REFERENCES professors(name),
    UNIQUE (user_email, professor_name)  -- Ensures a user can't review the same professor more than once
);

-- Insert sample data into professors table
INSERT INTO professors (name, department) VALUES
('Dr. John Doe', 'Computer Science'),
('Dr. Jane Smith', 'Mathematics'),
('Dr. Emily Johnson', 'Physics'),
('Dr. Michael Brown', 'Chemistry'),
('Dr. Linda Davis', 'Biology');

-- Define triggers to update average ratings
DELIMITER //

-- Trigger to update average after inserting a review
CREATE TRIGGER update_professor_avg_after_insert
AFTER INSERT ON reviews
FOR EACH ROW
BEGIN
    DECLARE avg_rating FLOAT(5,2);

    -- Calculate the average rating
    SELECT AVG(rating) INTO avg_rating
    FROM reviews
    WHERE professor_name = NEW.professor_name;

    -- Update the professor's average rating
    UPDATE professors
    SET total_avg = avg_rating
    WHERE name = NEW.professor_name;
END//

-- Trigger to update average after updating a review
CREATE TRIGGER update_professor_avg_after_update
AFTER UPDATE ON reviews
FOR EACH ROW
BEGIN
    DECLARE avg_rating FLOAT(5,2);

    -- Calculate the average rating
    SELECT AVG(rating) INTO avg_rating
    FROM reviews
    WHERE professor_name = OLD.professor_name;

    -- Update the professor's average rating
    UPDATE professors
    SET total_avg = avg_rating
    WHERE name = OLD.professor_name;
END//

-- Trigger to update average after deleting a review
CREATE TRIGGER update_professor_avg_after_delete
AFTER DELETE ON reviews
FOR EACH ROW
BEGIN
    DECLARE avg_rating FLOAT(5,2);

    -- Calculate the average rating
    SELECT AVG(rating) INTO avg_rating
    FROM reviews
    WHERE professor_name = OLD.professor_name;

    -- Update the professor's average rating
    UPDATE professors
    SET total_avg = avg_rating
    WHERE name = OLD.professor_name;
END//

DELIMITER ;

-- Insert sample data into users
INSERT INTO users (email) VALUES
('user1@post.bgu.ac.il'),
('user2@post.bgu.ac.il'),
('user3@post.bgu.ac.il'),
('user4@post.bgu.ac.il'),
('user5@post.bgu.ac.il'),
('user6@post.bgu.ac.il'),
('user7@post.bgu.ac.il'),
('user8@post.bgu.ac.il'),
('user9@post.bgu.ac.il'),
('user10@post.bgu.ac.il'),
('user11@post.bgu.ac.il'),
('user12@post.bgu.ac.il'),
('user13@post.bgu.ac.il'),
('user14@post.bgu.ac.il'),
('user15@post.bgu.ac.il');

-- Insert sample data into reviews
INSERT INTO reviews (user_email, professor_name, rating, header, comment) VALUES
('user1@post.bgu.ac.il', 'Dr. John Doe', 4, 'Good Teacher, Challenging Course', 'Very clear explanations, but the difficulty was higher.'),
('user2@post.bgu.ac.il', 'Dr. John Doe', 5, 'Engaging and Well-Organized', 'Engaging lectures and well-organized.'),
('user3@post.bgu.ac.il', 'Dr. John Doe', 3, 'Great Teaching, Tough Exams', 'Great teaching style but very tough exams.'),
('user4@post.bgu.ac.il', 'Dr. Jane Smith', 4, 'Organized and Interesting', 'Very organized and interesting.'),
('user5@post.bgu.ac.il', 'Dr. Jane Smith', 5, 'Excellent Clarity', 'Excellent clarity and well-structured course.'),
('user6@post.bgu.ac.il', 'Dr. Jane Smith', 3, 'Good but Difficult', 'Good professor, but the difficulty is a bit high.'),
('user7@post.bgu.ac.il', 'Dr. Emily Johnson', 5, 'Outstanding Professor', 'Outstanding professor! Everything was clear and interesting.'),
('user8@post.bgu.ac.il', 'Dr. Emily Johnson', 4, 'Very Good', 'Very good, but the course could be more engaging.'),
('user9@post.bgu.ac.il', 'Dr. Emily Johnson', 5, 'Best Professor Ever', 'The best professor I have ever had.'),
('user10@post.bgu.ac.il', 'Dr. Michael Brown', 3, 'Average Teaching, Difficult Exams', 'Average teaching, but very difficult exams.'),
('user11@post.bgu.ac.il', 'Dr. Michael Brown', 4, 'Good but Needs Improvement', 'Good professor but needs to improve organization.'),
('user12@post.bgu.ac.il', 'Dr. Michael Brown', 5, 'Struggled with Clarity', 'Struggled with the clarity and difficulty.'),
('user13@post.bgu.ac.il', 'Dr. Linda Davis', 4, 'Well-Organized and Clear', 'Well-organized and clear, but the course was a bit difficult.'),
('user14@post.bgu.ac.il', 'Dr. Linda Davis', 5, 'Fantastic Professor', 'Fantastic professor! All aspects were great.'),
('user15@post.bgu.ac.il', 'Dr. Linda Davis', 4, 'Good Overall', 'Good professor overall, but some parts were hard to follow.');
