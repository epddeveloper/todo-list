DROP TABLE IF EXISTS toDoItems;

CREATE TABLE toDoItems (
  id INT AUTO_INCREMENT  PRIMARY KEY,
  item_name VARCHAR(250) NOT NULL,
  accepted
);

INSERT INTO toDoItems (item_name, accepted) VALUES
  ('Learn NodeJS', false),
  ('Learn React JS', false),
  ('Learn GraphQl', false);
