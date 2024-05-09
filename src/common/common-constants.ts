import {createConfiguration, ServerConfiguration} from "../api-clients";

const server = new ServerConfiguration<{  }>("http://localhost:5278", {  });

export const configuration = createConfiguration({
    baseServer: server,
});