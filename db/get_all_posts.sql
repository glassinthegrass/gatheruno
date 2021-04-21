SELECT po.post_id,po.post_content,po.post_url,us.user_id,us.first_name,us.last_name,us.email,pe.person_id,pe.first_name,pe.last_name,pe.email,pe.birthday,pe.picture,pe.zipcode,pe.message From post po
inner join person pe ON pe.person_id = po.person_id
inner join users us ON po.user_id = us.user_id;