import { IoMdCheckmark } from "react-icons/io";
import { IoPinOutline } from "react-icons/io5";

const Task = ( {task, onDelete, onPin, onToggle} ) => {
  return (
    <div
      className={`task ${task.reminder ? 'reminder' : ''} ${task.pinned ? 'pinned' : ''}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <div class="cssBoxFix">
        <h3>{task.text}</h3>

        <div className="icons">
          {!task.pinned && (
            <IoMdCheckmark
              className="deleteIcon" // Checkmark, tar också bort task från arrey
              style={{ color: "green", cursor: "pointer" }}
              onClick={() => onDelete(task.id)}
            />

          )}
          <IoPinOutline
            className="pinIcon" // pin, används för att fasta task och tar bort "deleteIcon"
            style={{ cursor: "pointer" }}
            onClick={() => onPin(task.id)}
          />
        </div>
      </div>
      <p className="dateText">{task.day}</p>
    </div>
  );
  
}

export default Task
