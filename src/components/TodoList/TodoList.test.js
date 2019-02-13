import React from "react";
import { shallow } from "enzyme";
import TodoList from "./index";

const todos = [
  { id: 0, text: "Fazer café" },
  { id: 1, text: "Estudar ReactJS" },
  { id: 2, text: "Testar minha app" }
];

describe("TodoList component", () => {
  it("should render todos", () => {
    const wrapper = shallow(<TodoList />);

    wrapper.setState({
      todos
    });

    expect(wrapper.find("li")).toHaveLength(3);
  });

  it("should be able to add new todo", () => {
    const wrapper = shallow(<TodoList />);

    wrapper.setState({
      todos
    });

    wrapper.find("button").simulate("click");

    expect(wrapper.state("todos")).toHaveLength(4);
  });

  it("should be able to remove todo", () => {
    const wrapper = shallow(<TodoList />);

    wrapper.setState({
      todos
    });

    wrapper
      .find("li")
      .first()
      .simulate("click");

    expect(wrapper.state("todos")).not.toContain(todos[0]);
  });
});
