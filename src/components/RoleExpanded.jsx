import * as React from "react";
import * as Mui from "@mui/material";

import { useDataContext } from "../context/DataContext";

export default function RoleExpanded(props) {
  const [currentCost, setCurrentCost] = React.useState(props.cost);
  const { setData } = useDataContext();

  const handleUpdate = React.useCallback(() => {
    setData((data) => [
      ...data.slice(0, props.id),
      {
        ...data[props.id],
        cost: currentCost,
      },
      ...data.slice(props.id + 1, data.length),
    ]);
  }, [currentCost, props.id, setData]);

  return (
    <Mui.Box
      sx={{
        display: "flex",
        flexDirection: "column",
        paddingX: 2,
        paddingY: 4,
        gap: 5,
      }}
    >
      <Mui.Typography fontWeight={700}>Stock Detail</Mui.Typography>

      <Mui.TextField
        id="outlined-basic"
        label="Cost"
        variant="outlined"
        value={currentCost}
        onChange={(e) => setCurrentCost(e.target.value)}
      />

      <Mui.Box sx={{ display: "flex", gap: 5 }}>
        <Mui.Button variant="contained" onClick={handleUpdate}>
          Update
        </Mui.Button>
        <Mui.Button variant="outlined" onClick={props.close}>
          Cancel
        </Mui.Button>
      </Mui.Box>
    </Mui.Box>
  );
}
