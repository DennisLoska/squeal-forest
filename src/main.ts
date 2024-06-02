import { client } from "./client";
import pgtyped from "./pgtyped-evaluation";

async function main() {
    await client.connect();
    await pgtyped.getUser("Rapunzel", client);
    await client.end();
}

main();
