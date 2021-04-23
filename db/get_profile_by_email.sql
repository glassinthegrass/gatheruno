SELECT us.user_id,us.first_name,us.last_name,us.email,us.hash,us.phone_number,us.profile_picture,po.post_id,po.post_content,po.post_url FROM users us 
INNER JOIN post po on po.user_id = us.user_id
WHERE email =$1;
