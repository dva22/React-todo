import React from 'react';

export default props =>
    props.items.map((item, i) =>

        item.name.length > 0 &&
        (
            <p>
                <a
                    className="done"
                    onClick={() => props.onDone(i)}>|V|</a>

                <a
                    className="del"
                    onClick={() => props.onRemove(i)}
                >|X|</a>
                {
                    props.active === i
                    ?
                    <a
                       className="link .text-truncate activeTask"
                        onClick={() => props.onActive(i)}
                    >{item.name}</a>
                    :
                    <a
                        className="link .text-truncate"
                        onClick={() => props.onActive(i)}
                    >{item.name}</a>
                }

            </p>
        )
    );

