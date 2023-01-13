import awilix, { AwilixContainer } from 'awilix'
import { registerDatabase } from './db.js'
import createServer from './server.js'
import createRouter from '../router/index.js'

const createContainer = async () => {
    const container = awilix.createContainer({
        injectionMode: awilix.InjectionMode.PROXY
    })

    registerDatabase(container)

    container.register({
        router: awilix.asFunction(createRouter),
        expressServer: awilix.asFunction(createServer),
    })

    console.log('Modules loaded:', Object.keys(container.registrations));

    return container;
}  

const container: AwilixContainer = await createContainer();

export default container
