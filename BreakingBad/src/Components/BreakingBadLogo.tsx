interface Props {
    str: string[]
}

export default function BreakingBadLogo(props: Props) {
    const {str} = props
    return (
        <div className="letters">
        <span>{str[0]}</span>
        {str[1] && <span className="big-letters">{str[1]}</span>}
        <span>{str[2]}</span>
        </div>
    )
}