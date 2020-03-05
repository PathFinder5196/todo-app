import React, { Component } from 'react';
import { Table, Button, Modal, Navbar, Nav } from 'react-bootstrap';

class TodoHome extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      todoList: [{
        id: 1,
        taskDetail: 'First Task'
      },
      {
        id: 2,
        taskDetail: 'Second Task'
      },
      {
        id: 3,
        taskDetail: 'Third Task'
      },
      {
        id: 4,
        taskDetail: 'Fourth Task'
      }]
    }
  }

  editTodo = id => {
    // alert('Edit record with id : ' + id);
    this.handleShow();
  }

  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });


  render() {

    const { todoList, show } = this.state;

    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Todo App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Table striped bordered hover size="sm" responsive>
          <thead>
            <tr>
              <th>
                Task
                            </th>
              <th>
                Action
                            </th>
            </tr>
          </thead>
          <tbody>
            {todoList && todoList.length > 0 ? todoList.map(todoItem => {
              return (
                <tr>
                  <td>
                    {todoItem.taskDetail}
                  </td>
                  <td>
                    <Button onClick={() => this.editTodo(todoItem.id)}>Edit</Button>
                  </td>
                </tr>
              )
            }) :
              <tr>
                <td colSpan="2">
                  No Records Found
                            </td>
              </tr>
            }
          </tbody>
        </Table>
        <Modal show={show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default TodoHome;