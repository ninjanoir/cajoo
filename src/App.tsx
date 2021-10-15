import React from "react"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import { useQuery } from "@apollo/client"
import { CircularProgress } from "@mui/material"

import {
  GetUserWithOrdersQuery,
  GetUserWithOrdersQueryVariables,
  GetUserWithOrdersDocument,
} from "./generated/graphql"

import CardUser from "./components/Card"

function App() {
  const { loading, data } = useQuery<
    GetUserWithOrdersQuery,
    GetUserWithOrdersQueryVariables
  >(GetUserWithOrdersDocument, {
    variables: {
      id: "c9b2663d-f545-4628-85ac-95e665136f44",
    },
  })

  console.log(data)

  return (
    <Container maxWidth="sm">
      <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {loading ? (
          <CircularProgress />
        ) : (
          <>
            <CardUser data={data} />
          </>
        )}
      </Box>
    </Container>
  )
}

export default App
