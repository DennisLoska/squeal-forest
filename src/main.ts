import { Client } from "pg";
import { findUserByName } from "./queries/user.queries";

export const client = new Client({
    host: "localhost",
    user: "prince_charming",
    password: "rapunzel_let_down_your_hair",
    database: "squeal_forest",
});

async function main() {
    await client.connect();

    const users = await findUserByName.run({ name: "Rapunzel" }, client);

    console.log(`Name: ${users[0].name}`);
    await client.end();
}

main();
