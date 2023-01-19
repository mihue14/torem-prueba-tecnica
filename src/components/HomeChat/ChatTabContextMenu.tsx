import * as Menu from '@radix-ui/react-context-menu';
import styled from 'styled-components';
import { MockTicketData } from '../../utils/mockData';
import { setModalTicket } from '../../redux/chatsSlice';
import { useAppDispatch } from '../../redux/hooks';

const Container = styled.div`
  background-color: #fff;
  border: 1px solid #eee;
  padding: 5px;
`;

const Item = styled(Menu.Item)`
  color: #000;
  padding: 3px;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    color: #fff;
    background-color: #36dd81;
  }
`;

export default function ChatTabContextMenu() {
  const dispatch = useAppDispatch();

  const handleShowOpenTicket = () => {
    // TODO: Show open ticket component.
    let filter = MockTicketData.filter((ticket) => ticket.status === 0);
    dispatch(setModalTicket(filter));
  };

  const handleShowClosedTicket = () => {
    // TODO: Show closed ticket component.
    let filter = MockTicketData.filter((ticket) => ticket.status === 1);
    dispatch(setModalTicket(filter));
  };

  return (
    <Container>
      <Item onClick={handleShowOpenTicket}>Ver ticket abierto</Item>
      <Menu.Separator />
      <Item onClick={handleShowClosedTicket}>Ver ticket cerrado</Item>
    </Container>
  );
}
