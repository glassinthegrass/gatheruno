UPDATE post
SET
post_content = $2,
post_url = $3
WHERE post_id = $1
returning *;