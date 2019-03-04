import React, { PureComponent } from 'react';
import store from '../../store';
import { updateInput1, updateInput2 } from '../../actions/inputs';
import { addNote } from '../../actions/notes';
import { getNoteCreateInput1, getNoteCreateInput2 } from '../../selectors/noteCreate';
import { getNotes } from '../../selectors/notes';
import Notes from '../../components/inputs/Notes';
import AddNoteForm from '../../components/inputs/AddNoteForm';

export default class NoteView extends PureComponent {
  state = {
    input1: '',
    input2: '',
    notes: []
  };

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      const state = store.getState();
      const input1 = getNoteCreateInput1(state);
      const input2 = getNoteCreateInput2(state);
      const notes = getNotes(state);
      this.setState({ input1, input2, notes });
    });
  }

  componentWillUnmount() {
    if(this.unsubscribe) {
      this.unsubscribe();
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    const { input1, input2 } = this.state;
    store.dispatch(addNote({ input1, input2 }));
  };

  handleChange = ({ target }) => {
    const factoryMethod = {
      input1: updateInput1,
      input2: updateInput2
    };

    store.dispatch(factoryMethod[target.name](target.value));
    // switch (target.name) {
    //   case 'input1':
    //     store.dispatch(updateInput1(target.value));
    //   case 'input2':
    //     store.dispatch(updateInput2(target.value));
    // }
  };

  render() {
    const { input1, input2, notes } = this.state;
    return (
      <>
        <AddNoteForm 
          input1={input1}
          input2={input2}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <Notes notes={notes} />
      </>
    );
  }
}
