import React from "react";
import styled from "styled-components";

const StyledComponent = () => {
    const Wrapper = styled.div`
    background-color: lightblue;
    width : 50%;
    margin : auto;
    `;
    const Title = styled.h1`
    color : red;`
    return (
        <Wrapper>
            <Title>StyledComponent</Title>
        </Wrapper>
    )
}

export default StyledComponent