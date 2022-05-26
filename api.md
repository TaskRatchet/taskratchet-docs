# API

<figure style="border: 1px solid red; padding: 1em; display: inline-block;">
❗ The API is not stable, and may change at any time.
</figure>

TaskRatchet has an API you can use to list, update, and create new tasks, among other things. 
Unfortunately, the API is not yet stable enough for me to prioritize documenting it publicly.
If you would like more information regaring how you can use TaskRatchet's API, or you find
anything in this document that seems inaccurate, please email me at <nathan@taskratchet.com>.

You can find your API user ID and token in your account settings.

## Tooling

- <https://github.com/narthur/taskratchet-python>

## Examples

- <https://forum.beeminder.com/t/taskratchet-bookmarklets/10276>

## Authentication

The API uses two custom headers for authentication.

Header                 | Description
-----------------------|-------------------------------------------------
`X-Taskratchet-Userid` | Your account ID, found in your account settings
`X-Taskratchet-Token`  | Your API token, found in your account settings

## Schema

Base URL: <https://api.taskratchet.com/api1/>

Endpoint                 | Description
-------------------------|-------------------------
`GET me`                 | Get your profile data
`PUT me`                 | Update your profile data
`GET me/tasks`           | Get all your tasks
`POST me/tasks`          | Create a new task
`GET me/tasks/{task_id}` | Get a specific task
`PUT me/tasks/{task_id}` | Update a specific task
`GET timezones`          | List of valid timezones

### `GET me`

Response Field | Type   | Description
---------------|--------|--------------------------------------------------------
id             | string | The account's unique identifier
name           | string | User's full name
email          | string | User's email address
timezone       | string | User's current account timezone
cards          | array  | List of user's payment methods
integrations   | object | User's integration settings; currently only Beeminder

### `PUT me`

Input Field  | Type   | Description
-------------|--------|--------------------------------------------------------
name         | string | User's full name
email        | string | User's email address
timezone     | string | User's timezone; for valid values, see `GET timezones`
new_password | string | New password
integrations | object | User's integration settings; currently only Beeminder

Response is the updated user object--see `GET me`.

### `GET timezones`

Returns an array of valid timezone values.
