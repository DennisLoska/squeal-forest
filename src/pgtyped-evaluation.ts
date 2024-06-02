import { client } from "./client";
import { findUserByName } from "./queries/user.queries";

async function getUser(user: string) {
    await client.connect();
    const users = await findUserByName.run({ name: user }, client);
    console.log(`Found: ${users[0].name}`);
    await client.end();
}

export default {
    getUser,
};
