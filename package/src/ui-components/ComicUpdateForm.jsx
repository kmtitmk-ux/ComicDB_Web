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
import { getComic } from "../graphql/queries";
import { updateComic } from "../graphql/mutations";
const client = generateClient();
export default function ComicUpdateForm(props) {
  const {
    id: idProp,
    comic: comicModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    addLike: "",
    createdAt: "",
    description: "",
    errorCount: "",
    img: "",
    like: "",
    status: "",
    tags: "",
    title: "",
    officialTitle: "",
    author: "",
    updatedAt: "",
    url: "",
  };
  const [addLike, setAddLike] = React.useState(initialValues.addLike);
  const [createdAt, setCreatedAt] = React.useState(initialValues.createdAt);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [errorCount, setErrorCount] = React.useState(initialValues.errorCount);
  const [img, setImg] = React.useState(initialValues.img);
  const [like, setLike] = React.useState(initialValues.like);
  const [status, setStatus] = React.useState(initialValues.status);
  const [tags, setTags] = React.useState(initialValues.tags);
  const [title, setTitle] = React.useState(initialValues.title);
  const [officialTitle, setOfficialTitle] = React.useState(
    initialValues.officialTitle
  );
  const [author, setAuthor] = React.useState(initialValues.author);
  const [updatedAt, setUpdatedAt] = React.useState(initialValues.updatedAt);
  const [url, setUrl] = React.useState(initialValues.url);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = comicRecord
      ? { ...initialValues, ...comicRecord }
      : initialValues;
    setAddLike(cleanValues.addLike);
    setCreatedAt(cleanValues.createdAt);
    setDescription(cleanValues.description);
    setErrorCount(cleanValues.errorCount);
    setImg(cleanValues.img);
    setLike(cleanValues.like);
    setStatus(cleanValues.status);
    setTags(cleanValues.tags);
    setTitle(cleanValues.title);
    setOfficialTitle(cleanValues.officialTitle);
    setAuthor(cleanValues.author);
    setUpdatedAt(cleanValues.updatedAt);
    setUrl(cleanValues.url);
    setErrors({});
  };
  const [comicRecord, setComicRecord] = React.useState(comicModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getComic.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getComic
        : comicModelProp;
      setComicRecord(record);
    };
    queryData();
  }, [idProp, comicModelProp]);
  React.useEffect(resetStateValues, [comicRecord]);
  const validations = {
    addLike: [],
    createdAt: [],
    description: [],
    errorCount: [],
    img: [],
    like: [],
    status: [],
    tags: [],
    title: [],
    officialTitle: [],
    author: [],
    updatedAt: [],
    url: [],
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
          addLike: addLike ?? null,
          createdAt: createdAt ?? null,
          description: description ?? null,
          errorCount: errorCount ?? null,
          img: img ?? null,
          like: like ?? null,
          status: status ?? null,
          tags: tags ?? null,
          title: title ?? null,
          officialTitle: officialTitle ?? null,
          author: author ?? null,
          updatedAt: updatedAt ?? null,
          url: url ?? null,
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
            query: updateComic.replaceAll("__typename", ""),
            variables: {
              input: {
                id: comicRecord.id,
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
      {...getOverrideProps(overrides, "ComicUpdateForm")}
      {...rest}
    >
      <TextField
        label="Add like"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={addLike}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              addLike: value,
              createdAt,
              description,
              errorCount,
              img,
              like,
              status,
              tags,
              title,
              officialTitle,
              author,
              updatedAt,
              url,
            };
            const result = onChange(modelFields);
            value = result?.addLike ?? value;
          }
          if (errors.addLike?.hasError) {
            runValidationTasks("addLike", value);
          }
          setAddLike(value);
        }}
        onBlur={() => runValidationTasks("addLike", addLike)}
        errorMessage={errors.addLike?.errorMessage}
        hasError={errors.addLike?.hasError}
        {...getOverrideProps(overrides, "addLike")}
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
              addLike,
              createdAt: value,
              description,
              errorCount,
              img,
              like,
              status,
              tags,
              title,
              officialTitle,
              author,
              updatedAt,
              url,
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
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              addLike,
              createdAt,
              description: value,
              errorCount,
              img,
              like,
              status,
              tags,
              title,
              officialTitle,
              author,
              updatedAt,
              url,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Error count"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={errorCount}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              addLike,
              createdAt,
              description,
              errorCount: value,
              img,
              like,
              status,
              tags,
              title,
              officialTitle,
              author,
              updatedAt,
              url,
            };
            const result = onChange(modelFields);
            value = result?.errorCount ?? value;
          }
          if (errors.errorCount?.hasError) {
            runValidationTasks("errorCount", value);
          }
          setErrorCount(value);
        }}
        onBlur={() => runValidationTasks("errorCount", errorCount)}
        errorMessage={errors.errorCount?.errorMessage}
        hasError={errors.errorCount?.hasError}
        {...getOverrideProps(overrides, "errorCount")}
      ></TextField>
      <TextField
        label="Img"
        isRequired={false}
        isReadOnly={false}
        value={img}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              addLike,
              createdAt,
              description,
              errorCount,
              img: value,
              like,
              status,
              tags,
              title,
              officialTitle,
              author,
              updatedAt,
              url,
            };
            const result = onChange(modelFields);
            value = result?.img ?? value;
          }
          if (errors.img?.hasError) {
            runValidationTasks("img", value);
          }
          setImg(value);
        }}
        onBlur={() => runValidationTasks("img", img)}
        errorMessage={errors.img?.errorMessage}
        hasError={errors.img?.hasError}
        {...getOverrideProps(overrides, "img")}
      ></TextField>
      <TextField
        label="Like"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={like}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              addLike,
              createdAt,
              description,
              errorCount,
              img,
              like: value,
              status,
              tags,
              title,
              officialTitle,
              author,
              updatedAt,
              url,
            };
            const result = onChange(modelFields);
            value = result?.like ?? value;
          }
          if (errors.like?.hasError) {
            runValidationTasks("like", value);
          }
          setLike(value);
        }}
        onBlur={() => runValidationTasks("like", like)}
        errorMessage={errors.like?.errorMessage}
        hasError={errors.like?.hasError}
        {...getOverrideProps(overrides, "like")}
      ></TextField>
      <TextField
        label="Status"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={status}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              addLike,
              createdAt,
              description,
              errorCount,
              img,
              like,
              status: value,
              tags,
              title,
              officialTitle,
              author,
              updatedAt,
              url,
            };
            const result = onChange(modelFields);
            value = result?.status ?? value;
          }
          if (errors.status?.hasError) {
            runValidationTasks("status", value);
          }
          setStatus(value);
        }}
        onBlur={() => runValidationTasks("status", status)}
        errorMessage={errors.status?.errorMessage}
        hasError={errors.status?.hasError}
        {...getOverrideProps(overrides, "status")}
      ></TextField>
      <TextField
        label="Tags"
        isRequired={false}
        isReadOnly={false}
        value={tags}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              addLike,
              createdAt,
              description,
              errorCount,
              img,
              like,
              status,
              tags: value,
              title,
              officialTitle,
              author,
              updatedAt,
              url,
            };
            const result = onChange(modelFields);
            value = result?.tags ?? value;
          }
          if (errors.tags?.hasError) {
            runValidationTasks("tags", value);
          }
          setTags(value);
        }}
        onBlur={() => runValidationTasks("tags", tags)}
        errorMessage={errors.tags?.errorMessage}
        hasError={errors.tags?.hasError}
        {...getOverrideProps(overrides, "tags")}
      ></TextField>
      <TextField
        label="Title"
        isRequired={false}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              addLike,
              createdAt,
              description,
              errorCount,
              img,
              like,
              status,
              tags,
              title: value,
              officialTitle,
              author,
              updatedAt,
              url,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <TextField
        label="Official title"
        isRequired={false}
        isReadOnly={false}
        value={officialTitle}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              addLike,
              createdAt,
              description,
              errorCount,
              img,
              like,
              status,
              tags,
              title,
              officialTitle: value,
              author,
              updatedAt,
              url,
            };
            const result = onChange(modelFields);
            value = result?.officialTitle ?? value;
          }
          if (errors.officialTitle?.hasError) {
            runValidationTasks("officialTitle", value);
          }
          setOfficialTitle(value);
        }}
        onBlur={() => runValidationTasks("officialTitle", officialTitle)}
        errorMessage={errors.officialTitle?.errorMessage}
        hasError={errors.officialTitle?.hasError}
        {...getOverrideProps(overrides, "officialTitle")}
      ></TextField>
      <TextField
        label="Author"
        isRequired={false}
        isReadOnly={false}
        value={author}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              addLike,
              createdAt,
              description,
              errorCount,
              img,
              like,
              status,
              tags,
              title,
              officialTitle,
              author: value,
              updatedAt,
              url,
            };
            const result = onChange(modelFields);
            value = result?.author ?? value;
          }
          if (errors.author?.hasError) {
            runValidationTasks("author", value);
          }
          setAuthor(value);
        }}
        onBlur={() => runValidationTasks("author", author)}
        errorMessage={errors.author?.errorMessage}
        hasError={errors.author?.hasError}
        {...getOverrideProps(overrides, "author")}
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
              addLike,
              createdAt,
              description,
              errorCount,
              img,
              like,
              status,
              tags,
              title,
              officialTitle,
              author,
              updatedAt: value,
              url,
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
        label="Url"
        isRequired={false}
        isReadOnly={false}
        value={url}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              addLike,
              createdAt,
              description,
              errorCount,
              img,
              like,
              status,
              tags,
              title,
              officialTitle,
              author,
              updatedAt,
              url: value,
            };
            const result = onChange(modelFields);
            value = result?.url ?? value;
          }
          if (errors.url?.hasError) {
            runValidationTasks("url", value);
          }
          setUrl(value);
        }}
        onBlur={() => runValidationTasks("url", url)}
        errorMessage={errors.url?.errorMessage}
        hasError={errors.url?.hasError}
        {...getOverrideProps(overrides, "url")}
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
          isDisabled={!(idProp || comicModelProp)}
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
              !(idProp || comicModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
