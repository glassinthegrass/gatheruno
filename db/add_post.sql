 INSERT INTO post (post_content, post_url,user_id,person_id)
VALUES($1,$2,(SELECT user_id from users where user_id=$3), (SELECT person_id from person where person_id=$4))
returning *;