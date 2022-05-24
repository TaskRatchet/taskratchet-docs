# API

<figure style="border: 1px solid red; padding: 1em; display: inline-block;">
❗ The API is not stable, and may change at any time.
</figure>

TaskRatchet has an API you can use to list, update, and create new tasks, among other things. 
Unfortunately, the API is not yet stable enough for me to prioritize documenting it publicly.
If you would like more information regaring how you can use TaskRatchet's API, please email
me at <nathan@taskratchet.com>.

You can find your API user ID and token in your account settings.

## Tooling

- <https://github.com/narthur/taskratchet-python>

## Examples

- <https://forum.beeminder.com/t/taskratchet-bookmarklets/10276>

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
