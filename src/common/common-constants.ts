import {createConfiguration, ServerConfiguration} from "../api-clients";

// @ts-ignore
const server = new ServerConfiguration<{  }>(window.BASE_URL, {  });

export const configuration = createConfiguration({
    baseServer: server,
});