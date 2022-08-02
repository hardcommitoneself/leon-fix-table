import * as React from "react";
import * as Mui from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import RoleExpanded from "./RoleExpanded";

export default function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <Mui.TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <Mui.TableCell>
          <Mui.IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </Mui.IconButton>
        </Mui.TableCell>
        <Mui.TableCell component="th" scope="row">
          {row.name}
        </Mui.TableCell>
        <Mui.TableCell align="right">{row.quantity}</Mui.TableCell>
        <Mui.TableCell align="right">{row.allocated}</Mui.TableCell>
        <Mui.TableCell align="right">{row.notAvailable}</Mui.TableCell>
      </Mui.TableRow>
      <Mui.TableRow>
        <Mui.TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Mui.Collapse in={open} timeout="auto" unmountOnExit>
            <RoleExpanded
              id={props.id}
              cost={row.cost}
              close={() => setOpen(false)}
            />
          </Mui.Collapse>
        </Mui.TableCell>
      </Mui.TableRow>
    </React.Fragment>
  );
}
