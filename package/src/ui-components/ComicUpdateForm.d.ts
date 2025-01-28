/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Comic } from "../API.ts";
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
export declare type ComicUpdateFormInputValues = {
    addLike?: number;
    createdAt?: string;
    description?: string;
    errorCount?: number;
    img?: string;
    like?: number;
    status?: number;
    tags?: string;
    title?: string;
    officialTitle?: string;
    author?: string;
    updatedAt?: string;
    url?: string;
};
export declare type ComicUpdateFormValidationValues = {
    addLike?: ValidationFunction<number>;
    createdAt?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    errorCount?: ValidationFunction<number>;
    img?: ValidationFunction<string>;
    like?: ValidationFunction<number>;
    status?: ValidationFunction<number>;
    tags?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
    officialTitle?: ValidationFunction<string>;
    author?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
    url?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ComicUpdateFormOverridesProps = {
    ComicUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    addLike?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    errorCount?: PrimitiveOverrideProps<TextFieldProps>;
    img?: PrimitiveOverrideProps<TextFieldProps>;
    like?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
    tags?: PrimitiveOverrideProps<TextFieldProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    officialTitle?: PrimitiveOverrideProps<TextFieldProps>;
    author?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
    url?: PrimitiveOverrideProps<TextFieldProps>;
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
