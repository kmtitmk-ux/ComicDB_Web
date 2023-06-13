/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type Comic1CreateFormInputValues = {
    createdAt?: string;
    url?: string;
    title?: string;
    like?: number;
    img?: string;
    status?: number;
};
export declare type Comic1CreateFormValidationValues = {
    createdAt?: ValidationFunction<string>;
    url?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
    like?: ValidationFunction<number>;
    img?: ValidationFunction<string>;
    status?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Comic1CreateFormOverridesProps = {
    Comic1CreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    url?: PrimitiveOverrideProps<TextFieldProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    like?: PrimitiveOverrideProps<TextFieldProps>;
    img?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type Comic1CreateFormProps = React.PropsWithChildren<{
    overrides?: Comic1CreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: Comic1CreateFormInputValues) => Comic1CreateFormInputValues;
    onSuccess?: (fields: Comic1CreateFormInputValues) => void;
    onError?: (fields: Comic1CreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: Comic1CreateFormInputValues) => Comic1CreateFormInputValues;
    onValidate?: Comic1CreateFormValidationValues;
} & React.CSSProperties>;
export default function Comic1CreateForm(props: Comic1CreateFormProps): React.ReactElement;
