import { Status } from "./Status";
import { Description } from "./Description";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px auto;
    border: 1px solid black;
    width: 350px;
    border-radius: 5px;
    box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
`

export const Profile = () => {
    return <Container className="profile">
        <Description />
        <Status/>
</Container>
}