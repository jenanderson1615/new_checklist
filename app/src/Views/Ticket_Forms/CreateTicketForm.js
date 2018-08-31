import React from "react";

const CreateTicketForm = () => {
  return (
    <div>
      <form onSubmit={() => handleSubmit()}>
        <div>Create a Ticket</div>
        <div>
          <label>
            <div>Short Description:</div>
            <textarea />
          </label>
        </div>
        <div>
          <label>
            <div>Summary - Provide a Descriptive Summary of the Issue</div>
            <textarea />
          </label>
        </div>
        <div>
          <label>
            <div>
              Expected Results - Describe What you Expected to Happen When You
              Executed the Steps Above
            </div>
            <textarea />
          </label>
        </div>
        <div>
          <label>
            <div>
              Actual Results - Explain What Actually Occurred When the Steps
              Above Were Executed
            </div>
            <textarea />
          </label>
        </div>
        <div>
          <label>
            <div>
              Regression - Describe Circumstances Where the Problem Occurs or
              Does Not Occur, Such as Software Versions and/or Hardware
              Configurations
            </div>
            <textarea />
          </label>
        </div>
        <div>
          <label>
            <div>
              Notes - Provide Additional Information, Such as References to
              Related Problems, Workarounds, and Relevant Attachments
            </div>
            <textarea />
          </label>
        </div>
        <div>
          <input type="submit" value="Create Ticket" />
        </div>
      </form>
    </div>
  );
};

const handleSubmit = event => {
  alert("A ticket was submitted");
  event.preventDefault();
};

export default CreateTicketForm;
