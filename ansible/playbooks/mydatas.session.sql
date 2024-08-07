CREATE TABLE enseignants(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nom var(255),
    tel var(255),
    quartier var(255),
    create_time DATETIME
); 

INSERT INTO enseignants(nom, tel, quartier, create_time)
VALUES ('Stephane', '+241747470882', 'Madagascar', '2023-03-28 10:34:24');
