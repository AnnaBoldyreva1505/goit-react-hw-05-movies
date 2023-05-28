import styled from 'styled-components';

export const Title = styled.h1`
  text-align: center;
  text-transform: uppercase;
  margin-top: 100px;
`;

export const OtherFilmsContainer = styled.div`
  padding: 0;
`;

export const OtherFilmsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr)); 
  flex-wrap: wrap;
  gap: 30px 20px;
  margin-bottom: 80px;
  justify-items: center;
  padding: 0 40px;
`;

export const OtherFilmsItem = styled.li`
  position: relative;
  top: 0;
  transition: top 0.2s;
`;

export const OtherFilmsImage = styled.img`
  border-radius: 10px;
  width: 100%;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0px 0px 10px #f50057;
  }
`;

export const OtherFilmsRating = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
  background-color: #f50057;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;

export const OtherFilmsTitle = styled.p`
  position: absolute;
  bottom: 0px;
  left: 10px;
  /* width: 40px;
  height: 40px; */
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;

