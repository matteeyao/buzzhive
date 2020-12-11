# Postgres Database Schema

## `users`
| column name       | data type | details                   |
|:------------------|:---------:|:--------------------------|
| `id`              | integer   | not null, primary key     |
| `email`           | string    | not null, indexed, unique |   
| `username`        | string    | not null, indexed         |
| `fname`           | string    | not null,                 |
| `lname`           | string    | not null,                 |
| `password_digest` | string    | not null                  |
| `session_token`   | string    | not null, indexed, unique |
| `created_at`      | datetime  | not null                  |
| `updated_at`      | datetime  | not null                  |

+ index on `username, unique: true`
+ index on `email, unique: true`
+ index on `session_token, unique: true`
  
## `hives`
| column name          | data type | details                        |
|:---------------------|:---------:|:-------------------------------|
| `id`                 | integer   | not null, primary key          |
| `name`               | string    | not null                       |
| `description`        | string    | not null                       |
| `private`            | boolean   | not null                       |
| `author_id`          | integer   | not null, indexed, foreign key |
| `ref_link`           | string    |                                |
| `created_at`         | datetime  | not null                       |
| `updated_at`         | datetime  | not null                       |

+ `author_id` references `users`
+ index on `author_id`

## `hive_users` (Joins Table)
| column name 	| data type 	| details                        	|
|-------------	|-----------	|--------------------------------	|
| id          	| integer   	| not null, primary key          	|
| hive_id  	    | integer   	| not null, indexed, foreign key 	|
| user_id     	| integer   	| not null, indexed, foreign key 	|
| last_read_at  | datetime   	| not null                       	|
| created_at  	| datetime  	| not null                       	|
| updated_at  	| datetime  	| not null                       	|

+ `hive_id` references `hives`
+ index on `hive_id`
+ `user_id` references `users`
+ index on `user_id`

## `direct_message_hives`
| column name          | data type | details                        |
|:---------------------|:---------:|:-------------------------------|
| `id`                 | integer   | not null, primary key          |
| `author_id`          | integer   | not null, indexed, foreign key |
| `created_at`         | datetime  | not null                       |
| `updated_at`         | datetime  | not null                       |

+ `author_id` references `users`
+ index on `author_id`

## `direct_message_hive_users` (Joins Table)
| column name               	| data type 	| details                        	|
|---------------------------	|-----------	|--------------------------------	|
| id                        	| integer   	| not null, primary key          	|
| direct_message_hive_id    	| integer   	| not null, indexed, foreign key 	|
| user_id                   	| integer   	| not null, indexed, foreign key 	|
| created_at                	| datetime  	| not null                       	|
| updated_at                	| datetime  	| not null                       	|

+ `direct_message_hive_id` references `direct_message_hives`
+ index on `direct_message_hive_id`
+ `user_id` references `users`
+ index on `user_id`

## `messages`
| column name       	| data type 	| details                        	|
|-------------------	|-----------	|--------------------------------	|
| id                	| integer   	| not null, primary key          	|
| body              	| string    	| not null                       	|
| author_id         	| integer   	| not null, indexed, foreign key 	|
| parent_message_id 	| integer   	| indexed, foreign key           	|
| messageable_id    	| integer   	| not null                       	|
| messageable_type  	| string    	| not null                       	|
| created_at        	| datetime  	| not null                       	|
| updated_at        	| datetime  	| not null                       	|

+ `author_id` references `users`
+ index on `author_id`
+ `parent_message_id` references `messages`
+ index on `parent_message_id`
+ index on [`author_id`,`messageable_type`, `messageable_id`]
+ index on [`messageable_type`, `messageable_id`]

## `reactions`
| column name       | data type | details                        |
|:------------------|:---------:|:-------------------------------|
| `id`              | integer   | not null, primary key          |
| `reaction_type`   | string    | not null                       |
| `user_id`         | integer   | not null, indexed, foreign key |
| `message_id`      | integer   | not null, indexed, foreign key |             
| `created_at`      | datetime  | not null                       |
| `updated_at`      | datetime  | not null                       |

+ `user_id` references `users`
+ `message_id` references `message`
+ index on `[:message_id, :user_id], unique: true`
