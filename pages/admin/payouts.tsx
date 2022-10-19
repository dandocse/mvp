import { RemoveRedEye } from "@mui/icons-material";
import { Box, Card, Stack, Table, TableContainer } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableHeader from "components/data-table/TableHeader";
import TablePagination from "components/data-table/TablePagination";
import VendorDashboardLayout from "components/layouts/vendor-dashboard";
import Scrollbar from "components/Scrollbar";
import { H3 } from "components/Typography";
import currency from "currency.js";
import useMuiTable from "hooks/useMuiTable";
import { GetStaticProps } from "next";
import {
  StyledIconButton,
  StyledTableCell,
  StyledTableRow,
} from "pages-sections/admin";
import React, { ReactElement } from "react";
import api from "utils/api/dashboard";

// table column list
const tableHeading = [
  { id: "no", label: "No", align: "left" },
  { id: "sellerInfo", label: "Seller Info", align: "left" },
  { id: "amount", label: "Amount", align: "left" },
  { id: "date", label: "Date", align: "left" },
  { id: "payment", label: "Payment Method", align: "center" },
  { id: "action", label: "Action", align: "center" },
];

// =============================================================================
Payouts.getLayout = function getLayout(page: ReactElement) {
  return <VendorDashboardLayout>{page}</VendorDashboardLayout>;
};
// =============================================================================

type PayoutsProps = { payouts: any[] };

// =============================================================================

export default function Payouts({ payouts }: PayoutsProps) {
  const {
    order,
    orderBy,
    selected,
    rowsPerPage,
    filteredList,
    handleChangePage,
    handleRequestSort,
  } = useMuiTable({ listData: payouts, defaultSort: "no" });

  return (
    <Box py={4}>
      <H3 mb={2}>Payouts</H3>

      <Card>
        <Scrollbar>
          <TableContainer sx={{ minWidth: 800 }}>
            <Table>
              <TableHeader
                order={order}
                hideSelectBtn
                orderBy={orderBy}
                heading={tableHeading}
                rowCount={payouts.length}
                numSelected={selected.length}
                onRequestSort={handleRequestSort}
              />

              <TableBody>
                {filteredList.map((payout, index) => (
                  <StyledTableRow role="checkbox" key={index}>
                    <StyledTableCell align="left">{payout.no}</StyledTableCell>
                    <StyledTableCell align="left">
                      {payout.sellerInfo}
                    </StyledTableCell>

                    <StyledTableCell align="left">
                      {currency(payout.amount, { separator: "," }).format()}
                    </StyledTableCell>

                    <StyledTableCell align="left">
                      {payout.date}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {payout.payment}
                    </StyledTableCell>

                    <StyledTableCell align="center">
                      <StyledIconButton>
                        <RemoveRedEye />
                      </StyledIconButton>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <Stack alignItems="center" my={4}>
          <TablePagination
            onChange={handleChangePage}
            count={Math.ceil(payouts.length / rowsPerPage)}
          />
        </Stack>
      </Card>
    </Box>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const payouts = await api.payouts();
  return { props: { payouts } };
};
