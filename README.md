# Currency Exchange App

This project is a React-based currency exchange application that allows users to convert between different currencies using real-time exchange rates.

![Currency Exchange App Screenshot](./assets/screenshot.png)

## Features

- Convert between multiple currencies
- Real-time exchange rates from ExchangeRate-API
- Responsive design for desktop and mobile devices
- Dark mode toggle for user preference

## Technologies Used

- React.js
- Axios for API requests
- Styled-components for styling
- React Icons for UI icons

## Setup and Installation

1. Clone the repository:
   ```
   git clone https://github.com/sercanbaris/Currency-Exchange-App.git
   ```

2. Navigate to the project directory:
   ```
   cd Currency-Exchange-App
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your ExchangeRate-API key:
   ```
   REACT_APP_API_KEY=your_api_key_here
   ```

5. Start the development server:
   ```
   npm start
   ```

The app should now be running on `http://localhost:3000`.

## Usage

1. Select the currency you want to convert from in the "From" dropdown.
2. Enter the amount you wish to convert.
3. Select the currency you want to convert to in the "To" dropdown.
4. The converted amount will be displayed automatically.
5. Use the swap button to quickly switch between the "From" and "To" currencies.
6. Toggle the dark mode switch in the top-right corner to change the app's theme.

## API Reference

This project uses the [ExchangeRate-API](https://www.exchangerate-api.com/) to fetch current exchange rates. You will need to sign up for a free API key to use this service.

## Contributing

Contributions, issues, and feature requests are welcome. Feel free to check [issues page](https://github.com/sercanbaris/Currency-Exchange-App/issues) if you want to contribute.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Sercan Baris - [GitHub](https://github.com/sercanbaris)

Project Link: [https://github.com/sercanbaris/Currency-Exchange-App](https://github.com/sercanbaris/Currency-Exchange-App)
