import './DiagramBar.css';

const DiagramBar = (props) => {

    let batFillHeight = '0%';
    if(props.maxValue > 0) {
        batFillHeight = Math.round(props.value / props.maxValue * 100) + '%';
    }

    return (
    <div className='diagram-bar'>
        <div className='diagram-bar__inner'>
            <div className='diagram-bar__fill' style={{
                height: batFillHeight
            }}></div>
        </div>
        <div className='diagram-bar__label'>{props.label}</div>
    </div>
)
}

export default DiagramBar;