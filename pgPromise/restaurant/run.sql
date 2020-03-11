CREATE TABLE categories
(
	id SERIAL NOT NULL PRIMARY KEY,
	name varchar(50)
);

INSERT INTO categories VALUES
(DEFAULT, 'BBQ'),
(DEFAULT, 'Gluten-free'),
(DEFAULT, 'Mexican'),
(DEFAULT, 'Tapas'),
(DEFAULT, 'Greek'),
(DEFAULT, 'Chinese'),
(DEFAULT, 'Ethiopian'),
(DEFAULT, 'Indian'),
(DEFAULT, 'Thai'),
(DEFAULT, 'Vietnamese'),
(DEFAULT, 'German');

CREATE TABLE restaurants
(
    id SERIAL NOT NULL PRIMARY KEY,
    name varchar(100),
    category integer REFERENCES categories(id),
    foodDescription varchar(300),
    price integer,
    course varchar(50),
    imageURL varchar(150)
);

INSERT INTO restaurants (name, fooddescription, price, course, imageurl) VALUES ($1, $2, $3, $4, $5, $6)