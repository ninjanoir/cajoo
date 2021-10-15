import {useState} from "react"

import { Card, Typography } from "@mui/material"
import {GetUserWithOrdersQuery} from "./../generated/graphql"

import { totalNumberOfOrders, totalAmount } from "./../helpers/Counter"


function CardUser(data : GetUserWithOrdersQuery) {


  return (
    <Card>
      <Typography variant="h2" gutterBottom component="div">
        {`${data?.users_by_pk?.first_name} ${data?.users_by_pk?.last_name}`}
      </Typography>
    </Card>
  )
}

export default CardUser
