# My Cards API

Base path: `/my-cards`

## Endpoints

### `GET /my-cards/user/:userId`

Returns all cards for a user.

Path params:
- `userId` `number`

Example response:

```json
[
  {
    "id": 1,
    "cardNumber": "4111111111111111",
    "holderName": "Ali Ahmad",
    "userId": 12
  }
]
```

### `GET /my-cards/user/:userId/:cardNumber`

Returns one card by `userId` and `cardNumber`.

Path params:
- `userId` `number`
- `cardNumber` `string`

Example response:

```json
{
  "id": 1,
  "cardNumber": "4111111111111111",
  "holderName": "Ali Ahmad",
  "userId": 12
}
```

If no card is found, the API returns `404 Not Found`.

### `POST /my-cards`

Creates a card.

Request body:

```json
{
  "cardNumber": "4111111111111111",
  "holderName": "Ali Ahmad",
  "userId": 12
}
```

Example response:

```json
{
  "id": 1,
  "cardNumber": "4111111111111111",
  "holderName": "Ali Ahmad",
  "userId": 12
}
```

### `PATCH /my-cards/:id`

Updates a card by id. All fields are optional.

Path params:
- `id` `number`

Request body:

```json
{
  "holderName": "Ali A."
}
```

Example response:

```json
{
  "id": 1,
  "cardNumber": "4111111111111111",
  "holderName": "Ali A.",
  "userId": 12
}
```

If no card is found, the API returns `404 Not Found`.

### `DELETE /my-cards/:id`

Deletes a card by id.

Path params:
- `id` `number`

Example response:

The endpoint does not return a response body.
