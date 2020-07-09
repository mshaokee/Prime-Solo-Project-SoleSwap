
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user"
(
    "id" SERIAL PRIMARY KEY,
    "username" varchar(100),
    "password" varchar(255),
    "user_email" varchar(255),
    "user_img" varchar(1000),
    "user_location" varchar(255),
    "user_date" DATE DEFAULT CURRENT_DATE
);


CREATE TABLE "category"
(
    "cat_id" SERIAL PRIMARY KEY NOT NULL,
    "cat_name" varchar(25) NOT NULL,
    "cat_description" varchar(255) NOT NULL
);

CREATE TABLE "post"
(
    "post_id" SERIAL PRIMARY KEY NOT NULL,
    "post_name" varchar(100) NOT NULL,
    "post_body" varchar(5000) NOT NULL,
    "post_image" varchar(1000) NOT NULL,
    "post_date" DATE NOT NULL DEFAULT CURRENT_DATE,
    "post_cat" integer NOT NULL,
    "user_id" integer NOT NULL,
    FOREIGN KEY (user_id) REFERENCES "user"(id),
    FOREIGN KEY (post_cat) REFERENCES "category"(cat_id)
);

INSERT INTO "category" ('cat_name', 'cat_description')
VALUES
    ('Buy', 'Buyers Category'),
    ('Sell', 'Sellers Category'),
    ('Trade', 'Traders Category');