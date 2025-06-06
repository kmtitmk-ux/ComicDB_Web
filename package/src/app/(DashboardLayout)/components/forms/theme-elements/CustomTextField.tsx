import { ChangeEvent, useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";

const CustomTextField = styled((props: any) => {
  const { id, word } = props;
  const [inputVal, setInputVal] = useState<string>(word);
  useEffect(() => {
    setInputVal(word);
  }, [word]);

  return (
    <TextField
      {...props}
      name={id}
      value={inputVal}
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        setInputVal(e.target.value)
      }
    />
  );
})(({ theme }) => ({
  "& .MuiOutlinedInput-input::-webkit-input-placeholder": {
    color: theme.palette.text.secondary,
    opacity: "0.8",
  },
  "& .MuiOutlinedInput-input.Mui-disabled::-webkit-input-placeholder": {
    color: theme.palette.text.secondary,
    opacity: "1",
  },
  "& .Mui-disabled .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.grey[200],
  },
}));

export default CustomTextField;
