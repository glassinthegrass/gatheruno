INSERT INTO person (first_name,last_name,email,birthday,picture,group_id)
VALUES ($1,$2,$3,$4,$5,$6)
returning *;