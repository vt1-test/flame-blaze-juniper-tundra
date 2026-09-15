-- Quiz attempts for the CSB mock exam. Rows are unowned (no user accounts).
-- Email and phone are stored with the attempt as the player requested; they are
-- never selected by the public standings query.
create table if not exists attempts (
  id                serial primary key,
  player_name       text not null,
  email             text not null,
  phone             text not null,
  score             integer not null,
  total             integer not null,
  percent           integer not null,
  passed            boolean not null,
  streak            integer not null default 0,
  duration_seconds  integer not null default 0,
  answers           jsonb not null default '{}'::jsonb,
  created_at        timestamptz not null default now()
);

create index if not exists attempts_percent_idx
  on attempts (percent desc, created_at asc);

create index if not exists attempts_email_idx
  on attempts (email);
