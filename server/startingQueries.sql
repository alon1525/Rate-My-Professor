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
    total_avg FLOAT(5,2), -- Only total_avg field
    review_count INT DEFAULT 0
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
("יוחנן דו", "מדעי המחשב"),
("יוסף שמידט", "מתמטיקה"),
("אמילי ג'ונסון", "פיזיקה"),
("מיכאל בראון", "כימיה"),
("לינדה דייוויס", "ביולוגיה"),
("שרה ווייט", "הנדסה"),
("דוד לי", "כלכלה"),
("לורה גרין", "היסטוריה"),
("תומס אדמס", "ביוכימיה"),
("אליס מילר", "פסיכולוגיה"),
("דניאל וילסון", "בלשנות"),
("רחל קלארק", "פילוסופיה"),
("ג'יימס האריס", "מדע המדינה"),
("מייגן לואיס", "סוציולוגיה"),
("בריאן קינג", "סטטיסטיקה");

-- Define triggers to update average ratings
DELIMITER //

-- Trigger to update average and review count after inserting a review
CREATE TRIGGER update_professor_avg_and_count_after_insert
AFTER INSERT ON reviews
FOR EACH ROW
BEGIN
    DECLARE avg_rating FLOAT(5,2);
    DECLARE review_total INT;

    -- Calculate the average rating
    SELECT AVG(rating) INTO avg_rating
    FROM reviews
    WHERE professor_name = NEW.professor_name;

    -- Calculate the total number of reviews
    SELECT COUNT(*) INTO review_total
    FROM reviews
    WHERE professor_name = NEW.professor_name;

    -- Update the professor's average rating and review count
    UPDATE professors
    SET total_avg = avg_rating,
        review_count = review_total
    WHERE name = NEW.professor_name;
END//

-- Trigger to update average and review count after updating a review
CREATE TRIGGER update_professor_avg_and_count_after_update
AFTER UPDATE ON reviews
FOR EACH ROW
BEGIN
    DECLARE avg_rating FLOAT(5,2);
    DECLARE review_total INT;

    -- Calculate the average rating
    SELECT AVG(rating) INTO avg_rating
    FROM reviews
    WHERE professor_name = OLD.professor_name;

    -- Calculate the total number of reviews
    SELECT COUNT(*) INTO review_total
    FROM reviews
    WHERE professor_name = OLD.professor_name;

    -- Update the professor's average rating and review count
    UPDATE professors
    SET total_avg = avg_rating,
        review_count = review_total
    WHERE name = OLD.professor_name;
END//

-- Trigger to update average and review count after deleting a review
CREATE TRIGGER update_professor_avg_and_count_after_delete
AFTER DELETE ON reviews
FOR EACH ROW
BEGIN
    DECLARE avg_rating FLOAT(5,2);
    DECLARE review_total INT;

    -- Calculate the average rating
    SELECT AVG(rating) INTO avg_rating
    FROM reviews
    WHERE professor_name = OLD.professor_name;

    -- Calculate the total number of reviews
    SELECT COUNT(*) INTO review_total
    FROM reviews
    WHERE professor_name = OLD.professor_name;

    -- Update the professor's average rating and review count
    UPDATE professors
    SET total_avg = avg_rating,
        review_count = review_total
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
('user15@post.bgu.ac.il'),
('user16@post.bgu.ac.il'),
('user17@post.bgu.ac.il'),
('user18@post.bgu.ac.il'),
('user19@post.bgu.ac.il'),
('user20@post.bgu.ac.il');


