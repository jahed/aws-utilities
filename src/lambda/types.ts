import { APIGatewayEvent, APIGatewayEventRequestContext } from 'aws-lambda'

export interface LambdaCallback<R> {
    (error: Error | null, response: R): void
}

export interface LambdaHandler<E, C, R> {
    (event: E, context: C, callback: LambdaCallback<R>): void
}

// API Gateway

export type APIGatewayEventContext = APIGatewayEventRequestContext
export interface APIGatewayEventResult {
    statusCode: number;
    headers?: {
        [header: string]: boolean | number | string;
    },
    body?: string;
    isBase64Encoded?: boolean;
}

export interface APIGatewayLambdaHandler extends LambdaHandler<APIGatewayEvent, APIGatewayEventContext, APIGatewayEventResult> {}
