-- Using the database you just set up, write SQL queries to answer the following questions:

-- List all of the movies ordered alphabetically.
SELECT title FROM movies ORDER BY title;

-- List the three oldest people from oldest to youngest.
SELECT * FROM people ORDER BY birthdate LIMIT 3;

--Which people are both directors and actors?
SELECT mtm_credits.person_id, people.name, roles.role
FROM mtm_credits INNER JOIN people ON mtm_credits.person_id = people.id
INNER JOIN roles ON people.id = roles.id;

--List all of the people who have directed a movie.
SELECT people.name, roles.role
FROM mtm_credits JOIN people ON mtm_credits.person_id = people.id
JOIN roles ON mtm_credits.role_id = roles.id;


