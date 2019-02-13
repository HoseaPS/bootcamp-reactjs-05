import React from "react";
import { shallow } from "enzyme";
import TodoList from "./index";

const todos = [
  { id: 0, text: "Fazer café" },
  { id: 1, text: "Estudar ReactJS" },
  { id: 2, text: "Testar minha app" }
];

it("should render todos", () => {
  const wrapper = shallow(<TodoList />);

  wrapper.setState({
    todos
  });

  expect(wrapper.find("li")).toHaveLength(3);
});
