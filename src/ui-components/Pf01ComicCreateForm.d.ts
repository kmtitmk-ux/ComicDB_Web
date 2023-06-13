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
export declare type Pf01ComicCreateFormInputValues = {
    createdAt?: string;
    url?: string;
    title?: string;
};
export declare type Pf01ComicCreateFormValidationValues = {
    createdAt?: ValidationFunction<string>;
    url?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Pf01ComicCreateFormOverridesProps = {
    Pf01ComicCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    url?: PrimitiveOverrideProps<TextFieldProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type Pf01ComicCreateFormProps = React.PropsWithChildren<{
    overrides?: Pf01ComicCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: Pf01ComicCreateFormInputValues) => Pf01ComicCreateFormInputValues;
    onSuccess?: (fields: Pf01ComicCreateFormInputValues) => void;
    onError?: (fields: Pf01ComicCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: Pf01ComicCreateFormInputValues) => Pf01ComicCreateFormInputValues;
    onValidate?: Pf01ComicCreateFormValidationValues;
} & React.CSSProperties>;
export default function Pf01ComicCreateForm(props: Pf01ComicCreateFormProps): React.ReactElement;
