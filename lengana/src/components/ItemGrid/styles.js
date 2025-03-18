import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
  margin-top: 2rem;
`;

export const CardContainer = styled.div`
  position: relative;
  height: 400px;
  cursor: pointer;
  perspective: 1000px;
`;

const CardSide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transition: all 0.8s ease;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
`;

export const CardFront = styled(CardSide)`
  transform: rotateY(${props => props.isFlipped ? '180deg' : '0deg'});
  background: white;
`;

export const CardBack = styled(CardSide)`
  transform: rotateY(${props => props.isFlipped ? '0deg' : '180deg'});
  background: #f8f9fa;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Image = styled.img`
  width: 100%;
  height: 340px;
  object-fit: cover;
`;

export const PriceTag = styled.div`
  background: #27ae60;
  color: white;
  padding: 0.5rem;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
`;