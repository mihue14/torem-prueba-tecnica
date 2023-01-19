import React from 'react';
import { IoMdClose } from 'react-icons/io';
import styled from 'styled-components';
import { getModalTicket, setModalTicket } from '../../redux/chatsSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

const Background = styled.div`
  width: 100%;
  height: 60%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  z-index: 10;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

const ModalContent = styled.div<{ status: number }>`
  display: flex;
  height: 300px;
  margin-top: auto;
  margin-bottom: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ status }) => (status === 0 ? '#00DB77' : '#DB060F')};
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

const CloseModalButton = styled(IoMdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

const CircleTop = styled.div`
  position: absolute;
  width: 48px;
  height: 48px;
  left: 475px;
  top: 75px;
  border-radius: 20px;

  background: #fff;
`;

const CircleBottom = styled.div`
  position: absolute;
  width: 48px;
  height: 48px;
  left: 475px;
  top: 380px;
  border-radius: 20px;

  background: #fff;
`;

const Line = styled.span`
  position: absolute;
  width: 400px;
  height: 0px;
  left: 299px;
  top: 250px;

  border: 2px dashed #ffffff;
  transform: rotate(-90deg);
`;

export const Modal = () => {
  const showModal = useAppSelector(getModalTicket);
  const dispatch = useAppDispatch();

  const closeModal = () => dispatch(setModalTicket([]));

  return (
    <>
      {showModal.length > 0 && (
        <Background onClick={closeModal}>
          <ModalWrapper>
            <CircleTop />
            <Line />
            <ModalContent status={showModal[0].status}>
              {showModal.map((ticket) => {
                return (
                  <>
                    <span
                      style={{ color: '#fff', fontSize: '30px', WebkitTextStroke: '2px white' }}
                    >
                      {ticket.title}
                    </span>
                    <span style={{ color: '#fff', textAlign: 'center' }}>{ticket.description}</span>
                    <div>
                      <span
                        style={{
                          color: showModal[0].status === 0 ? '#00DB77' : '#DB060F',
                          backgroundColor: '#fff',
                          borderRadius: '13px',
                          padding: '5px'
                        }}
                      >
                        {ticket.brand}
                      </span>
                      <span style={{ color: '#fff', padding: '10px', fontSize: '30px' }}>|</span>
                      <span style={{ color: '#fff' }}>{ticket.tag}</span>
                    </div>
                  </>
                );
              })}
            </ModalContent>
            <ModalContent status={showModal[0].status}>
              {showModal.map((ticket) => {
                return (
                  <>
                    <span style={{ color: '#fff' }}>{ticket.date.toLocaleDateString()}</span>
                    <span
                      style={{
                        color: showModal[0].status === 0 ? '#00DB77' : '#DB060F',
                        backgroundColor: '#fff',
                        borderRadius: '13px',
                        padding: '5px'
                      }}
                    >
                      {ticket.priority === 0 ? 'ALTA' : ticket.priority === 1 ? 'MEDIA' : 'BAJA'}
                    </span>
                    <span style={{ color: '#fff' }}>#{ticket.id}</span>
                  </>
                );
              })}
            </ModalContent>
            <CircleBottom />
            <CloseModalButton aria-label="Close modal" onClick={closeModal} />
          </ModalWrapper>
        </Background>
      )}
    </>
  );
};
