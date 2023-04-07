import { Box, Button, ButtonBox, Text } from './UserLogout.styled';

export const UserLogout = ({onClose}) => {
  return (
    <Box>
      <Text>Are you sure you want to log out?</Text>
      <ButtonBox>
        <Button color={p=>p.theme.color.bg} bg={p=>p.theme.color.accent}>Log out</Button>
        <Button color={p=>p.theme.color.textCancel} bg={p=>p.theme.color.gbCancel}>Cancel</Button>
      </ButtonBox>
    </Box>
  )
}
