import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Task from "./Task";
const List = () => {
  const tasks = useSelector((state) => state.todo.tasks);
  return (
    <div class="page-content page-container" id="page-content">
      <div class="padding">
        <div class="row container d-flex justify-content-center">
          <div class="col-md-12">
            <div class="card px-3">
              <div class="card-body">
                <h4 class="card-title">Todo list</h4>
                <Link to="/add" role="link">
                  Add
                </Link>
                
                
                <div class="list-wrapper">
                  <ul class="d-flex flex-column-reverse todo-list">
                    {tasks?.map((task, index) => {
                      return <Task task={task} key={index} />;
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
