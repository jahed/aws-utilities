import { APIGatewayEvent, APIGatewayEventRequestContext } from 'aws-lambda'

export interface Callback<R> {
    (error: Error | null, response: R): void
}

export interface Handler<E, C, R> {
    (event: E, context: C, callback: Callback<R>): void
}

export interface APIGatewayResult {
    statusCode: number;
    headers?: {
        [header: string]: boolean | number | string;
    },
    body?: string;
    isBase64Encoded?: boolean;
}

export type APIGatewayContext = APIGatewayEventRequestContext

export interface APIGatewayHandler extends Handler<APIGatewayEvent, APIGatewayContext, APIGatewayResult> {}

export as namespace AWSLambda
