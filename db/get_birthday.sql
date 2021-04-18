SELECT * FROM person
WHERE birthday ILIKE '%' || $1 || '%';