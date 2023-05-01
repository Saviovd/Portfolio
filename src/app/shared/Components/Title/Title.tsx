import { TitleStyle } from "./styles";

interface PropsTitle {
    title: string
    color?: string
}

const Title = ({ title, color }: PropsTitle) => {
    return (<>
    <TitleStyle style={{ color: color}}>
        {title}
    </TitleStyle>
    </>)
}

export default Title;