import styled from 'styled-components';

export const FilmsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  flex-wrap: wrap;
  gap: 30px 20px;
  margin-bottom: 80px;
  justify-items: center;
  padding: 0 40px;
`;

export const FilmsItem = styled.li`
  position: relative;
  top: 0;
  transition: top 0.2s;
`;

export const FilmsImage = styled.img`
  border-radius: 10px;
  width: 100%;
  height: 100%;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0px 0px 10px #f50057;
  }
`;

export const FilmsTitle = styled.p`
  position: absolute;
  bottom: 0px;
  left: 10px;
  color: #ffffff;
  font-weight: bold;
  font-size: 18px;
  padding: 0 5px;
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
