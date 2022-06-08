-- Create a new database called 'thobtailor'
CREATE DATABASE thobtailor;

CREATE TABLE CustomerSize(
    c_id SERIAL PRIMARY KEY,
    c_name VARCHAR(100),
    c_tall NUMERIC,
    c_shoulder NUMERIC,
    c_arm NUMERIC,
    c_neck NUMERIC,
    c_width NUMERIC,
    c_description VARCHAR(2000),
    c_fabric_name VARCHAR(100),
    c_date DATE NOT NULL DEFAULT CURRENT_DATE
)
INSERT INTO CustomerSize (c_name,c_tall,c_shoulder,c_arm,c_neck,c_width,c_description,c_fabric_name) VALUES ('ALI',55,15,22,7,24,'Use style number 6 for pocket','112 Japan made')