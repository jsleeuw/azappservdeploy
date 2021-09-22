// Require the framework and instantiate it
const fastify = require("fastify")({ logger: true })
const port = process.env.PORT
// Declare a route
fastify.get("/", async (request, reply) => {
  return { hello: "world" }
})

// Run the server!
fastify.listen(port, "0.0.0.0", async function (error, address) {
  if (error) {
    fastify.log.error(error)
    process.exit(1)
  }
  fastify.log.info(`server listening on ${address}`)
})
