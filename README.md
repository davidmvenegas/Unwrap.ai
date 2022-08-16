# Unwrap.Ai

## Getting started

### Starting the server

1. cd into server directory
2. run `npm install` in server directory
3. run `npm start`

### Starting the client

1. open second terminal
2. cd into top directory
3. run `npm install` in top directory
4. run `npm start`

## Current Bugs

* The clusters query can trigger *too many connections* MySQL error at times (fix by restarting the db with `rs` command in db terminal)
* Unclustered sentences pagination bar has a few unhandled edge cases when query results are under 200
* In general, state managment is a bit fragile with a few cases of items not immediately updating
