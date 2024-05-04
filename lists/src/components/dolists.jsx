import { Component } from 'react';
import './dolists.css'

class dolists extends Component {
  constructor() {
    super();
    this.state = {
      userInput: '',
      texts: [],
      editIndex: -1,
      editInput: ''
    };
  }

  render() {
    const { userInput, texts, editIndex, editInput } = this.state;

    const handleInput = (e) => {
      this.setState({ userInput: e.target.value });
    };

    const addText = () => {
      this.setState({
        texts: [...texts, userInput],
        userInput: '' 
      });
    };

    const enableEdit = (index) => {
      this.setState({
        editIndex: index,
        editInput: texts[index] 
      });
    };

    const handle_InputEdit = (e) => {
      this.setState({ editInput: e.target.value });
    };

    const updateText = () => {
      const updatedTexts = texts.map((item, index) => {
        if (index === editIndex) {
          return editInput;
        }
        return item;
      });

      this.setState({
        texts: updatedTexts,
        editIndex: -1, 
        editInput: ''
      });
    };

    const deleteText = (textIndex) => {
      const remainingTexts = texts.filter((_, index) => index !== textIndex);
      this.setState({
        texts: remainingTexts
      });
    };

    return (
      <>
        <div className='text-list'>
          <h1 className='title'>Text List</h1>
          <input
            type='text'
            className='input-field'
            placeholder='Add new text'
            value={userInput}
            onChange={handleInput}
          />
          <button onClick={addText}>Add Text</button>
        </div>

        {editIndex === -1 ? (
          <div>
            {texts.map((item, index) => (
              <div key={index}>
                <p>{item}</p>
                <button onClick={() => enableEdit(index)}>Edit Text</button>
                <button onClick={() => deleteText(index)}>Remove Text</button>
              </div>
            ))}
          </div>
        ) : (
          <div className='edit-section'>
            <input
              type='text'
              className='edit-input'
              value={editInput}
              onChange={handle_InputEdit}
            />
            <button onClick={updateText}>Update Text</button>
            <button onClick={() => this.setState({ editIndex: -1 })}>Cancel</button>
          </div>
        )}
      </>
    );
  }
}

export default dolists;
