/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Comic } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ComicUpdateFormInputValues = {
    createdAt?: string;
    url?: string;
    title?: string;
    like?: number;
    img?: string;
    status?: number;
};
export declare type ComicUpdateFormValidationValues = {
    createdAt?: ValidationFunction<string>;
    url?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
    like?: ValidationFunction<number>;
    img?: ValidationFunction<string>;
    status?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ComicUpdateFormOverridesProps = {
    ComicUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    url?: PrimitiveOverrideProps<TextFieldProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    like?: PrimitiveOverrideProps<TextFieldProps>;
    img?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ComicUpdateFormProps = React.PropsWithChildren<{
    overrides?: ComicUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    comic?: Comic;
    onSubmit?: (fields: ComicUpdateFormInputValues) => ComicUpdateFormInputValues;
    onSuccess?: (fields: ComicUpdateFormInputValues) => void;
    onError?: (fields: ComicUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ComicUpdateFormInputValues) => ComicUpdateFormInputValues;
    onValidate?: ComicUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ComicUpdateForm(props: ComicUpdateFormProps): React.ReactElement;
