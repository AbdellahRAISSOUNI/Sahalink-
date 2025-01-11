export default {
  dialect: "postgresql",
  schema: "./src/utils/schema.jsx",
  out: "./drizzle",

  dbCredentials: {
    //these need to be in a .env file
    url: "postgresql://Sahalink_owner:q0AsPdDkbTK6@ep-icy-resonance-a2qb6ht6.eu-central-1.aws.neon.tech/Sahalink%2B?sslmode=require",
    connectionString:
      "postgresql://Sahalink_owner:q0AsPdDkbTK6@ep-icy-resonance-a2qb6ht6.eu-central-1.aws.neon.tech/Sahalink%2B?sslmode=require",
  },
};
