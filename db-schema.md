# Database Schema for Store Rating App

## Users Table
- `id` (Primary Key, Integer, Auto-increment)
- `name` (String, Required)
- `email` (String, Required, Unique)
- `password` (String, Required, Hashed)
- `address` (String, Optional)
- `role` (String, Required: 'admin', 'user', 'owner')

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  address VARCHAR(255),
  role VARCHAR(20) NOT NULL
);
```

---

## Stores Table
- `id` (Primary Key, Integer, Auto-increment)
- `name` (String, Required)
- `email` (String, Required, Unique)
- `address` (String, Required)

```sql
CREATE TABLE stores (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  address VARCHAR(255) NOT NULL
);
```

---

## Ratings Table
- `id` (Primary Key, Integer, Auto-increment)
- `user_id` (Foreign Key → users.id)
- `store_id` (Foreign Key → stores.id)
- `rating` (Integer, 1-5)

```sql
CREATE TABLE ratings (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  store_id INTEGER REFERENCES stores(id),
  rating INTEGER CHECK (rating >= 1 AND rating <= 5)
);
```

---

## Indexes & Relationships
- Foreign keys: `ratings.user_id` → `users.id`, `ratings.store_id` → `stores.id`
- Indexes on: `users.email`, `stores.email`, `stores.name`, `ratings.user_id`, `ratings.store_id`

---

## ER Diagram (Textual)

```
[users] 1---* [ratings] *---1 [stores]
```

- A user can rate many stores.
- A store can have many ratings from different users.
- Each rating links a user and a store.
