UPDATE person
SET 
first_name = $2,
last_name = $3,
email = $4,
birthday = $5,
picture = $6,
zipcode=$7
WHERE person_id = $1;