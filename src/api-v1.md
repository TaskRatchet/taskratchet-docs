# API v1

::: info
This version of the API is stable. Future features will be added to [version 2](/api-v2).
:::

TaskRatchet has an API you can use to list, update, and create new tasks, among other things.
Unfortunately, the API is not yet stable enough to prioritize documenting it publicly.
If you would like more information regaring how you can use TaskRatchet's API, or you find
anything in this document that seems inaccurate, please send an email to <support@taskratchet.com>.

You can find your API user ID and token in your account settings.

## Getting Started

Before making any requests, you'll need to:

1. Log into your TaskRatchet account
2. Go to Account Settings
3. Find your API User ID and API Token

## Authentication

The API uses two custom headers for authentication.

| Header                 | Description                                     |
| ---------------------- | ----------------------------------------------- |
| `X-Taskratchet-Userid` | Your account ID, found in your account settings |
| `X-Taskratchet-Token`  | Your API token, found in your account settings  |

::: code-group
```python [Python]
import requests

headers = {
    'X-Taskratchet-Userid': 'YOUR_USER_ID',
    'X-Taskratchet-Token': 'YOUR_API_TOKEN'
}

response = requests.get('https://api.taskratchet.com/api1/me', headers=headers)
print(response.json())
```

```javascript [JavaScript]
const response = await fetch('https://api.taskratchet.com/api1/me', {
  headers: {
    'X-Taskratchet-Userid': 'YOUR_USER_ID',
    'X-Taskratchet-Token': 'YOUR_API_TOKEN'
  }
});

const data = await response.json();
console.log(data);
```

```curl [cURL]
curl -X GET "https://api.taskratchet.com/api1/me" \
  -H "X-Taskratchet-Userid: YOUR_USER_ID" \
  -H "X-Taskratchet-Token: YOUR_API_TOKEN"
```
:::

## Rate Limiting

| Route | Period | Limit |
| ------------------------ | ------- | ----- |
| `/api1/*` | 15 minutes | 100 requests |
| `/api1/me/tasks` | 15 minutes | 10 requests |

## Schema

Base URL: <https://api.taskratchet.com/api1/>

| Endpoint                 | Description              |
| ------------------------ | ------------------------ |
| `GET me`                 | Get your profile data    |
| `PUT me`                 | Update your profile data |
| `GET me/tasks`           | Get all your tasks       |
| `POST me/tasks`          | Create a new task        |
| `GET me/tasks/{task_id}` | Get a specific task      |
| `PUT me/tasks/{task_id}` | Update a specific task   |
| `GET status`             | Get API status details   |
| `GET timezones`          | List of valid timezones  |

### `GET me`

| Response Field | Type   | Description                                           |
| -------------- | ------ | ----------------------------------------------------- |
| id             | string | The account's unique identifier                       |
| name           | string | User's full name                                      |
| email          | string | User's email address                                  |
| timezone       | string | User's current account timezone                       |
| cards          | array  | List of user's payment methods                        |
| integrations   | object | User's integration settings; currently only Beeminder |

Example response:

```json
{
  "id": "Zu0qDVncIgSuUbQfr261",
  "name": "Jon Doe",
  "email": "jon@doe.com",
  "timezone": "America/New_York",
  "cards": [],
  "integrations": {
    "beeminder": {
      "user": "jondoe",
      "goal_new_tasks": "tr_tasks"
    }
  }
}
```

### `PUT me`

| Input Field  | Type   | Description                                            |
| ------------ | ------ | ------------------------------------------------------ |
| name         | string | User's full name                                       |
| email        | string | User's email address                                   |
| timezone     | string | User's timezone; for valid values, see `GET timezones` |
| new_password | string | New password                                           |
| integrations | object | User's integration settings; currently only Beeminder  |

Response is the updated user object—see `GET me`.

Example request:

```bash
curl -X PUT "https://api.taskratchet.com/api1/me" \
  -H "X-Taskratchet-Userid: YOUR_USER_ID" \
  -H "X-Taskratchet-Token: YOUR_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jon Doe",
    "timezone": "America/Los_Angeles"
  }'
```

