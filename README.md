# Financial Portfolio App

This project is a web-based financial portfolio management app where users can fetch stock data from the [Financial Modeling Prep API](https://site.financialmodelingprep.com/), manage their stock portfolios, and add comments to stocks. The app includes user authentication using Microsoft Identity, and both the frontend and backend are built with separate components.

## Table of Contents

- [Backend Setup](./api/README.md)
- [Frontend Setup](./frontend/README.md)
- [License](./LICENCE)

## Backend Setup

The backend is built using **ASP.NET Core** and provides a REST API to handle user authentication, portfolio management, and interaction with the [Financial Modeling Prep API](https://site.financialmodelingprep.com/). Follow the instructions below to set it up.

### Prerequisites

- [.NET SDK](https://dotnet.microsoft.com/en-us/download)
- [SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads) or any other SQL database

### Instructions

1.  Clone the repository

    ```bash
    git clone https://github.com/Gregapos/Finance-Project.git
    ```

2.  Navigate to the `backend` folder:

    ```bash
    cd Finance-Project/backend
    ```

3.  Create environment-specific `appsettings` files:

    - For development, create `appsettings.Development.json`.
    - For production, create `appsettings.Production.json`.

    Example `appsettings.Development.json`:

    ```json
    {
      "ConnectionStrings": {
        "DefaultConnection": "Server={ServerName};Database=YourDatabaseName;Trusted_Connection=True;MultipleActiveResultSets=true"
      },
      "FMPKey": "YourFMPKey",
      "JWT": {
        "Issuer": "http://localhost:5246",
        "Audience": "http://localhost:5246",
        "SigningKey": "YourSigningKey"
      }
    }
    ```

4.  Create an initial migration:

    ```bash
    dotnet ef migrations add InitialCreate
    ```

5.  Apply the migration to set up your database:

    ```bash
    dotnet ef database update
    ```

6.  Run the API:

    ```bash
    dotnet watch run
    ```

The API will be available at http://localhost:5113 (HTTP) and https://localhost:7141 (HTTPS).

For more detailed backend setup instructions, refer to the [Backend `README.md`](./api/README.md).

## Frontend Setup

The frontend is a **React** app built with **TypeScript** that interacts with the backend to display stock data and manage the user's portfolio.

### Prerequisites

- [Node.js](https://nodejs.org/en) installed on your system

### Instructions

1.  Navigate to the `frontend` folder:

    ```bash
    cd Finance-Project/frontend
    ```

2.  Install dependencies:

    ```bash
    npm install
    ```

3.  Set up environment variables:

    - Copy `.env.example` to `.env` and update it with your [Financial Modeling Prep API](https://site.financialmodelingprep.com/) key and the backend API URL.

    Example `.env` file:

    ```plaintext
    REACT_APP_API_KEY=YourFinancialModelingPrepApiKey
    REACT_APP_SERVER_URL=http://localhost:5113
    ```

4.  Run the development server:

    ```bash
    npm run start
    ```

This will start the frontend on http://localhost:3000.

To build and deploy the frontend for production, refer to the [Frontend `README.md`](./frontend/README.md).

## License

This project is licensed under the MIT License. See the [`LICENSE`](./LICENSE) file for details.
