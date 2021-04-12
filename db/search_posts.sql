SELECT * FROM person
WHERE post_content ILIKE '%' || $1 || '%';