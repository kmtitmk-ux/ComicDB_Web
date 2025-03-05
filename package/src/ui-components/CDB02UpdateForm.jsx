/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getCDB02 } from "../graphql/queries";
import { updateCDB02 } from "../graphql/mutations";
const client = generateClient();
export default function CDB02UpdateForm(props) {
  const {
    id: idProp,
    cDB02: cDB02ModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    postId: "",
    createdAt: "",
    content: "",
    dataType: "",
    reply: "",
    updatedAt: "",
    userId: "",
  };
  const [postId, setPostId] = React.useState(initialValues.postId);
  const [createdAt, setCreatedAt] = React.useState(initialValues.createdAt);
  const [content, setContent] = React.useState(initialValues.content);
  const [dataType, setDataType] = React.useState(initialValues.dataType);
  const [reply, setReply] = React.useState(initialValues.reply);
  const [updatedAt, setUpdatedAt] = React.useState(initialValues.updatedAt);
  const [userId, setUserId] = React.useState(initialValues.userId);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = cDB02Record
      ? { ...initialValues, ...cDB02Record }
      : initialValues;
    setPostId(cleanValues.postId);
    setCreatedAt(cleanValues.createdAt);
    setContent(cleanValues.content);
    setDataType(cleanValues.dataType);
    setReply(cleanValues.reply);
    setUpdatedAt(cleanValues.updatedAt);
    setUserId(cleanValues.userId);
    setErrors({});
  };
  const [cDB02Record, setCDB02Record] = React.useState(cDB02ModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getCDB02.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getCDB02
        : cDB02ModelProp;
      setCDB02Record(record);
    };
    queryData();
  }, [idProp, cDB02ModelProp]);
  React.useEffect(resetStateValues, [cDB02Record]);
  const validations = {
    postId: [],
    createdAt: [],
    content: [],
    dataType: [],
    reply: [],
    updatedAt: [],
    userId: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          postId: postId ?? null,
          createdAt: createdAt ?? null,
          content: content ?? null,
          dataType: dataType ?? null,
          reply: reply ?? null,
          updatedAt: updatedAt ?? null,
          userId: userId ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateCDB02.replaceAll("__typename", ""),
            variables: {
              input: {
                id: cDB02Record.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "CDB02UpdateForm")}
      {...rest}
    >
      <TextField
        label="Post id"
        isRequired={false}
        isReadOnly={false}
        value={postId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              postId: value,
              createdAt,
              content,
              dataType,
              reply,
              updatedAt,
              userId,
            };
            const result = onChange(modelFields);
            value = result?.postId ?? value;
          }
          if (errors.postId?.hasError) {
            runValidationTasks("postId", value);
          }
          setPostId(value);
        }}
        onBlur={() => runValidationTasks("postId", postId)}
        errorMessage={errors.postId?.errorMessage}
        hasError={errors.postId?.hasError}
        {...getOverrideProps(overrides, "postId")}
      ></TextField>
      <TextField
        label="Created at"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={createdAt && convertToLocal(new Date(createdAt))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              postId,
              createdAt: value,
              content,
              dataType,
              reply,
              updatedAt,
              userId,
            };
            const result = onChange(modelFields);
            value = result?.createdAt ?? value;
          }
          if (errors.createdAt?.hasError) {
            runValidationTasks("createdAt", value);
          }
          setCreatedAt(value);
        }}
        onBlur={() => runValidationTasks("createdAt", createdAt)}
        errorMessage={errors.createdAt?.errorMessage}
        hasError={errors.createdAt?.hasError}
        {...getOverrideProps(overrides, "createdAt")}
      ></TextField>
      <TextField
        label="Content"
        isRequired={false}
        isReadOnly={false}
        value={content}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              postId,
              createdAt,
              content: value,
              dataType,
              reply,
              updatedAt,
              userId,
            };
            const result = onChange(modelFields);
            value = result?.content ?? value;
          }
          if (errors.content?.hasError) {
            runValidationTasks("content", value);
          }
          setContent(value);
        }}
        onBlur={() => runValidationTasks("content", content)}
        errorMessage={errors.content?.errorMessage}
        hasError={errors.content?.hasError}
        {...getOverrideProps(overrides, "content")}
      ></TextField>
      <TextField
        label="Data type"
        isRequired={false}
        isReadOnly={false}
        value={dataType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              postId,
              createdAt,
              content,
              dataType: value,
              reply,
              updatedAt,
              userId,
            };
            const result = onChange(modelFields);
            value = result?.dataType ?? value;
          }
          if (errors.dataType?.hasError) {
            runValidationTasks("dataType", value);
          }
          setDataType(value);
        }}
        onBlur={() => runValidationTasks("dataType", dataType)}
        errorMessage={errors.dataType?.errorMessage}
        hasError={errors.dataType?.hasError}
        {...getOverrideProps(overrides, "dataType")}
      ></TextField>
      <TextField
        label="Reply"
        isRequired={false}
        isReadOnly={false}
        value={reply}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              postId,
              createdAt,
              content,
              dataType,
              reply: value,
              updatedAt,
              userId,
            };
            const result = onChange(modelFields);
            value = result?.reply ?? value;
          }
          if (errors.reply?.hasError) {
            runValidationTasks("reply", value);
          }
          setReply(value);
        }}
        onBlur={() => runValidationTasks("reply", reply)}
        errorMessage={errors.reply?.errorMessage}
        hasError={errors.reply?.hasError}
        {...getOverrideProps(overrides, "reply")}
      ></TextField>
      <TextField
        label="Updated at"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={updatedAt && convertToLocal(new Date(updatedAt))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              postId,
              createdAt,
              content,
              dataType,
              reply,
              updatedAt: value,
              userId,
            };
            const result = onChange(modelFields);
            value = result?.updatedAt ?? value;
          }
          if (errors.updatedAt?.hasError) {
            runValidationTasks("updatedAt", value);
          }
          setUpdatedAt(value);
        }}
        onBlur={() => runValidationTasks("updatedAt", updatedAt)}
        errorMessage={errors.updatedAt?.errorMessage}
        hasError={errors.updatedAt?.hasError}
        {...getOverrideProps(overrides, "updatedAt")}
      ></TextField>
      <TextField
        label="User id"
        isRequired={false}
        isReadOnly={false}
        value={userId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              postId,
              createdAt,
              content,
              dataType,
              reply,
              updatedAt,
              userId: value,
            };
            const result = onChange(modelFields);
            value = result?.userId ?? value;
          }
          if (errors.userId?.hasError) {
            runValidationTasks("userId", value);
          }
          setUserId(value);
        }}
        onBlur={() => runValidationTasks("userId", userId)}
        errorMessage={errors.userId?.errorMessage}
        hasError={errors.userId?.hasError}
        {...getOverrideProps(overrides, "userId")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || cDB02ModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || cDB02ModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