INSERT INTO reviews (user_email, professor_name, rating, header, comment) VALUES
("user1@post.bgu.ac.il", "יוחנן דו", 4, "מורה טוב, קורס מאתגר", "הסברים ברורים מאוד, אך הקושי היה גבוה."),
("user2@post.bgu.ac.il", "יוחנן דו", 5, "מרצה מרתק ומאורגן", "הרצאות מרתקות ומאורגנות היטב."),
("user3@post.bgu.ac.il", "יוחנן דו", 3, "הוראה מצוינת, מבחנים קשים", "סגנון הוראה מצוין אך מבחנים קשים מאוד."),
("user4@post.bgu.ac.il", "יוסף שמידט", 4, "מאורגן ומעניין", "מאורגן ומעניין מאוד."),
("user5@post.bgu.ac.il", "יוסף שמידט", 5, "בהירות מצוינת", "בהירות מצוינת וקורס מובנה היטב."),
("user6@post.bgu.ac.il", "יוסף שמידט", 3, "טוב אך קשה", "מורה טוב אך הקושי גבוה מדי."),
("user7@post.bgu.ac.il", "אמילי ג'ונסון", 5, "מרצה יוצאת דופן", "מרצה יוצאת דופן! הכל היה ברור ומעניין."),
("user8@post.bgu.ac.il", "אמילי ג'ונסון", 4, "טוב מאוד", "טוב מאוד, אך הקורס יכול להיות יותר מרתק."),
("user9@post.bgu.ac.il", "אמילי ג'ונסון", 5, "המרצה הכי טוב שהיה לי", "המרצה הטוב ביותר שהיה לי אי פעם."),
("user10@post.bgu.ac.il", "מיכאל בראון", 3, "הוראה ממוצעת, מבחנים קשים", "הוראה ממוצעת, אך מבחנים קשים מאוד."),
("user11@post.bgu.ac.il", "מיכאל בראון", 4, "טוב אך דורש שיפור", "מורה טוב אך יש לשפר את הארגון."),
("user12@post.bgu.ac.il", "מיכאל בראון", 5, "התמודדות עם בהירות", "התמודדות עם הבהירות והקושי."),
("user13@post.bgu.ac.il", "לינדה דייוויס", 4, "מאורגן וברור", "מאורגן וברור, אך הקורס היה קצת קשה."),
("user14@post.bgu.ac.il", "לינדה דייוויס", 5, "מרצה פנטסטי", "מרצה פנטסטי! כל ההיבטים היו מעולים."),
("user15@post.bgu.ac.il", "לינדה דייוויס", 4, "טוב בסך הכל", "מורה טוב בסך הכל, אך חלקים מסוימים היו קשים להבנה."),
("user1@post.bgu.ac.il", "שרה ווייט", 2, "דורש שיפור", "לא מאוד מרתק והחומרים היו חסרים."),
("user2@post.bgu.ac.il", "שרה ווייט", 3, "הוראה סבירה", "הוראה סבירה, אך לא מאוד אינטראקטיבית."),
("user3@post.bgu.ac.il", "שרה ווייט", 4, "טוב בסך הכל", "טוב בסך הכל, אך יש מקום לשיפור."),
("user4@post.bgu.ac.il", "דוד לי", 5, "מעולה!", "מורה מצוין, שיעורים נהדרים."),
("user5@post.bgu.ac.il", "דוד לי", 4, "טוב מאוד", "טוב מאוד, אך יש צורך בשיפור הקורס."),
("user6@post.bgu.ac.il", "דוד לי", 5, "המרצה הטוב ביותר", "המרצה הטוב ביותר שאני מכיר."),
("user7@post.bgu.ac.il", "לורה גרין", 3, "מורה טוב, אך קשה", "מורה טוב אך הקורס קשה מאוד."),
("user8@post.bgu.ac.il", "לורה גרין", 4, "הוראה טובה", "הוראה טובה, אבל הקורס יכול להיות יותר מעניין."),
("user9@post.bgu.ac.il", "לורה גרין", 5, "מעולה, מאוד מרתק", "מעולה ומאוד מרתק."),
("user10@post.bgu.ac.il", "תומס אדמס", 3, "סביר, קורס מאתגר", "סביר, הקורס מאתגר מאוד."),
("user11@post.bgu.ac.il", "תומס אדמס", 4, "הוראה ברמה גבוהה", "הוראה ברמה גבוהה, אך יש מקום לשיפור."),
("user12@post.bgu.ac.il", "תומס אדמס", 5, "המרצה הטוב ביותר", "המרצה הטוב ביותר, מאוד מעניין."),
("user13@post.bgu.ac.il", "אליס מילר", 4, "מורה טובה מאוד", "מורה טובה מאוד עם שיטות הוראה יעילות."),
("user14@post.bgu.ac.il", "אליס מילר", 5, "מעולה, קורס מעניין", "מעולה! הקורס היה מאוד מעניין."),
("user15@post.bgu.ac.il", "אליס מילר", 4, "טוב, אך יכול להיות טוב יותר", "טוב, אך יש מקום לשיפור בקורס."),
("user16@post.bgu.ac.il", "דניאל וילסון", 3, "מורה סביר", "מורה סביר, אך יש מקום לשיפור."),
("user17@post.bgu.ac.il", "דניאל וילסון", 4, "טוב מאוד", "טוב מאוד, אך החומרים יכולים להיות יותר ברורים."),
("user18@post.bgu.ac.il", "דניאל וילסון", 5, "מורה מצוין", "מורה מצוין, שיעורים מעניינים מאוד."),
("user19@post.bgu.ac.il", "רחל קלארק", 2, "דורש שיפור רב", "דורש שיפור רב, הקורס לא היה ברור."),
("user20@post.bgu.ac.il", "רחל קלארק", 3, "סביר אך ניתן לשיפור", "סביר אך ניתן לשיפור מבחינת ההוראה והחומרים.");