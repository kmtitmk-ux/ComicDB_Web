/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ComicEngagementCreateFormInputValues = {
    comicId?: string;
    createdAt?: string;
    dataType?: string;
    updatedAt?: string;
    userId?: string;
};
export declare type ComicEngagementCreateFormValidationValues = {
    comicId?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    dataType?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
    userId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ComicEngagementCreateFormOverridesProps = {
    ComicEngagementCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    comicId?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    dataType?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
    userId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ComicEngagementCreateFormProps = React.PropsWithChildren<{
    overrides?: ComicEngagementCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ComicEngagementCreateFormInputValues) => ComicEngagementCreateFormInputValues;
    onSuccess?: (fields: ComicEngagementCreateFormInputValues) => void;
    onError?: (fields: ComicEngagementCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ComicEngagementCreateFormInputValues) => ComicEngagementCreateFormInputValues;
    onValidate?: ComicEngagementCreateFormValidationValues;
} & React.CSSProperties>;
export default function ComicEngagementCreateForm(props: ComicEngagementCreateFormProps): React.ReactElement;