### `GET me/tasks`

Returns an array of tasks. Currently it returns all tasks ever associated with the user.

| Task Field    | Type    | Description                                                                                                                                   |
| ------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| id            | string  | Task's unique identifier                                                                                                                      |
| task          | string  | Task's title                                                                                                                                  |
| due           | string  | Task's timezone-agnostic due string                                                                                                           |
| due_timestamp | number  | Task's precise due time, taking the user's current timezone into account. Changing the user's timezone will change this number for all tasks. |
| cents         | number  | Task's stakes                                                                                                                                 |
| complete      | boolean | Whether or not the task has been completed                                                                                                    |
| status        | string  | One of "complete", "expired", or "pending"                                                                                                    |
| timezone      | string  | The user's current timezone                                                                                                                   |

Example response:

```json
[
  {
    "id": "tdDPzh1GpZHAGZURVBf6",
    "task": "Take out the trash",
    "due": "2/21/2022, 11:59 PM",
    "due_timestamp": 1645505940,
    "cents": 500,
    "complete": false,
    "status": "pending",
    "timezone": "America/Cancun"
  }
]
```

### `POST me/tasks`

| Input Field | Type   | Description                                                 |
| ----------- | ------ | ----------------------------------------------------------- |
| task        | string | Task title                                                  |
| due         | string | Due date and time in string of format `3/25/2020, 11:59 PM` |
| cents       | number | Stakes in cents                                             |

On success, returns the created task.

Example request:

```bash
curl -X POST "https://api.taskratchet.com/api1/me/tasks" \
  -H "X-Taskratchet-Userid: YOUR_USER_ID" \
  -H "X-Taskratchet-Token: YOUR_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "task": "Take out the trash",
    "due": "3/25/2023, 11:59 PM",
    "cents": 500
  }'
```

Example response:

```json
{
  "id": "tdDPzh1GpZHAGZURVBf6",
  "task": "Take out the trash",
  "due": "2/21/2022, 11:59 PM",
  "due_timestamp": 1645505940,
  "cents": 500,
  "complete": false,
  "status": "pending",
  "timezone": "America/Cancun"
}
```

### `GET me/tasks/{task_id}`

Retrieve a single task with `task_id`. See `GET me/tasks` for more detail on the returned task object.

Example response:

```json
{
  "id": "tdDPzh1GpZHAGZURVBf6",
  "task": "Take out the trash",
  "due": "2/21/2022, 11:59 PM",
  "due_timestamp": 1645505940,
  "cents": 500,
  "complete": false,
  "status": "pending",
  "timezone": "America/Cancun"
}
```

### `PUT me/tasks/{task_id}`

Update a specific task.

| Input Field | Type    | Description                                                                 |
| ----------- | ------- | --------------------------------------------------------------------------- |
| complete    | boolean | Mark the task as completed. Currently the only supported field to update. |
| uncle       | boolean | Request the task be charged as incomplete immediately. Currently not supported. |

Example request:

```bash
curl -X PUT "https://api.taskratchet.com/api1/me/tasks/tdDPzh1GpZHAGZURVBf6" \
  -H "X-Taskratchet-Userid: YOUR_USER_ID" \
  -H "X-Taskratchet-Token: YOUR_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "complete": true
  }'
```

### `GET status`

Returns [details](https://api.taskratchet.com/api1/status) about the API server instance that handled the request. Currently only returns the API's internal UTC time.

Example response:

```json
{
  "utc_now": "2022-07-12T18:52:41.647995+00:00"
}
```

### `GET timezones`

Returns an array of [valid timezone values](https://api.taskratchet.com/api1/timezones).

## Tooling & Resources

- [TaskRatchet Python Client](https://github.com/narthur/taskratchet-python) - Official Python client library
- [TaskRatchet Bookmarklets](https://forum.beeminder.com/t/taskratchet-bookmarklets/10276) - Browser bookmarklets for common operations
