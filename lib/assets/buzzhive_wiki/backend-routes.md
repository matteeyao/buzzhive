# Backend Routes

## HTML

+ `GET /` `StaticPagesController#root`

## API Endpoints

### `users`
+ `GET /api/users` - returns the user information of displayed chirps and for the User Search feature
+ `POST /api/users` - sign up

### `session`
+ `POST /api/session` - log in
+ `DELETE /api/session` - log out

### `channels`
+ `GET /api/channels` - returns relevant channels (filtered by `data`/`params`)
+ `GET /api/client/:id` - returns channel
+ `POST /api/channels` - creates a channel
+ `PATCH /api/channels/:id` - edits channel information
+ `DELETE /api/channels/:id` - removes a channel

### `direct_messages`
+ `GET /api/direct_messages` - returns relevant direct_messages (filtered by `data`/`params`)
+ `GET /api/client/:id` - returns direct message
+ `POST /api/direct_messages` - creates a direct message
+ `PATCH /api/direct_messages/:id` - edits direct message information
+ `DELETE /api/direct_messages/:id` - removes a direct message

### `messages`
+ `GET /api/messages` - returns relevant messages (filtered by `data`/`params`)
+ `GET /api/messages/:id` - returns a specific message
+ `POST /api/messages` - creates a message
+ `PATCH /api/messages/:id` - edits message
+ `DELETE /api/messages/:id` - removes a message

### `reactions`
+ `POST /api/messages/:messages_id/reaction` - creates a reaction
+ `DELETE /api/messages/:messages_id/reaction` - removes a reaction