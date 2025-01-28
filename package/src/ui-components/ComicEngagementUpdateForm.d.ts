/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { ComicEngagement } from "../API.ts";
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
export declare type ComicEngagementUpdateFormInputValues = {
    comicId?: string;
    createdAt?: string;
    dataType?: string;
    updatedAt?: string;
    userId?: string;
};
export declare type ComicEngagementUpdateFormValidationValues = {
    comicId?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    dataType?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
    userId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ComicEngagementUpdateFormOverridesProps = {
    ComicEngagementUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    comicId?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    dataType?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
    userId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ComicEngagementUpdateFormProps = React.PropsWithChildren<{
    overrides?: ComicEngagementUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    comicEngagement?: ComicEngagement;
    onSubmit?: (fields: ComicEngagementUpdateFormInputValues) => ComicEngagementUpdateFormInputValues;
    onSuccess?: (fields: ComicEngagementUpdateFormInputValues) => void;
    onError?: (fields: ComicEngagementUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ComicEngagementUpdateFormInputValues) => ComicEngagementUpdateFormInputValues;
    onValidate?: ComicEngagementUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ComicEngagementUpdateForm(props: ComicEngagementUpdateFormProps): React.ReactElement;
