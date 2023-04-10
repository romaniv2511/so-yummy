import { useDispatch } from 'react-redux';
import { logOut } from '../../../../redux/auth/authOperations';
import { Box, Button, ButtonBox, Text } from './UserLogout.styled';
import { useAuth } from '../../../../hooks/useAuth';
import { LoaderWithoutMargin } from '../../../Loader/LoaderWithoutMargin';


export const UserLogout = ({onClose}) => {
  const dispatch = useDispatch();
  const { isLoading } = useAuth();
  const onLogout = () => {
    dispatch(logOut())
  }
  return (
    <Box>
      <Text>Are you sure you want to log out?</Text>
      {isLoading
        ? <LoaderWithoutMargin />
        : <ButtonBox>
            <Button
              colorText={p=>p.theme.color.bg}
              bg={p=>p.theme.color.accent}
              onClick={onLogout}
            >Log out</Button>
            <Button
              colorText={p=>p.theme.color.textCancel}
              bg={p=>p.theme.color.gbCancel}
              onClick={onClose}
            >Cancel</Button>
          </ButtonBox>
      }
    </Box>
  )
}
