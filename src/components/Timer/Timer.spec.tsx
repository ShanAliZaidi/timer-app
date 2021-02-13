import React from "react"
import { shallow} from "enzyme"
import Timer from "./Timer"



describe("Timer", () => {
  let TimerContainer:any;
  
  beforeEach(() => (TimerContainer = shallow(<Timer />)));

  it("should render a <div />", () => {
    expect(TimerContainer.find("div").length).toBeGreaterThanOrEqual(1);
  })

  it('should render 3 Button components', () => {
    expect(TimerContainer.find('button').length).toBeGreaterThanOrEqual(3);
  });



})