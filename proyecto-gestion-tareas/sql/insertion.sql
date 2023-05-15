
-- Insertar datos en la tabla "categories"
INSERT INTO categories (name, description) VALUES
  ('Category 1', 'Description for Category 1'),
  ('Category 2', 'Description for Category 2'),
  ('Category 3', 'Description for Category 3');

-- Insertar datos en la tabla "users"
INSERT INTO users (name, email, password) VALUES
  ('yasin', 'yasin_naamar@hotmail.com','890123qwert'),
  ('antonio', 'nanopas07@hotmail.com','qwertyu123456'),
  ('omar', 'omar.land2010@gmail.com', 'bniwfebgiue123556');


-- Insertar datos en la tabla "tasks"
INSERT INTO tasks (title, description, completed) VALUES
  ('Task 1', 'leer', false),
  ('Task 2', 'estudiar', true),
  ('Task 3', 'entrenar', true);


-- Insertar datos en la tabla "comments"
INSERT INTO comments (content) VALUES
  ( 'Comment for Task 1 by User 1'),
  ( 'Comment for Task 2 by User 2'),
  ('Comment for Task 3 by User 3');

-- Insertar datos en la tabla "attachments"
INSERT INTO attachments (filename, path) VALUES
  ('Attachment 1', '/path/to/attachment1'),
  ('Attachment 2', '/path/to/attachment2');