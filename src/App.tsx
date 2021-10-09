import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { useQuery } from '@apollo/client';
import {
  GetUsersDocument,
  GetUsersQuery,
  GetUsersQueryVariables,
} from './generated/graphql';
import {
  CircularProgress,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';

function App() {
  const { loading, data } = useQuery<GetUsersQuery, GetUsersQueryVariables>(
    GetUsersDocument,
    {
      variables: { limit: 10 },
    }
  );

  return (
    <Container maxWidth='sm'>
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {loading ? (
          <CircularProgress />
        ) : (
          <List>
            {data?.users.map((user) => (
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => window.alert('Display more details!')}
                >
                  <ListItemText primary={user.email} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        )}
      </Box>
    </Container>
  );
}

export default App;
