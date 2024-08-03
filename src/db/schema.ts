import { pgTable, serial } from "drizzle-orm/pg-core";

export const notes = pgTable("nt_notes", {
  id: serial("id").primaryKey(),
});
