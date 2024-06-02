import { Client } from "pg";
import { findUserByName } from "./queries/user.queries";

async function getUser(user: string, client: Client) {
    const users = await findUserByName.run({ name: user }, client);
    console.log(`Found: ${users[0].name}`);
}

export default {
    getUser,
};
