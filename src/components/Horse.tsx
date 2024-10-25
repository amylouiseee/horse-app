// Component to show a horse's details and deal with editing
const Horse = (props: any) => {
    return (
        <div>
            <ul>
                <li>&#8226; {props.name}</li>
            </ul>
        </div>
    );
}
export default Horse;