import { Equal, Expect } from "./helpers/type-utils";

/**
 * How do we type onFocusChange?
 */


type test=(id:boolean)=>void;   //single argument of type boolean
                                // declares function type
  //thisd syntax is usefull if u want top pass functiojn into another function
  
const addListener = (onFocusChange: test)=> { //function return void
  window.addEventListener("focus", () => {
    onFocusChange(true);
  });

  window.addEventListener("blur", () => {
    onFocusChange(false);
  });
};

addListener((isFocused) => {
  console.log({ isFocused });

  type tests = [Expect<Equal<typeof isFocused, boolean>>];
});
