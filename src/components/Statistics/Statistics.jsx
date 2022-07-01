import data from "../../mock/data.json";
import styled from "styled-components";

const Statistic = styled.section`
  display: column;
  text-align: center;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 32px;
  margin: 0 auto;
`;

const ListLink = styled.ul`
  list-style: none;
  display: flex;
  text-align: center;
  justify-content: center;
  padding: 0;
`;

const ListItem = styled.li`
  padding: 10px 15px;
  border: 1px solid black;
  border-radius: 4px;
  margin: 5px;
  box-shadow: 18px -13px 47px -18px rgba(66, 68, 90, 1);
`;

const ListEl = styled.span`
  padding: 10px;
`;

export const Statistics = () => {
  return (
    <Statistic className="statistics">
  <Title className="title">Upload stats</Title>
      <ListLink className="stat-list">
        {data.map(el =>
          <ListItem className="item"
            key={el.id}><ListEl
            className="label">{el.label}
          </ListEl>
          <span className="percentage">{el.percentage}%</span></ListItem>)}
  </ListLink>
    </Statistic>
  )
}