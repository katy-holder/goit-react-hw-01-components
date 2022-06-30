import user from "../../mock/user.json";
import styled from "styled-components";

const Container = styled.div`
    
`;

const ImgEl = styled.img`
    align-items: center;
    display: flex;
    justify-content: center;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin: 15px;
`;

const InfoText  = styled.p`
    font-size: 20px;
    text-align: center;
`

export const Description = () => {
    return <Container className="description">
    <ImgEl
        src={ user.avatar}
        alt="User avatar"
        className="avatar"/>
    <InfoText className="name">{ user.username }</InfoText>
    <InfoText className="tag">@{ user.tag}</InfoText>
    <InfoText className="location">{ user.location}</InfoText>
</Container>
}
