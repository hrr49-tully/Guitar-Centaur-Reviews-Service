CREATE DATABASE guitarReviews;

USE guitarReviews;

CREATE TABLE reviews (
  id int not null auto_increment primary key,
  title varchar (50) not null,
  contents text,
  stars int not null,
  user varchar(25),
  experience varchar(10,
  dateSubmitted timestamp,
  location varchar(30),
  upVotes int(3) default '0' not null,
  downVotes int(3) default '0' not null,
  pros varchar(75),
  cons varchar(75),
  wouldRecommend boolean not null
);

CREATE TABLE pros (
  proID int not null auto_increment primary key,
  description varchar(25) not null,
  count int default '0' not null
);

CREATE TABLE cons (
  conID int not null auto_increment primary key,
  description varchar(25) not null,
  count int default '0' not null
);
