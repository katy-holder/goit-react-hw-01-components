import styled from "styled-components"

export const OnlineStatus = styled.span`
display: block;
width: 20px;
height: 20px;
border-radius: 50%;
margin-right: 20px;
background-color: ${({isOnline, theme})=> (isOnline ? theme.colors.green : theme.colors.red)}
`;