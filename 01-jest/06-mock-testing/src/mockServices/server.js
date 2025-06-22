// src/mocks/node.js
import { setupWorker, rest } from 'msw/node'
import { handlers } from './handlers'
 
export const worker = setupWorker(
    rest.get("https://example.com/user")
)
worker.start()