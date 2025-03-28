//TypeScript是给每一个变量、形式参数、函数(入参和返回值)定义明确的类型
//Hook 相关的类型定义, forwardRef, useImperativeHandle

import {forwardRef, ReactNode, useImperativeHandle, useRef} from "react";

type PropsType = {
    children:  ReactNode
}
type RefType = {
    start: () => void;
}
const Child = forwardRef<any,PropsType>((props, ref)=>{
  useImperativeHandle(ref,()=>{
     return {
         start(){
             console.log("start")
         }
     }
  })
    return <div>{props.children}</div>
});




function App() {
    const ref = useRef<RefType>(null!);
    return (
        <>
            <button onClick={()=>{
                ref.current.start()
            }}>Click</button>
            <Child ref={ref}>Hello World</Child>
        </>

    );
}

export default App;