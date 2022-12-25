import PropTypes from 'prop-types';
import { Component } from 'react';
import { Button, Form, Input, InputTitle, Label } from './ContactForm.styled';

const initialValue = { name: '', number: '' };

export class ContactForm extends Component {
  state = initialValue;

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  handleChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state);
    this.setState(initialValue);
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label>
          <InputTitle>Name</InputTitle>
          <Input
            onChange={this.handleChange}
            value={this.state.name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>

        <Label>
          <InputTitle>Number</InputTitle>
          <Input
            onChange={this.handleChange}
            value={this.state.number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>

        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}
