import React, { useState } from "react";
import { useAlert } from "react-alert"; //replaces javascript alert
import { useMutation } from '@apollo/client';
import { ADD_REACTION } from '../../utils/mutations';


const ReactionForm = ({ thoughtId }) => {
    const alert = useAlert();
    const [reactionBody, setBody] = useState('');
    const [characterCount, setCharacterCount] = useState(0);
    const [addReaction, { error }] = useMutation(ADD_REACTION);
  
    // update state based on form input changes
    const handleChange = event => {
      if (event.target.value.length <= 280) {
        setBody(event.target.value);
        setCharacterCount(event.target.value.length);
      }
    };
  
    // submit form
    const handleFormSubmit = async event => {
      event.preventDefault();
  
      try {
        await addReaction({
          variables: { reactionBody, thoughtId }
        });
  
        // clear form value
        setBody('');
        setCharacterCount(0);
        alert.success(<button className="btn profile-title text-secondary">Reaction Posted - SHHHH no spoilers!</button>)
      } catch (e) {
        console.error(e);
      }
    };

  return (
    <div>
      <p
        className={`m-0 ${characterCount === 280 || error ? "text-error" : ""}`}
      >
        Character Count: {characterCount}/280
        {error && <span className="ml-2">Something went wrong...</span>}
      </p>
      <form
        className="flex-row justify-center justify-space-between-md align-stretch"
        onSubmit={handleFormSubmit}
      >
        <textarea
          placeholder="Reply to this post"
          value={reactionBody}
          className="form-input col-12 col-md-9"
          onChange={handleChange}
          style={{ fontFamily: 'Arial', fontWeight: 400}}
        ></textarea>

        <button className="btn col-12 col-md-3" type="submit" style={{ marginLeft: 0, marginTop: 16}}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReactionForm;
