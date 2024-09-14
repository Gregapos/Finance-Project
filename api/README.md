# Setup Instructions

Upon downloading the project, follow these steps to set up your environment.

## 1. Create `appsettings` files for each environment

For each environment (Development, Staging, Production), you need to create a corresponding `appsettings` file.

### Steps:

1. Copy `appsettings.ExampleEnvironment.json` and rename it to match the environment:
   - For development: `appsettings.Development.json`
   - For production: `appsettings.Production.json`
   - For any other environment, use: `appsettings.{EnvironmentName}.json`
2. Replace the placeholder values in the new files with actual values specific to your environment:
   - **DefaultConnection**: Set your actual database connection string.
     - In Development, the connection string uses the `{ServerName}` placeholder. This will automatically be replaced with your machine's name at runtime.
   - **FMPKey**: Add your Financial Modeling Prep (FMP) API key.
   - **JWT**: Update the `Issuer`, `Audience`, and `SigningKey` with valid values for JWT authentication. The signing key must match what your tokens will use.

### Example `appsettings.Development.json`:

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server={ServerName};Database=YourDatabaseName;Trusted_Connection=True;MultipleActiveResultSets=true"
  },
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*",
  "FMPKey": "YourFMPKey",
  "JWT": {
    "Issuer": "http://localhost:5246",
    "Audience": "http://localhost:5246",
    "SigningKey": "YourSigningKey"
  }
}
```

## 2. Configure CORS

If needed, adjust the CORS policy in Program.cs to allow specific origins instead of allowing all origins. By default, CORS is configured as follows:

```csharp
app.UseCors(x => x
    .AllowAnyMethod()
    .AllowAnyHeader()
    .AllowCredentials()
    .SetIsOriginAllowed(origin => true)  // Allow any origin
);
```

You can modify .SetIsOriginAllowed to only allow specific domains in production.

## 3. Run the API

### Running the API in Development:

To run the API in development mode, use:

```bash
dotnet watch run
```

This will launch the API on http://localhost:5113 (HTTP) or https://localhost:7141 (HTTPS), as configured in the launchSettings.json file.

# Publish

To publish the application, use the following command:

```bash
dotnet publish -c Release -o ./publish
```

This will create a release build and output the files to the ./publish directory.

Make sure to configure your environment settings and set appropriate environment variables in production.

## Environment Variables

If you prefer not to store sensitive values like the JWT signing key or database connection string in the appsettings files, you can set these values via environment variables:

- Database Connection: ConnectionStrings\_\_DefaultConnection
- JWT Signing Key: JWT\_\_SigningKey
- JWT Issuer: JWT\_\_Issuer
- JWT Audience: JWT\_\_Audience
