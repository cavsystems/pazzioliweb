import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select, { type SelectProps } from "@mui/material/Select";
import { useTheme, type Theme } from "@mui/material/styles";

 interface SelectEditableProps extends Omit<SelectProps<string>, 'value' > {
  personName: string;
  dbs:any[]
  label:string
  Name:string

}
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name: string, personName: string, theme: Theme) {
  return {
    fontWeight: personName===name
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };

}
 export function Selecteditable(props: SelectEditableProps) {
        const { personName,dbs,label,Name, ...rest } = props;
        const theme = useTheme();
    return (

      <> 

 <InputLabel id="demo-multiple-name-label">{label}</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          
          value={personName}
       
          input={<OutlinedInput label="Name" name={Name} />}
          MenuProps={MenuProps}
           {...rest}  
        >
          {dbs.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>

</>

      );
}

