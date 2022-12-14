import React from "react";
import styles from './styles.module.scss'
import * as Types from './types'
import * as Icons from "@harmony/icons";
import cn from "classnames";

function Crumb<T>(props: Types.Props<T>) {
  const {
    crumb,
    children,
    onTitleClick = () => null,
    onDividerClick = () => null,
    ...attrs
  } = props;

  const classes = cn([
    attrs.className,
    styles.crumb,
  ]);

  const handleTitleClick = React.useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    onTitleClick(event, crumb);
  }, [onTitleClick, crumb])

  const handleDividerClick = React.useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    onDividerClick(event, crumb.nesting);
  }, [onDividerClick, crumb])

  return (
    <div className={classes}>
      <button {...attrs} type="button" className={styles.crumb_title} onClick={handleTitleClick}>
        {children}
      </button>
      {crumb.nesting && (
        <button className={styles.crumb_divider} type="button" onClick={handleDividerClick}>
          <Icons.ArrowRight/>
        </button>
      )}
    </div>
  );
}

export default Crumb;
