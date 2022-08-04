import * as React from "react";
import * as Mui from "@mui/material";

import Row from "./components/ListRow";
import RoleExpanded from "./components/RoleExpanded";

import { useDataContext } from "./context/DataContext";

export default function VariantInventory() {
  const { data } = useDataContext();

  return (
    <Mui.Container>
      <Mui.TableContainer sx={{ padding: 5 }}>
        <Mui.Table aria-label="collapsible table">
          <Mui.TableHead sx={{ backgroundColor: "#f1f5f9", borderRadius: 5 }}>
            <Mui.TableRow>
              <Mui.TableCell />
              <Mui.TableCell sx={{ fontWeight: 700, color: "#64748b" }}>
                WAREHOUSE
              </Mui.TableCell>
              <Mui.TableCell
                align="right"
                sx={{ fontWeight: 700, color: "#64748b" }}
              >
                QUANTITY
              </Mui.TableCell>
              <Mui.TableCell
                align="right"
                sx={{ fontWeight: 700, color: "#64748b" }}
              >
                ALLOCATED
              </Mui.TableCell>
              <Mui.TableCell
                align="right"
                sx={{ fontWeight: 700, color: "#64748b" }}
              >
                NOT AVAILABLE
              </Mui.TableCell>
              <Mui.TableCell
                align="right"
                sx={{ fontWeight: 700, color: "#64748b" }}
              >
                ON HAND
              </Mui.TableCell>
            </Mui.TableRow>
          </Mui.TableHead>
          <Mui.TableBody>
            {data.map((row, index) => (
              <Row key={index} id={index} row={row} />
            ))}
          </Mui.TableBody>
        </Mui.Table>
      </Mui.TableContainer>
    </Mui.Container>
  );
}
