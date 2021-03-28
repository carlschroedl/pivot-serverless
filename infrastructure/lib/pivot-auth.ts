import * as cdk from '@aws-cdk/core';
import { CfnIdentityPool, CfnIdentityPoolProps } from '@aws-cdk/aws-cognito';
import * as lambda from '@aws-cdk/aws-lambda';

export interface AuthProps {

}

export class PivotAuth extends cdk.Construct {
    public pool : CfnIdentityPool;
    constructor(scope: cdk.Construct, id: string, authProps: AuthProps) {
    super(scope, id);
        /**
         * Create IAM Policy granting api-invoke permission to the API Gateway /GET/ resources
         * Create IAM Policy granting api-invoke permission to all API Gateway resources 
         * Create anon IAM Role, associate GET policy with it
         * Create authd IAM Role, associate broad API Gateway policy with it
         * Create Identity Pool
         *      set authenticated role to the authd role
         *      set unauthenticated role to the anon role
         * Somehow configure all of the identity providers
         */
        const poolProps = {
            allowUnauthenticatedIdentities: true,
            cognitoIdentityProviders: []
        };
        this.pool = new CfnIdentityPool(
            scope,
            'PivotIdPool',
            poolProps
        );

    }
}