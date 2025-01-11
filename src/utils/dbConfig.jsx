import { neon } from "@neondatabase/serverless";

import { drizzle } from "drizzle-orm/neon-http";

import * as schema from "./schema";

//this must be in an .env environment
const sql = neon(
  "postgresql://Sahalink_owner:q0AsPdDkbTK6@ep-icy-resonance-a2qb6ht6.eu-central-1.aws.neon.tech/Sahalink%2B?sslmode=require",
);

export const db = drizzle(sql, { schema });
