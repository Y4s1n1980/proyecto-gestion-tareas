-- Crear la tabla "users"
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);

-- Crear la tabla "attachments"
CREATE TABLE attachments (
  id SERIAL PRIMARY KEY,
  filename VARCHAR(255) NOT NULL,
  path TEXT NOT NULL,
  task_id INTEGER REFERENCES tasks(id)
);



-- Crear la tabla "comments"
CREATE TABLE comments (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  task_id INTEGER REFERENCES tasks(id),
  user_id INTEGER REFERENCES users(id),
  content TEXT NOT NULL
);

-- Crear la tabla "tasks"
CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  category_id INTEGER REFERENCES categories(id),
  completed BOOLEAN DEFAULT false
);

-- Crear la tabla "categories"
CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL
);








