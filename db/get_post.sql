SELECT po.post_id,po.post_content,po.post_url,us.user_id,us.profile_picture AS userPicture, us.first_name AS userFirstName,us.last_name AS userLastName,us.email AS userEmail,pe.person_id,pe.first_name AS personFirstName,pe.last_name AS personLastName,pe.email AS personEmail,pe.birthday,pe.picture,pe.zipcode,pe.message From post po
inner join person pe ON pe.person_id = po.person_id
inner join users us ON po.user_id = us.user_id
WHERE pe.person_id = $1;