import * as React from "react";
import * as Mui from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

import { useDataContext } from "../context/DataContext";

export default function RoleExpanded(props) {
  const initialValues = {
    cost: props.cost,
  };
  const { setData } = useDataContext();

  const validationSchema = Yup.object({
    cost: Yup.number(),
  });

  const handleUpdate = React.useCallback(
    (values) => {
      setData((data) => [
        ...data.slice(0, props.id),
        {
          ...data[props.id],
          cost: values.cost,
        },
        ...data.slice(props.id + 1, data.length),
      ]);
    },
    [props.id, setData]
  );

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: handleUpdate,
  });

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

      <form onSubmit={formik.handleSubmit}>
        <Mui.TextField
          id="outlined-basic"
          label="Cost"
          type="number"
          variant="outlined"
          value={formik.values.cost}
          onChange={formik.handleChange("cost")}
        />

        <Mui.Box sx={{ display: "flex", gap: 5 }}>
          <Mui.Button type="submit" variant="contained">
            Update
          </Mui.Button>
          <Mui.Button variant="outlined" onClick={props.close}>
            Cancel
          </Mui.Button>
        </Mui.Box>
      </form>
    </Mui.Box>
  );
}
