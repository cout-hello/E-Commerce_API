AUTH
├── POST   /auth/register
└── POST   /auth/login

USERS
├── GET    /users
├── GET    /users/:id
├── PATCH  /users/:id
├── DELETE /users/:id
├── GET    /users/me
├── PATCH  /users/me
└── DELETE /users/me

PRODUCTS
├── GET    /products
├── GET    /products/:id
├── POST   /products
├── PATCH  /products/:id
└── DELETE /products/:id

CART
├── GET    /cart
├── POST   /cart/items //add items to the cart. if cart not exist, create one.
├── PATCH  /cart/items/:productId
├── DELETE /cart/items/:productId
└── DELETE /cart

ORDERS
├── POST   /orders
├── GET    /orders
├── GET    /orders/:id
└── PATCH  /orders/:id/status