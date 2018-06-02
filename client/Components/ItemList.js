import React from 'react';
/*
*  render elements from Tasks and Orders
*
* */
export default props =>

    props.items.map((item, i) => {

            //fill style link
            let styleLink = '';

            if (props.active === i)
                styleLink += ' activeTask';

            if (item.done === true)
                styleLink += ' doneItem';

            //fill name link
            let valueItem = item.name;

            if (item.countAllOrders)
                valueItem += ' (' + item.countWorkingOrders +
                    ' / ' + item.countAllOrders + ')';

            // render elements or not
            let isVisible =
                item.name &&
                item.name.length > 0 &&
                (props.navItem === 'HISTORY' && item.history ||
                 props.navItem === 'WORKING' && !item.history ||
                 !props.navItem);

            return isVisible &&
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
                            onClick={() => props.onActive(i)}>{valueItem}</a>

                    </div>

                )
        }
    )



