DROP DATABASE IF EXISTS guitarReviews;
CREATE DATABASE guitarReviews;

USE guitarReviews;

CREATE TABLE reviews (
  id int not null auto_increment primary key,
  title varchar (80) not null,
  contents text,
  stars int not null,
  user varchar(30),
  experience varchar(20),
  dateSubmitted varchar(50),
  location varchar(50),
  upVotes int(3) not null default 0,
  downVotes int(3) not null default 0,
  pros varchar(90),
  cons varchar(75),
  wouldRecommend boolean not null
);

CREATE TABLE pros (
  proID int not null auto_increment primary key,
  description varchar(40) not null,
  count int not null default 0
);

CREATE TABLE cons (
  conID int not null auto_increment primary key,
  description varchar(40) not null,
  count int not null default 0
);
