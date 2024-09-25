'use server'
import { schema } from "@/zodSchema/schema"
import { createSafeActionClient, DEFAULT_SERVER_ERROR_MESSAGE, flattenValidationErrors } from "next-safe-action"

class ActionError extends Error { }

export const action = createSafeActionClient({
  handleServerError: (error) => {
    console.log("error 333", error)
    if (error instanceof ActionError) {
      return error.message
    }

    return DEFAULT_SERVER_ERROR_MESSAGE
  }
})

export const addProperty = action
  .schema(schema, {
    handleValidationErrorsShape: (errors) => flattenValidationErrors(errors).fieldErrors
  })
  .action(async ({ ctx, parsedInput }) => {
    // hover parsedInput here would see the price type is number which is inconsistent with the type in execute method from client side
  })