DROP TABLE IF EXISTS photos CASCADE;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  name VARCHAR (50) NOT NULL,
  bio TEXT NOT NULL,
  phone VARCHAR (50) NOT NULL,
  email VARCHAR (50) NOT NULL,
  profile_picture TEXT
);

CREATE TABLE photos(
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  title VARCHAR (50),
  description TEXT,
  date DATE,
  featured BOOLEAN NOT NULL,
  img TEXT
);

INSERT INTO users(name, bio, phone, email, profile_picture)
VALUES
('James Thomas', 'Hi, I am James and I like to take photos', '555-555-5555', 'james.thomas@email.test','https://i.imgur.com/ZjWhcGP.jpg');

INSERT INTO photos(title, user_id, description, date, featured,img)
VALUES
('Nandhaka Pieris', 1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '2015-05-01', true, 'https://i.imgur.com/7NY8M17.jpg'),
('New West Calgary', 1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '2016-05-01', false, 'https://i.imgur.com/ADRu04O.jpg'),
('Australian Landscape', 1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '2015-02-02', false, 'https://i.imgur.com/RGJjjrT.jpg'),
('Halvergate Marsh', 1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '2014-04-01', true, 'https://i.imgur.com/OGvGwZM.jpg'),
('Rikkis Landscape', 1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '2010-09-01', false, 'https://i.imgur.com/NcjYFoI.jpg'),
('Kiddi Kristjans Iceland', 1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '2015-07-21', true, 'https://i.imgur.com/W9qwhHM.jpg');


