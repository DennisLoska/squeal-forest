import pgtyped from "./pgtyped-evaluation";

async function main() {
    await pgtyped.getUser("Rapunzel");
}

main();
