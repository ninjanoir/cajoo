import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { useQuery } from '@apollo/client';
import { CircularProgress, Typography } from '@mui/material';
import {
  GetUserWithOrdersQuery,
  GetUserWithOrdersQueryVariables,
  GetUserWithOrdersDocument,
} from './generated/graphql';

function App() {
  const { loading, data } = useQuery<
    GetUserWithOrdersQuery,
    GetUserWithOrdersQueryVariables
  >(GetUserWithOrdersDocument, {
    variables: {
      id: '87ff5d34-845d-4dfb-8de8-ec487455d9c6',
    },
  });

  return (
    <Container maxWidth='sm'>
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {loading ? (
          <CircularProgress />
        ) : (
          <Typography variant='h2' gutterBottom component='div'>
            {`${data?.users_by_pk?.first_name} ${data?.users_by_pk?.last_name}`}
          </Typography>
        )}
      </Box>
    </Container>
  );
}

export default App;
