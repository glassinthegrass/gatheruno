INSERT INTO groups(group_name) VALUES
($1);


-- INSERT INTO groups(group_name,person_id) VALUES
-- ($1, (SELECT person_id from person where person_id=$2));