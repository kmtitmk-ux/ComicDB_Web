/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Comic1 } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type Comic1UpdateFormInputValues = {
    createdAt?: string;
    url?: string;
    title?: string;
    like?: number;
    img?: string;
    status?: number;
};
export declare type Comic1UpdateFormValidationValues = {
    createdAt?: ValidationFunction<string>;
    url?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
    like?: ValidationFunction<number>;
    img?: ValidationFunction<string>;
    status?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Comic1UpdateFormOverridesProps = {
    Comic1UpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    url?: PrimitiveOverrideProps<TextFieldProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    like?: PrimitiveOverrideProps<TextFieldProps>;
    img?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type Comic1UpdateFormProps = React.PropsWithChildren<{
    overrides?: Comic1UpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    comic1?: Comic1;
    onSubmit?: (fields: Comic1UpdateFormInputValues) => Comic1UpdateFormInputValues;
    onSuccess?: (fields: Comic1UpdateFormInputValues) => void;
    onError?: (fields: Comic1UpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: Comic1UpdateFormInputValues) => Comic1UpdateFormInputValues;
    onValidate?: Comic1UpdateFormValidationValues;
} & React.CSSProperties>;
export default function Comic1UpdateForm(props: Comic1UpdateFormProps): React.ReactElement;
