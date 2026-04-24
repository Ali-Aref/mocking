# Recipient Cards API

Base path: `/recipient-cards`

## Endpoints

### `GET /recipient-cards/user/:userId`

Returns all recipient cards for a user.

Path params:
- `userId` `number`

Example response:

```json
[
  {
    "id": 1,
    "cardNumber": "4111111111111111",
    "holderName": "Ali Ahmad",
    "userId": 12,
    "title": "Office"
  }
]
```

### `GET /recipient-cards/user/:userId/:cardNumber`

Returns one recipient card by `userId` and `cardNumber`.

Path params:
- `userId` `number`
- `cardNumber` `string`

Example response:

```json
{
  "id": 1,
  "cardNumber": "4111111111111111",
  "holderName": "Ali Ahmad",
  "userId": 12,
  "title": "Office"
}
```

If no card is found, the API returns `404 Not Found`.

### `POST /recipient-cards`

Creates a recipient card.

Request body:

```json
{
  "cardNumber": "4111111111111111",
  "holderName": "Ali Ahmad",
  "userId": 12,
  "title": "Office"
}
```

`title` is optional.

Example response:

```json
{
  "id": 1,
  "cardNumber": "4111111111111111",
  "holderName": "Ali Ahmad",
  "userId": 12,
  "title": "Office"
}
```

### `PATCH /recipient-cards/:id`

Updates a recipient card by id. All fields are optional.

Path params:
- `id` `number`

Request body:

```json
{
  "title": "Family"
}
```

Example response:

```json
{
  "id": 1,
  "cardNumber": "4111111111111111",
  "holderName": "Ali Ahmad",
  "userId": 12,
  "title": "Family"
}
```

If no card is found, the API returns `404 Not Found`.

### `DELETE /recipient-cards/:id`

Deletes a recipient card by id.

Path params:
- `id` `number`

Example response:

The endpoint does not return a response body.
