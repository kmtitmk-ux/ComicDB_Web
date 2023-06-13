/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Pf01Comic } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type Pf01ComicUpdateFormInputValues = {
    createdAt?: string;
    url?: string;
    title?: string;
};
export declare type Pf01ComicUpdateFormValidationValues = {
    createdAt?: ValidationFunction<string>;
    url?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Pf01ComicUpdateFormOverridesProps = {
    Pf01ComicUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    url?: PrimitiveOverrideProps<TextFieldProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type Pf01ComicUpdateFormProps = React.PropsWithChildren<{
    overrides?: Pf01ComicUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    pf01Comic?: Pf01Comic;
    onSubmit?: (fields: Pf01ComicUpdateFormInputValues) => Pf01ComicUpdateFormInputValues;
    onSuccess?: (fields: Pf01ComicUpdateFormInputValues) => void;
    onError?: (fields: Pf01ComicUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: Pf01ComicUpdateFormInputValues) => Pf01ComicUpdateFormInputValues;
    onValidate?: Pf01ComicUpdateFormValidationValues;
} & React.CSSProperties>;
export default function Pf01ComicUpdateForm(props: Pf01ComicUpdateFormProps): React.ReactElement;
