import './Title.scss'

interface PropsTitle {
    title: string
    color?: string
}

const Title = ({ title, color }: PropsTitle) => {
    return (
        <h2 style={{ color: color}} className="title">{title}</h2>
    )
}

export default Title;