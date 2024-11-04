/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { forwardRef } from "react";

const Textarea = forwardRef((props, ref) => {
  return (
    <textarea
      type="text"
      className="bg-zinc-800 px-3 py-2 block my-2 w-full"
      {...props}
      ref={ref}
    >
      {props.children}
    </textarea>
  );
});

export default Textarea;
