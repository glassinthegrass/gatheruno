CREATE TABLE person(
    person_id SERIAL PRIMARY KEY,
    first_name VARCHAR(40) NOT NULL,
    last_name VARCHAR(40) NOT NULL,
    email VARCHAR(40),
    birthday DATE NOT NULL,
    picture varchar(5000) DEFAULT 'https://bit.ly/2RpyDE0',
    group_id INT
);

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(80) NOT NULL,
    password VARCHAR(40) NOT NULL
);

CREATE TABLE post(
    post_id SERIAL PRIMARY KEY,
    post_content TEXT NOT NULL,
    post_url VARCHAR(1000)
    );

CREATE TABLE person_user(
    person_user_id SERIAL PRIMARY KEY,
    person_id INT,
    FOREIGN KEY (person_id) REFERENCES person(person_id),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE user_post(
    user_post_id SERIAL PRIMARY KEY,
    post_id INT,
    FOREIGN KEY (post_id) REFERENCES post(post_id),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    person_id INT,
    FOREIGN KEY (person_id) References person(person_id)
);