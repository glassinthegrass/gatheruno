CREATE TABLE person(
    person_id SERIAL PRIMARY KEY,
    first_name VARCHAR(35) NOT NULL,
    last_name VARCHAR(35) NOT NULL,
    email VARCHAR(100),
    birthday VARCHAR(10),
    picture varchar(5000) DEFAULT 'https://bit.ly/2RpyDE0',
    zipcode VARCHAR,
    message TEXT 
);

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    first_name VARCHAR(40) NOT NULL,
    last_name VARCHAR(40) NOT NULL,
    email VARCHAR(100) NOT NULL,
    hash VARCHAR(100) NOT NULL,
    admin BOOL default false,
    phone_number INT,
    profile_picture VARCHAR(5000)
);

CREATE TABLE post(
    post_id SERIAL PRIMARY KEY,
    post_content TEXT NOT NULL,
    post_url VARCHAR(5000),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    person_id INT,
    FOREIGN KEY (person_id) REFERENCES person(person_id)
    );
    
CREATE TABLE emails(
    email_id SERIAL PRIMARY KEY,
    email_text TEXT,
    email_attachment TEXT,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
);

CREATE TABLE groups(
    group_id SERIAL PRIMARY KEY,
    group_name VARCHAR(200),
person_id INT,
FOREIGN KEY (person_id) REFERENCES person(person_id)
);