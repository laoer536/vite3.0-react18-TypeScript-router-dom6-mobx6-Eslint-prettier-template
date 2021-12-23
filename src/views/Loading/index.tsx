import "./index.moudle.less";
const Loading = () => {
  /**state  state部分**/

  /**effect  effect部分**/

  /**methods 方法部分**/

  /**styles 样式部分**/

  /**render**/

  return (
    <div className={"Loading"}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{ margin: "auto", display: "block" }}
        width="200px"
        height="200px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <g transform="translate(50 50) scale(0.7000000000000001) translate(-50 -50)">
          <g>
            <animateTransform
              attributeName="transform"
              type="rotate"
              repeatCount="indefinite"
              calcMode="spline"
              dur="4s"
              values="0 50 50;90 50 50;180 50 50;270 50 50;360 50 50"
              keyTimes="0;0.25;0.5;0.75;1"
              keySplines="0 1 0 1;0 1 0 1;0 1 0 1;0 1 0 1"
            />
            <g>
              <animateTransform
                attributeName="transform"
                type="scale"
                dur="1s"
                repeatCount="indefinite"
                calcMode="spline"
                values="1;1;0.5"
                keyTimes="0;0.5;1"
                keySplines="1 0 0 1;1 0 0 1"
              />
              <g transform="translate(25 25)">
                <rect x="-25" y="-25" width="52" height="52" fill="#e15b64">
                  <animate
                    attributeName="fill"
                    dur="4s"
                    repeatCount="indefinite"
                    calcMode="spline"
                    values="#e15b64;#f47e60;#f8b26a;#abbd81;#e15b64"
                    keyTimes="0;0.25;0.5;0.75;1"
                    keySplines="0 1 0 1;0 1 0 1;0 1 0 1;0 1 0 1"
                  />
                </rect>
              </g>
              <g transform="translate(25 75)">
                <rect x="-25" y="-25" width="52" height="50" fill="#e15b64">
                  <animateTransform
                    attributeName="transform"
                    type="scale"
                    dur="1s"
                    repeatCount="indefinite"
                    calcMode="spline"
                    values="0;1;1"
                    keyTimes="0;0.5;1"
                    keySplines="1 0 0 1;1 0 0 1"
                  />
                  <animate
                    attributeName="fill"
                    dur="4s"
                    repeatCount="indefinite"
                    calcMode="spline"
                    values="#e15b64;#f47e60;#f8b26a;#abbd81;#e15b64"
                    keyTimes="0;0.25;0.5;0.75;1"
                    keySplines="0 1 0 1;0 1 0 1;0 1 0 1;0 1 0 1"
                  />
                </rect>
              </g>
              <g transform="translate(75 25)">
                <rect x="-25" y="-25" width="50" height="52" fill="#e15b64">
                  <animateTransform
                    attributeName="transform"
                    type="scale"
                    dur="1s"
                    repeatCount="indefinite"
                    calcMode="spline"
                    values="0;1;1"
                    keyTimes="0;0.5;1"
                    keySplines="1 0 0 1;1 0 0 1"
                  />
                  <animate
                    attributeName="fill"
                    dur="4s"
                    repeatCount="indefinite"
                    calcMode="spline"
                    values="#e15b64;#f47e60;#f8b26a;#abbd81;#e15b64"
                    keyTimes="0;0.25;0.5;0.75;1"
                    keySplines="0 1 0 1;0 1 0 1;0 1 0 1;0 1 0 1"
                  />
                </rect>
              </g>
              <g transform="translate(75 75)">
                <rect x="-25" y="-25" width="50" height="50" fill="#e15b64">
                  <animateTransform
                    attributeName="transform"
                    type="scale"
                    dur="1s"
                    repeatCount="indefinite"
                    calcMode="spline"
                    values="0;1;1"
                    keyTimes="0;0.5;1"
                    keySplines="1 0 0 1;1 0 0 1"
                  />
                  <animate
                    attributeName="fill"
                    dur="4s"
                    repeatCount="indefinite"
                    calcMode="spline"
                    values="#e15b64;#f47e60;#f8b26a;#abbd81;#e15b64"
                    keyTimes="0;0.25;0.5;0.75;1"
                    keySplines="0 1 0 1;0 1 0 1;0 1 0 1;0 1 0 1"
                  />
                </rect>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Loading;
