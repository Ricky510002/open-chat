import React, {memo} from "react";
import DeleteIcon from "@material-ui/icons/Delete";

export const ListArea = memo((props) => {
  const {messageList,onClickDelete} = props;
  return (
    <div className="listArea">
      <ul id="messageList">
        {messageList.map((list, index) => {
          return (
            <li key={index} className="listLow">
              <div class="box">
                <div class="name">
                  {list.name}
                  <span
                    onClick={() => {
                      onClickDelete(index);
                    }}
                  >
                    <DeleteIcon />
                  </span>
                </div>
                <p>{list.message}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
});
