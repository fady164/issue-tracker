const { createClient } = require("@supabase/supabase-js");

const SUPABASE_URL =
  "postgresql://postgres:P6k9aK9BxFlpM4EM@db.qxbpkwiecsxvjilcuryi.supabase.co:5432/postgres";
const API_KEY = "YOUR_API_KEY";

const supabase = createClient(SUPABASE_URL, API_KEY);

const data = [
  {
    title: "Database Connection Issue",
    description:
      "Experiencing difficulties connecting to the database server. Investigating the root cause and fixing it.",
    status: "OPEN",
    created_at: "2023-01-01T10:00:00Z",
    updated_at: "2023-01-01T10:30:00Z",
  },
  {
    title: "Authentication Bug",
    description:
      "Users unable to log in due to an authentication bug. Resolving the issue to ensure smooth user access.",
    status: "IN_PROGRESS",
    created_at: "2023-01-02T12:15:00Z",
    updated_at: "2023-01-02T12:45:00Z",
  },
  {
    title: "Performance Degradation",
    description:
      "System performance has degraded. Analyzing and optimizing queries for better response times.",
    status: "OPEN",
    created_at: "2023-01-03T14:30:00Z",
    updated_at: "2023-01-03T15:00:00Z",
  },
  // Add entries for the remaining 17 records
];

async function insertData() {
  const { data: insertedData, error } = await supabase
    .from("Issue")
    .upsert(data, { onConflict: ["title"] });

  if (error) {
    console.error("Error inserting data:", error);
  } else {
    console.log("Data inserted successfully:", insertedData);
  }
}

insertData();
