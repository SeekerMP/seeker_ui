import {createConfiguration, ServerConfiguration} from "../api-clients";

// @ts-ignore
const server = new ServerConfiguration<{  }>(window.BASE_URL, {  });
console.log(window);
export const configuration = createConfiguration({
    baseServer: server,
});