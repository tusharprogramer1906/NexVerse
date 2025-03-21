const { pgTable, serial, text, json } = require("drizzle-orm/pg-core");

export const events = pgTable("events", {
  id: serial("id").primaryKey(),
  eventName: text("Event Name").notNull(),
  eventDesc: text("Event Desc").notNull(),
  images: json('Images'),
});
