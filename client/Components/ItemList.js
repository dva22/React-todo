import React from 'react';

export default props =>

    props.items.map((item, i) => {

        let styleLink = '';
        if (props.active === i)
            styleLink += ' activeTask';

        if (item.done == true)
            styleLink += ' doneItem';

            return item.name && item.name.length > 0 &&
                (
                    <div style={{width: 100}}>
                        <a
                            className="done"
                            onClick={() => props.onDone(i)}>|V|</a>

                        <a
                            className="del"
                            onClick={() => props.onRemove(i)}>|X|</a>

                        <a
                            className={"link .text-truncate" + styleLink}
                            onClick={() => props.onActive(i)}>{item.name}</a>

                    </div>

                )
        }
    );


