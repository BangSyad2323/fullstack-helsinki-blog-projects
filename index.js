
import app from "./app.js";
import * as logger from "./utils/logger.js"

const PORT = 3003;


app.listen(PORT, () => {
  logger.info(`server running at port: ${PORT}`)
})