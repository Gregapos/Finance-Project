# React Frontend Setup Instructions

Upon downloading the project, follow these steps to set up and run the frontend.

## 1. Setup Environment Variables

You need to create a `.env` file in the `./frontend` directory with your API key and Web API URL.

### Steps:

1. Copy the `.env.example` file located in `./frontend/` and rename it to `.env`.
2. Replace the placeholders with your actual values:
   - **REACT_APP_API_KEY**: Your API key for [Financial Modeling Prep](https://site.financialmodelingprep.com/).
   - **REACT_APP_SERVER_URL**: The URL of your backend ASP.NET Core Web API.

### Example `.env`:

```plaintext
REACT_APP_API_KEY=YourFinancialModelingPrepApiKey
REACT_APP_SERVER_URL=https://your-api-url.com
```

## 2. Run the Project

Once you've set up the environment variables, you can run the project locally with the following command:

```bash
npm run start
```

## 3. Build the Project

To build the project for production, use:

```bash
npm run build
```

This will create an optimized production build in the ./build directory.

## 4. Deploy the Project

To deploy the production build to a static web app using Azure Static Web Apps, use:

```bash
swa deploy ./build --deployment-token=@@@@@
```

Make sure to replace @@@@ with your actual deployment token.
