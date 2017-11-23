import { APIGatewayEvent, APIGatewayEventRequestContext, ProxyResult } from 'aws-lambda'

export interface LambdaCallback<R> {
    (error: Error | null, response: R): void
}

export interface LambdaHandler<E, C, R> {
    (event: E, context: C, callback: LambdaCallback<R>): void
}

// API Gateway

export type APIGatewayEventContext = APIGatewayEventRequestContext
export type APIGatewayEventResult = ProxyResult

export interface APIGatewayLambdaHandler extends LambdaHandler<APIGatewayEvent, APIGatewayEventContext, APIGatewayEventResult> {}
