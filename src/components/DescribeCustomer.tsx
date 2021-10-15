import {useMemo} from "react"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import { useQuery } from "@apollo/client"


import {
    GetUserWithOrdersQuery,
    GetUserWithOrdersQueryVariables,
    GetUserWithOrdersDocument,
  } from "./../generated/graphql"


import { CircularProgress } from "@mui/material"





function DescribeCustomer (props: any){
    const { loading, data } = useQuery<
    GetUserWithOrdersQuery,
    GetUserWithOrdersQueryVariables
  >(GetUserWithOrdersDocument, {
    variables: {
      id: "c9b2663d-f545-4628-85ac-95e665136f44",
    },
  })



  const values = useMemo(()=> {
      return {
          data,
      }
  }, [data] )


    return (

        <Container maxWidth="sm">
        <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
          {loading ? (
            <CircularProgress />
          ) : (
            <>
              {props.render(values)}
            </>
          )}
        </Box>
      </Container>

    )
}

export default DescribeCustomer
