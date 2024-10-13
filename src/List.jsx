import styles from "./stylesheets/List.module.css"

function List(props) {

    const title = props.title;
    const items = props.items;

    const listItems = items.map( item => <li key = {item.id}>
                                            {item.name}: &nbsp;
                                            <b>{item.val}</b>
                                        </li> );

    return (
        <>
            <h3 className={styles.listTitle}>{title}</h3>
            <ol className={styles.listItems}>{listItems}</ol>
        </>
    );
}

List.defaultProps = {
    title: "Title",
    items: [{id: 0, name: "N.A.", val: -1}]
}

export default List