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

-- Create the professors table with total_avg field included
CREATE TABLE professors (
    professor_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    department VARCHAR(255),
    clarity_avg FLOAT(5,2) CHECK (clarity_avg BETWEEN 1 AND 5),
    interesting_avg FLOAT(5,2) CHECK (interesting_avg BETWEEN 1 AND 5),
    organize_avg FLOAT(5,2) CHECK (organize_avg BETWEEN 1 AND 5),
    fairness_avg FLOAT(5,2) CHECK (fairness_avg BETWEEN 1 AND 5),
    total_avg FLOAT(5,2) -- Added total_avg field
    -- Other professor fields
);

-- Create the reviews table
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

-- Insert sample data into professors table
INSERT INTO professors (name, department) VALUES
('Dr. John Doe', 'Computer Science'),
('Dr. Jane Smith', 'Mathematics'),
('Dr. Emily Johnson', 'Physics'),
('Dr. Michael Brown', 'Chemistry'),
('Dr. Linda Davis', 'Biology');

-- Define triggers to update average ratings
DELIMITER //

-- Trigger to update averages after inserting a review
CREATE TRIGGER update_professor_avg_after_insert
AFTER INSERT ON reviews
FOR EACH ROW
BEGIN
    DECLARE avg_clarity FLOAT(5,2);
    DECLARE avg_interesting FLOAT(5,2);
    DECLARE avg_organized FLOAT(5,2);
    DECLARE avg_difficulty FLOAT(5,2);
    DECLARE avg_total FLOAT(5,2);

    -- Calculate the average ratings
    SELECT AVG(clarity) INTO avg_clarity
    FROM reviews
    WHERE professor_id = NEW.professor_id;

    SELECT AVG(interesting) INTO avg_interesting
    FROM reviews
    WHERE professor_id = NEW.professor_id;

    SELECT AVG(organized) INTO avg_organized
    FROM reviews
    WHERE professor_id = NEW.professor_id;

    SELECT AVG(difficulty) INTO avg_difficulty
    FROM reviews
    WHERE professor_id = NEW.professor_id;

    -- Calculate the total average
    SET avg_total = (COALESCE(avg_clarity, 0) + COALESCE(avg_interesting, 0) + COALESCE(avg_organized, 0) + COALESCE(avg_difficulty, 0)) / 4;

    -- Update the professor's average ratings
    UPDATE professors
    SET clarity_avg = avg_clarity,
        interesting_avg = avg_interesting,
        organize_avg = avg_organized,
        fairness_avg = avg_difficulty,
        total_avg = avg_total
    WHERE professor_id = NEW.professor_id;
END//

-- Trigger to update averages after updating a review
CREATE TRIGGER update_professor_avg_after_update
AFTER UPDATE ON reviews
FOR EACH ROW
BEGIN
    DECLARE avg_clarity FLOAT(5,2);
    DECLARE avg_interesting FLOAT(5,2);
    DECLARE avg_organized FLOAT(5,2);
    DECLARE avg_difficulty FLOAT(5,2);
    DECLARE avg_total FLOAT(5,2);

    -- Calculate the average ratings
    SELECT AVG(clarity) INTO avg_clarity
    FROM reviews
    WHERE professor_id = OLD.professor_id;

    SELECT AVG(interesting) INTO avg_interesting
    FROM reviews
    WHERE professor_id = OLD.professor_id;

    SELECT AVG(organized) INTO avg_organized
    FROM reviews
    WHERE professor_id = OLD.professor_id;

    SELECT AVG(difficulty) INTO avg_difficulty
    FROM reviews
    WHERE professor_id = OLD.professor_id;

    -- Calculate the total average
    SET avg_total = (COALESCE(avg_clarity, 0) + COALESCE(avg_interesting, 0) + COALESCE(avg_organized, 0) + COALESCE(avg_difficulty, 0)) / 4;

    -- Update the professor's average ratings
    UPDATE professors
    SET clarity_avg = avg_clarity,
        interesting_avg = avg_interesting,
        organize_avg = avg_organized,
        fairness_avg = avg_difficulty,
        total_avg = avg_total
    WHERE professor_id = OLD.professor_id;
END//

