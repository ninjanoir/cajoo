import { Card, Typography } from "@mui/material"

import { totalNumberOfOrders, totalAmount } from "./../helpers"

function CardUser({ data }: any) {
  return (
    <Card>
      <Typography variant="h2" gutterBottom component="div">
        {`${data?.users_by_pk?.first_name} ${data?.users_by_pk?.last_name}`}
      </Typography>
    </Card>
  )
}

export default CardUser
