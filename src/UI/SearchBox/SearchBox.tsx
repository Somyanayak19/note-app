import { TextField } from "@mui/material";

const SearchBox = ({onChangeText}: any) => {
    return   <TextField
    size="small"
    onChange={onChangeText}
    label="Search Note"
    sx={{ backgroundColor: "white", marginTop: "10px", width: "50%" }}
  />
}
export default SearchBox;