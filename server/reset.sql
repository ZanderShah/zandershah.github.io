drop table if exists sw;
create table sw (
    id serial primary key,
    dungeon varchar(64) not null,
    date timestamp default current_timestamp,
    time varchar(64),
    team1 varchar(64),
    team2 varchar(64),
    team3 varchar(64),
    team4 varchar(64),
    team5 varchar(64)
);
create index dungeon_id on sw(dungeon);

copy sw(date, dungeon, time, team1, team2, team3, team4, team5) from '/srv/www/zandershah.github.io/ZSHAH-7949595-runs.csv' csv header;