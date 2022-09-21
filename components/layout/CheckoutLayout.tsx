import CloseIcon from '@mui/icons-material/Close';
import { Button, IconButton, Stack, Typography } from '@mui/material';
import styles from './CheckoutLayout.module.scss';

type CheckoutLayoutType = {
  children: JSX.Element;
  onClosedPressed: () => void;
};

const CheckoutLayout: React.FC<CheckoutLayoutType> = ({
  onClosedPressed,
  children,
}) => (
  <Stack>
    <IconButton onClick={onClosedPressed} className={styles.closeBtn}>
      <CloseIcon>Close</CloseIcon>
    </IconButton>
    {children}
    <Button variant="contained" color="secondary">
      <Typography>Checkout</Typography>
    </Button>
  </Stack>
);

export default CheckoutLayout;
