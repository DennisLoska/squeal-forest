import { client } from "./client";
import pgtyped from "./pgtyped-evaluation";

async function main() {
    await client.connect();

    // pgtyped evaluation
    await pgtyped.getUserByName("Rapunzel", client);
    await pgtyped.getUserByEmail("snowwhite@fairytale.com", client);

    await client.end();
}

main();
