import { useParams } from "react-router-dom";
import { useState } from "react";

const HomeChildren = () => {
  /**state  state部分**/
  const [boolean, setBoolean] = useState<boolean>(true);
  const { id } = useParams();
  /**effect  effect部分**/

  /**methods 方法部分**/

  /**styles 样式部分**/

  /**render**/

  return (
    <div>
      <span>这是子页面{id}</span>
    </div>
  );
};

export default HomeChildren;
