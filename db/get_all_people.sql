SELECT gp.group_name,pe.person_id,pe.first_name,pe.last_name,pe.email,pe.birthday,pe.picture,pe.zipcode,pe.message From groups gp
JOIN person pe ON pe.person_id = gp.person_id
;