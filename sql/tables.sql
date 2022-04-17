CREATE TABLE IF NOT EXISTS contactsuser5 (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	first_name VARCHAR(50) NOT NULL,
	surname VARCHAR(50) NOT NULL,
	position_ VARCHAR(50) NOT NULL,
	email VARCHAR(50) NOT NULL,
	date_birth DATE NOT NULL,
	phone INT NOT NULL
);

INSERT INTO contactsuser5 (first_name, surname, position_, email, date_birth, phone) VALUES (
"Elias", "Valverde", "Contador", "evalverde@gmail.com", "2022-12-31", '123456'
);

INSERT INTO contactsuser5 (first_name, surname, position_, email, date_birth, phone) VALUES (
"Martin", "Valverde", "Hijo", "nitram@gmail.com", "2007-12-31", '2007'
);

INSERT INTO contactsuser5 (first_name, surname, position_, email, date_birth, phone) VALUES (
"Susan", "Pailemilla", "Profe", "susan@gmail.com", "1981-12-31", '1981'
);

INSERT INTO contactsuser5 (first_name, surname, position_, email, date_birth, phone) VALUES (
"Huaipe", "Valverde", "Mascota", "huaipe@gmail.com", "2014-12-31", '9999'
);