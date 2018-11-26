/*
Here we provide a configuration object. By default we load these variables from the env on the box.
Locally create an .env.devleopment.local file with the appropriate variables. On production boxes
we override these default values with values from a js file fetched before react loads.
*/

const envConfig = {
  exampleEnvVar: `${process.env.REACT_APP_EXAMPLE_ENV_VAR}`
};

export default { ...envConfig };
