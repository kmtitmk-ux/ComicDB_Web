/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { CDB02 } from "../API.ts";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CDB02UpdateFormInputValues = {
    postId?: string;
    createdAt?: string;
    content?: string;
    dataType?: string;
    reply?: string;
    updatedAt?: string;
    userId?: string;
};
export declare type CDB02UpdateFormValidationValues = {
    postId?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    content?: ValidationFunction<string>;
    dataType?: ValidationFunction<string>;
    reply?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
    userId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CDB02UpdateFormOverridesProps = {
    CDB02UpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    postId?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    content?: PrimitiveOverrideProps<TextFieldProps>;
    dataType?: PrimitiveOverrideProps<TextFieldProps>;
    reply?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
    userId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CDB02UpdateFormProps = React.PropsWithChildren<{
    overrides?: CDB02UpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    cDB02?: CDB02;
    onSubmit?: (fields: CDB02UpdateFormInputValues) => CDB02UpdateFormInputValues;
    onSuccess?: (fields: CDB02UpdateFormInputValues) => void;
    onError?: (fields: CDB02UpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CDB02UpdateFormInputValues) => CDB02UpdateFormInputValues;
    onValidate?: CDB02UpdateFormValidationValues;
} & React.CSSProperties>;
export default function CDB02UpdateForm(props: CDB02UpdateFormProps): React.ReactElement;
