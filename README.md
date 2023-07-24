# H&M Store E-commerce React App

This is a sample e-commerce project made for educational purposes. The app allows users to login with a generic user account (email: a@b.com, password: 123456), create an account and store their data in Firebase Auth. The app also utilizes Firebase services to store product data and images separately to improve site performance. Users can generate purchase orders, which update the real-time product stock in the database.

The project is deployed on Netlify and can be accessed here: https://hm-shopsite.netlify.app/

## Technologies Used

- React.js
- Firebase (Firestore, Authentication, Storage)
- React Router
- React Bootstrap
- Netlify

## Features

- User authentication: users can create an account and log in using their email and password or Google account.
- Product management: products are stored in Firebase's Firestore database, and images are stored in Firebase's Storage service for better performance.
- Shopping cart: users can add products to their shopping cart and remove them as needed.
- Product browsing and filtering
- Product detail view
- Purchase order creation
- Real-time stock management: users can place orders, which updates the stock of each product in the database and stores the order details in Firestore.
- Netlify deployment

## Installation

1. Clone the repository: `git clone https://github.com/federicocendali/hm-shopsite.git`
2. Install dependencies: `npm install`
3. Create a Firebase project and add your Firebase configuration to a `.env` file in the root directory.
4. Start the development server: `npm start`

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)

This project was created by Federico Cendali. Feel free to contact me at federicocendali@gmail.com with any questions or feedback.
