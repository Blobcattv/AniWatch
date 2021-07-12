export const config = {
    proxyUrl: "",
};

if (process.env["NODE_ENV"] === "development") {
    config.proxyUrl = "http://localhost:3001";
} else {
    config.proxyUrl = "https://xyz.de";
}
