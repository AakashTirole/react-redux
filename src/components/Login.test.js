import { render, screen } from "@testing-library/react";
import Login from "./Login";

test('on initial render, the pay button is dissabled', () =>{
  render(<Login/>)
  screen.debug();
})