import { APIGatewayProxyHandler } from 'aws-lambda'
import { handler } from './handler'

const lambdaHandler: APIGatewayProxyHandler = async (event, context) => {
  return handler(event, context)
}

export { lambdaHandler as handler }
