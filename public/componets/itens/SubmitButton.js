import styled from "styled-components";

const Box = styled.div`
    .btn{
    background-color:  #645EF6;
    color: white;
    cursor: pointer;
    border: none;
    border-radius: 1em;
    box-shadow: 0px 0px 52px 0px #645EF6;
    padding: 17px 55px 17px 55px;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 16px;
    margin-top: 2em;
    margin-bottom: 3.5em;
    transition: 1s;
}

    .btn:hover{
        background-color: #0062FF;
    }
`;

export default function SubimitButton({ text }) {
    return (
        <Box>
            <div>
                <button className="btn">{text}</button>
            </div>
        </Box>

    );
}