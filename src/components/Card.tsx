
import { Card, Typography } from "@mui/material"
import { GetUserWithOrdersQuery } from "./../generated/graphql"

import { totalNumberOfOrders, totalAmount, oav } from "./../helpers/Counter"

function CardUser(data: GetUserWithOrdersQuery) {
  return (
    <Card>
      <Typography variant="h5" gutterBottom component="div">
        {`${data?.users_by_pk?.first_name} ${data?.users_by_pk?.last_name}`}
      </Typography>

      <Typography variant="subtitle2">
        Nombre de commande réalisé: {totalNumberOfOrders(data)}
      </Typography>

      <Typography variant="subtitle2">
        Montant total dépensé: {totalAmount(data)} euros
      </Typography>

      <Typography variant="subtitle2">
        Dépense moyenne par panier: {oav(data)} euros
      </Typography>
    </Card>
  )
}

export default CardUser
