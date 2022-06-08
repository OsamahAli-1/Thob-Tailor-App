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
    c_date DATE NOT NULL DEFAULT CURRENT_DATE,
    c_phone NUMERIC
)
