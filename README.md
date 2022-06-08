# Thob-Tailor-App

Thob tailor app is an app tailors can use to record customers' Thob (Arab men dress) size and then save to PostgreSQL database, and the main feature of the app is that it automatically calculate how much meters of fabric needed to make the Thob based on size.<br /> The app built using PERN stack

## the app consists of 3 pages:
### 1: Home page:
It dislays recoreded saizes, and also user can search for certain customer, and user can click on any to cutomer to go to summary page.

![TTHOME](https://user-images.githubusercontent.com/96534700/172597538-14fec1bd-d250-4eeb-8a33-5f4b9bd88fd5.jpg)

### 2: Summary page:
It displays detailed information about size of selected customer and it calculate needed fabric to make the Thob

![TTSUMMARY](https://user-images.githubusercontent.com/96534700/172598045-63c9a46e-1dbb-477b-9443-fd49fefe5322.jpg)

### 3: New size page:
This page allows the user to enter new cutomer size and save it.

![TTNEWSIZE](https://user-images.githubusercontent.com/96534700/172598199-3d8f6588-12aa-464e-83b0-ddda87936d35.jpg)

## Setup:
### 1: install dependencies in both client and server
##### - in client directory in terminal write ```npm install``` and after it downloads start the app by writing ```npm start```
##### - in server directory in terminal write ```npm install``` and after it downloads start the app by writing ```node index```
### 2: databese setup:
##### - create databse and table using commands in server/database.sql 
##### - create ".env"  file in server directory and write inside DATABASE_USER_PASSWORD = "your database password"
