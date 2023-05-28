import styled from 'styled-components';

export const SearchbarWrapper = styled.div`
margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  /* box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); */
`;

export const Span = styled.span`
width: 50px;
height: 50px;
`


export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const SearchFormButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  :hover {
    opacity: 1;
  }
`;

export const SearchFormButtonInput = styled.input`
  display: inline-block;
  width:100%;
  height:45px;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  border: 1px solid #f5f5f5;

  :placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

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
 /*background: rgba(0, 0, 0, 0.5); 
 border-radius: 5px; */
`;