-- Trigger to update averages after deleting a review
CREATE TRIGGER update_professor_avg_after_delete
AFTER DELETE ON reviews
FOR EACH ROW
BEGIN
    DECLARE avg_clarity FLOAT(5,2);
    DECLARE avg_interesting FLOAT(5,2);
    DECLARE avg_organized FLOAT(5,2);
    DECLARE avg_difficulty FLOAT(5,2);
    DECLARE avg_total FLOAT(5,2);

    -- Calculate the average ratings
    SELECT AVG(clarity) INTO avg_clarity
    FROM reviews
    WHERE professor_id = OLD.professor_id;

    SELECT AVG(interesting) INTO avg_interesting
    FROM reviews
    WHERE professor_id = OLD.professor_id;

    SELECT AVG(organized) INTO avg_organized
    FROM reviews
    WHERE professor_id = OLD.professor_id;

    SELECT AVG(difficulty) INTO avg_difficulty
    FROM reviews
    WHERE professor_id = OLD.professor_id;

    -- Calculate the total average
    SET avg_total = (COALESCE(avg_clarity, 0) + COALESCE(avg_interesting, 0) + COALESCE(avg_organized, 0) + COALESCE(avg_difficulty, 0)) / 4;

    -- Update the professor's average ratings
    UPDATE professors
    SET clarity_avg = avg_clarity,
        interesting_avg = avg_interesting,
        organize_avg = avg_organized,
        fairness_avg = avg_difficulty,
        total_avg = avg_total
    WHERE professor_id = OLD.professor_id;
END//

DELIMITER ;


-- Insert reviews for Dr. John Doe
-- Insert sample users into users table
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

INSERT INTO reviews (user_email, professor_id, clarity, interesting, organized, difficulty, comment) VALUES
('user1@post.bgu.ac.il', 1, 5, 4, 4, 3, 'Very clear explanations, but the difficulty was higher.'),
('user2@post.bgu.ac.il', 1, 4, 5, 4, 2, 'Engaging lectures and well-organized.'),
('user3@post.bgu.ac.il', 1, 4, 3, 5, 4, 'Great teaching style but very tough exams.');

-- Insert reviews for Dr. Jane Smith
INSERT INTO reviews (user_email, professor_id, clarity, interesting, organized, difficulty, comment) VALUES
('user4@post.bgu.ac.il', 2, 4, 4, 5, 3, 'Very organized and interesting.'),
('user5@post.bgu.ac.il', 2, 5, 5, 4, 2, 'Excellent clarity and well-structured course.'),
('user6@post.bgu.ac.il', 2, 3, 4, 4, 3, 'Good professor, but the difficulty is a bit high.');

-- Insert reviews for Dr. Emily Johnson
INSERT INTO reviews (user_email, professor_id, clarity, interesting, organized, difficulty, comment) VALUES
('user7@post.bgu.ac.il', 3, 5, 5, 5, 3, 'Outstanding professor! Everything was clear and interesting.'),
('user8@post.bgu.ac.il', 3, 4, 4, 4, 4, 'Very good, but the course could be more engaging.'),
('user9@post.bgu.ac.il', 3, 5, 5, 5, 5, 'The best professor I have ever had.');

-- Insert reviews for Dr. Michael Brown
INSERT INTO reviews (user_email, professor_id, clarity, interesting, organized, difficulty, comment) VALUES
('user10@post.bgu.ac.il', 4, 3, 3, 3, 4, 'Average teaching, but very difficult exams.'),
('user11@post.bgu.ac.il', 4, 4, 3, 3, 3, 'Good professor but needs to improve organization.'),
('user12@post.bgu.ac.il', 4, 2, 2, 3, 5, 'Struggled with the clarity and difficulty.');

-- Insert reviews for Dr. Linda Davis
INSERT INTO reviews (user_email, professor_id, clarity, interesting, organized, difficulty, comment) VALUES
('user13@post.bgu.ac.il', 5, 4, 4, 5, 3, 'Well-organized and clear, but the course was a bit difficult.'),
('user14@post.bgu.ac.il', 5, 5, 5, 5, 2, 'Fantastic professor! All aspects were great.'),
('user15@post.bgu.ac.il', 5, 4, 4, 4, 3, 'Good professor overall, but some parts were hard to follow.');
