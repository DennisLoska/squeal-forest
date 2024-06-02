import { Client } from "pg";

// Let me be lazy okay this is just an exploratory project
export const client = new Client({
    host: "localhost",
    user: "prince_charming",
    password: "rapunzel_let_down_your_hair",
    database: "squeal_forest",
});
