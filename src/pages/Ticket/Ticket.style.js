import styled from 'styled-components';




export const TicketSection = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  padding: 50px 30px;
  min-height: calc(100vh - 200px);

.ticket__container{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  padding: auto;
  color: black;
  min-height: 150px;
  width: 300px;
  
}

.image__container{
  display: flex;
  justify-content:center;
}
img{
  -webkit-box-shadow: -1px 11px 24px -4px rgba(0,0,0,0.75);
  -moz-box-shadow: -1px 11px 24px -4px rgba(0,0,0,0.75);
  box-shadow: -1px 11px 24px -4px rgba(0,0,0,0.75);
}
`;

