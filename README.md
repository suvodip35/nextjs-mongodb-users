# Next.js MongoDB User Management System

A full-stack application built with Next.js and MongoDB for managing user records with a beautiful, responsive interface.

## Features

- ✅ Create user records with validation
- ✅ View all users in a responsive grid
- ✅ Delete users
- ✅ Real-time error and success notifications
- ✅ MongoDB integration with Mongoose
- ✅ RESTful API endpoints
- ✅ Responsive design for mobile and desktop

## Tech Stack

- **Frontend**: Next.js 14, React 18, CSS3
- **Backend**: Next.js API Routes
- **Database**: MongoDB with Mongoose
- **HTTP Client**: Axios

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/suvodip35/nextjs-mongodb-users.git
cd nextjs-mongodb-users
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up MongoDB

1. Create a MongoDB account at [mongodb.com](https://www.mongodb.com)
2. Create a new cluster
3. Get your connection string
4. Copy it to `.env.local`

### 4. Configure environment variables

Create a `.env.local` file in the root directory:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/nextjs-users?retryWrites=true&w=majority
```

Replace `username`, `password`, and `cluster` with your MongoDB credentials.

### 5. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Project Structure

```
nextjs-mongodb-users/
├── app/
│   ├── api/
│   │   └── users/
│   │       ├── route.js          # GET all users, POST new user
│   │       └── [id]/
│   │           └── route.js      # GET, PUT, DELETE individual user
│   ├── page.js                   # Home page with form and user list
│   ├── page.css                  # Page styling
│   ├── layout.js                 # Root layout
│   └── globals.css               # Global styles
├── lib/
│   └── mongodb.js                # MongoDB connection utility
├── models/
│   └── User.js                   # User schema and model
├── package.json
├── .env.local                    # Environment variables (not in git)
├── next.config.js
└── README.md
```

## API Endpoints

### Get all users
```
GET /api/users
```

### Create a new user
```
POST /api/users
Content-Type: application/json

{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "address": "123 Main St",
  "city": "New York",
  "zipCode": "10001"
}
```

### Get a specific user
```
GET /api/users/:id
```

### Update a user
```
PUT /api/users/:id
Content-Type: application/json

{
  "firstName": "Jane",
  "lastName": "Doe",
  ...
}
```

### Delete a user
```
DELETE /api/users/:id
```

## User Model Fields

- **firstName** (required): User's first name (max 50 characters)
- **lastName** (required): User's last name (max 50 characters)
- **email** (required, unique): User's email address with validation
- **phone** (required): User's phone number with validation
- **address** (optional): User's street address
- **city** (optional): User's city
- **zipCode** (optional): User's zip code
- **createdAt**: Automatically set timestamp
- **updatedAt**: Automatically updated timestamp

## Available Scripts

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## Usage

1. **Create a User**: Fill in the form on the left side and click "Create User"
2. **View Users**: All created users appear in the list on the right
3. **Delete a User**: Click the "Delete" button on any user card

## Error Handling

The application includes comprehensive error handling:
- Email uniqueness validation
- Phone number format validation
- Required field validation
- Database connection errors
- API error responses

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- [ ] Edit user functionality
- [ ] Search and filter users
- [ ] Pagination
- [ ] User authentication
- [ ] Export to CSV
- [ ] Bulk operations

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Support

For issues or questions, please open an issue on GitHub.
