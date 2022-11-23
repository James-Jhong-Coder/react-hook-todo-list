import styled from 'styled-components';
const Card = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    box-shadow: 0px 0px 2px #bdb2b2;
    background: #ffffff;
    border-radius: 5px;
    line-height: 1;

    h2 {
        color: #151515;
        font-size: 16px;
        margin-bottom: 16px;
        font-weight: bold;
    }
    article {
        color: #989898;
        font-size: 12px;
    }
`

const RenderedCard = (props) => {
    return (
        <Card>
            <h2>{ props.title }</h2>
            <article>{ props.content }</article>
        </Card>
    )
}

export default RenderedCard